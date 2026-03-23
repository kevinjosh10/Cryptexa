
let chartInstance = null;
let activeCoinId = null;

function initCoinPage() {
  const urlParams = new URLSearchParams(window.location.search);
  activeCoinId = urlParams.get('id');
  if (!activeCoinId) {
    window.location.href = 'index.html';
    return;
  }

  document.addEventListener('marketDataUpdated', renderCoinDetail);
  renderCoinDetail();
}

function renderCoinDetail() {
  const c = Store.COINS.find(x => x.id === activeCoinId);
  if (!c) return;

  const isUp = c.change >= 0;
  document.getElementById('cd-img').src = c.image || '';
  document.getElementById('cd-name').textContent = c.name;
  document.getElementById('cd-sym').textContent = c.symbol.toUpperCase();
  document.getElementById('cd-rank').textContent = c.rank !== 99 ? 'Rank #' + c.rank : '';
  const priceEl = document.getElementById('cd-price');
  priceEl.textContent = '$' + c.price.toLocaleString(undefined, { minimumFractionDigits: 2 });
  priceEl.className = 'cd-price ' + (isUp ? 'text-green' : 'text-red');

  const chgEl = document.getElementById('cd-change');
  chgEl.innerHTML = `${isUp ? '▲' : '▼'} ${Math.abs(c.change).toFixed(2)}% (24h)`;
  chgEl.className = 'cd-change ' + (isUp ? 'text-green' : 'text-red');

  document.getElementById('cd-mc').textContent = c.mcap;
  document.getElementById('cd-vol').textContent = c.vol;
  document.getElementById('cd-ath').textContent = c.ath;
  document.getElementById('cd-athd').textContent = c.athDist;
  document.getElementById('cd-sup').textContent = c.supply;
  document.getElementById('cd-layer').innerHTML = `<span class="${c.layer < 10 ? 'text-green' : 'text-orange'}">${c.layer} ms</span>`;

  // Draw gauge
  drawRing('ring-rs', c.realityScore, c.statusClass === 'green' ? '#5BB539' : c.statusClass === 'yellow' ? '#F2D03B' : '#C71824');
  document.getElementById('val-rs').textContent = c.realityScore;

  // Decision Engine
  const de = document.getElementById('de-box');
  de.className = 'glass-panel decision-engine';
  de.style.borderColor = `var(--${c.statusClass === 'green' ? 'positive' : c.statusClass === 'yellow' ? 'highlight' : 'danger'})`;
  const emoji = c.decision === 'BUY' ? '🟢' : c.decision === 'WATCH' ? '🟡' : '🔴';
  document.getElementById('de-emoji').textContent = emoji;
  const label = document.getElementById('de-label');
  label.textContent = c.decision;
  label.className = 'de-label text-' + (c.statusClass === 'green' ? 'green' : c.statusClass === 'yellow' ? 'yellow' : 'red');
  document.getElementById('de-pulse').style.background = `rgba(${c.statusClass === 'green' ? '91, 181, 57' : c.statusClass === 'yellow' ? '242, 208, 59' : '199, 24, 36'}, 0.15)`;
  document.getElementById('de-conf').textContent = `Confidence: ${c.conf}%`;

  // Draw tracks
  drawTrack('fill-hype', c.hype);
  drawTrack('fill-smart', c.smart);
  drawTrack('fill-fomo', c.fomo);

  // Story
  document.getElementById('ai-story-text').textContent = c.story;

  // Chart
  renderMainChart(c);

  document.getElementById('btn-sim').onclick = () => window.location.href = `manipulation.html?id=${c.id}`;
}

function drawRing(id, val, color) {
  const el = document.getElementById(id);
  if (!el) return;
  const c = 2 * Math.PI * 46;
  el.style.strokeDasharray = c;
  el.style.strokeDashoffset = c - (val / 100) * c;
  el.style.stroke = color;
}

function drawTrack(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.width = val + '%';
  el.style.background = val > 75 ? 'var(--danger)' : val > 40 ? 'var(--highlight)' : 'var(--positive)';
}

function renderMainChart(c) {
  const ctx = document.getElementById('main-chart');
  if (!ctx || !c.hist || !c.hist.length) return;
  
  if (chartInstance) chartInstance.destroy();

  const labels = Array(30).fill(0).map((_, i) => `${30 - i}d ago`);
  labels[29] = 'Now';

  const g1 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 360);
  g1.addColorStop(0, c.colors[0] + '40');
  g1.addColorStop(1, 'transparent');

  const opts = JSON.parse(JSON.stringify(CHART_DEFAULTS));
  opts.scales.x = { display: true, grid: gridOpts, ticks: tickOpts };
  opts.scales.y = { display: true, position: 'right', grid: gridOpts, ticks: { ...tickOpts, callback: v => '$' + v.toLocaleString() } };

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Price',
          data: c.hist,
          borderColor: c.colors[0],
          backgroundColor: g1,
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: c.colors[0]
        }
      ]
    },
    options: opts
  });
}
