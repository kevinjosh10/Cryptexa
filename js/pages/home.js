import { Store } from '../store.js';
import { CHART_DEFAULTS } from '../components/chartConfig.js';
import { renderCoinCard } from '../components/coinCard.js';

let filterState = 'all';
let sortState = 'default';
let globalQuery = '';
let dashboardCharts = [];

export function renderDashboard() {
  updateMarketBar();
  drawGrid();
}

export function drawGrid() {
  const grid = document.getElementById('dashboard-grid');
  if (!grid) return;

  dashboardCharts.forEach(c => c.destroy());
  dashboardCharts = [];

  let list = [...Store.COINS];

  if (globalQuery) {
    list = list.filter(c => c.name.toLowerCase().includes(globalQuery) || c.symbol.toLowerCase().includes(globalQuery));
  }

  if (filterState !== 'all') {
    list = list.filter(c => c.decision.toLowerCase() === filterState);
  }

  if (sortState === 'rs-desc') list.sort((a, b) => b.realityScore - a.realityScore);
  else if (sortState === 'hype-desc') list.sort((a, b) => b.hype - a.hype);
  else if (sortState === 'mcap') list.sort((a, b) => b.mcapRaw - a.mcapRaw);
  else if (sortState === 'gainers') list.sort((a, b) => b.change - a.change);
  else if (sortState === 'losers') list.sort((a, b) => a.change - b.change);

  if (list.length === 0) {
    grid.innerHTML = `<div class="text-muted" style="grid-column: 1/-1; padding: 40px; text-align: center;">No assets match current filters.</div>`;
    updateCount(0);
    return;
  }

  grid.innerHTML = list.map(c => renderCoinCard(c)).join('');
  updateCount(list.length);

  setTimeout(() => {
    list.forEach(c => {
      const el = document.getElementById(`ch-${c.id}`);
      if (!el || !c.hist || !c.hist.length) return;
      const isUp = c.hist[c.hist.length - 1] >= c.hist[0];
      const color = isUp ? '#5BB539' : '#C71824';
      const grad = el.getContext('2d').createLinearGradient(0, 0, 0, 68);
      grad.addColorStop(0, color + '40');
      grad.addColorStop(1, 'transparent');

      dashboardCharts.push(new Chart(el, {
        type: 'line',
        data: { labels: c.hist.map((_, i) => i), datasets: [{ data: c.hist, borderColor: color, backgroundColor: grad, fill: true, tension: 0.4, borderWidth: 2 }] },
        options: { ...CHART_DEFAULTS, events: [] }
      }));
    });
  }, 10);
}

function updateMarketBar() {
  const g = Store.globalData;
  if (!g) return;
  const els = {
    'mb-mc': { v: '$' + (g.total_market_cap.usd / 1e12).toFixed(2) + 'T', c: g.market_cap_change_percentage_24h_usd },
    'mb-vol': { v: '$' + (g.total_volume.usd / 1e9).toFixed(1) + 'B', s: '24h Total Volume' },
    'mb-dom': { v: 'BTC ' + g.market_cap_percentage.btc.toFixed(1) + '%', s: 'ETH ' + g.market_cap_percentage.eth.toFixed(1) + '%' },
    'mb-fng': { v: Store.fngData ? Store.fngData.value : '—', s: Store.fngData ? Store.fngData.value_classification : 'Fear & Greed' }
  };
  Object.keys(els).forEach(k => {
    const el = document.getElementById(k);
    if (el) {
      if (els[k].v) el.querySelector('.mbar-value').textContent = els[k].v;
      if (els[k].s) el.querySelector('.mbar-sub').textContent = els[k].s;
      if (els[k].c !== undefined) {
        const sub = el.querySelector('.mbar-sub');
        const isUp = els[k].c >= 0;
        sub.className = 'mbar-sub ' + (isUp ? 'up' : 'dn');
        sub.innerHTML = `${isUp ? '▲' : '▼'} ${Math.abs(els[k].c).toFixed(2)}% (24h)`;
      }
    }
  });
}

function updateCount(n) {
  const c = document.getElementById('c-count');
  if (c) c.textContent = n;
}

export function bindHomeEvents() {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
      e.target.classList.add('active');
      filterState = e.target.dataset.f;
      drawGrid();
    });
  });

  const sel = document.getElementById('sort-select');
  if (sel) {
    sel.addEventListener('change', (e) => {
      sortState = e.target.value;
      drawGrid();
    });
  }

  document.addEventListener('globalSearch', (e) => {
    globalQuery = e.detail;
    drawGrid();
  });

  document.addEventListener('marketDataUpdated', () => {
    renderDashboard();
  });
}
