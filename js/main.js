    /* ============================================================
       COINGECKO CONFIG
    ============================================================ */
    const CG_KEY = 'CG-ZieMdW15Bh6P9zGjgUegF4yJ';
    const CG_BASE = 'https://api.coingecko.com/api/v3';
    const CG_IDS = 'bitcoin,ethereum,binancecoin,solana,ripple,cardano,avalanche-2,chainlink,polkadot,matic-network,arbitrum,injective-protocol,celestia,dogecoin,shiba-inu,pepe,dogwifhat,floki';
    const CG_HEADERS = { 'x-cg-demo-api-key': CG_KEY };
    const REFRESH_INTERVAL = 60000;

    /* ============================================================
       STATIC DATA
    ============================================================ */
    const STATIC_DATA = {
      'bitcoin': { id: 'btc', symbol: 'BTC', name: 'Bitcoin', hype: 42, conf: 92, smart: 88, fomo: 32, wash: 4, spoof: 6, layer: 3, colors: ['#F7931A', '#050214'], type: 'gem', ath: '$73,750', athDist: '-13%', priceStr: 85, story: 'BUY — Bitcoin demonstrates pristine on-chain metrics with realized price well below market price. Institutional inflows via ETFs adding ~$300M/day. Smart money accumulation (88%) vastly outpaces retail FOMO (32%). Hash rate at all-time highs signals miner confidence.' },
      'ethereum': { id: 'eth', symbol: 'ETH', name: 'Ethereum', hype: 50, conf: 90, smart: 85, fomo: 38, wash: 7, spoof: 9, layer: 5, colors: ['#627EEA', '#fff'], type: 'gem', ath: '$4,878', athDist: '-29%', priceStr: 80, story: 'BUY — Ethereum post-Dencun upgrade showing strong fee compression. Staking yield steady at 3.8% APR with 32M ETH locked. Whale wallets accumulating for 6 consecutive weeks.' },
      'binancecoin': { id: 'bnb', symbol: 'BNB', name: 'BNB', hype: 48, conf: 80, smart: 74, fomo: 42, wash: 14, spoof: 11, layer: 8, colors: ['#F0B90B', '#050214'], type: 'gem', ath: '$686', athDist: '-15%', priceStr: 72, story: 'WATCH — BNB maintains solid utility as BSC ecosystem gas token with regular token burns. Regulatory uncertainty around Binance creates overhead risk.' },
      'solana': { id: 'sol', symbol: 'SOL', name: 'Solana', hype: 78, conf: 78, smart: 62, fomo: 70, wash: 18, spoof: 22, layer: 12, colors: ['#9945FF', '#fff'], type: 'viral', ath: '$259', athDist: '-44%', priceStr: 75, story: 'WATCH — Solana riding strong narrative wave. Hype (78) outpacing price strength. FOMO elevated — suggests some retail-driven speculation.' },
      'ripple': { id: 'xrp', symbol: 'XRP', name: 'XRP', hype: 62, conf: 70, smart: 58, fomo: 60, wash: 16, spoof: 18, layer: 10, colors: ['#00AAE4', '#fff'], type: 'stable', ath: '$3.40', athDist: '-85%', priceStr: 55, story: "WATCH — XRP in holding pattern post-SEC partial victory. ODL volume growing in APAC." },
      'cardano': { id: 'ada', symbol: 'ADA', name: 'Cardano', hype: 44, conf: 68, smart: 50, fomo: 38, wash: 12, spoof: 14, layer: 7, colors: ['#0D1E2D', '#3CC8C8'], type: 'stable', ath: '$3.10', athDist: '-85%', priceStr: 42, story: "WATCH — Cardano's Chang hard fork moving to full decentralized governance." },
      'avalanche-2': { id: 'avax', symbol: 'AVAX', name: 'Avalanche', hype: 70, conf: 74, smart: 55, fomo: 65, wash: 19, spoof: 16, layer: 11, colors: ['#E84142', '#fff'], type: 'viral', ath: '$144', athDist: '-76%', priceStr: 65, story: 'WATCH — Avalanche gaining traction via institutional subnet adoption and Avalanche9000 upgrade.' },
      'chainlink': { id: 'link', symbol: 'LINK', name: 'Chainlink', hype: 52, conf: 84, smart: 78, fomo: 36, wash: 9, spoof: 8, layer: 5, colors: ['#375BD2', '#fff'], type: 'gem', ath: '$52.88', athDist: '-73%', priceStr: 68, story: 'BUY — Chainlink CCIP now live on 15 chains, enabling $6B+ in cross-chain value transfer. Smart money accumulation at 78% confirms institutional positioning.' },
      'polkadot': { id: 'dot', symbol: 'DOT', name: 'Polkadot', hype: 36, conf: 62, smart: 52, fomo: 28, wash: 10, spoof: 12, layer: 6, colors: ['#E6007A', '#fff'], type: 'stable', ath: '$55.00', athDist: '-86%', priceStr: 40, story: "WATCH — Polkadot 2.0 agile coretime model is fundamental improvement but developer migration is slow." },
      'matic-network': { id: 'matic', symbol: 'POL', name: 'Polygon', hype: 55, conf: 66, smart: 55, fomo: 52, wash: 15, spoof: 19, layer: 10, colors: ['#8247E5', '#fff'], type: 'stable', ath: '$2.92', athDist: '-75%', priceStr: 48, story: "WATCH — Polygon's AggLayer is live with 6 chains connected. ETH L2 competition intensified." },
      'arbitrum': { id: 'arb', symbol: 'ARB', name: 'Arbitrum', hype: 58, conf: 68, smart: 60, fomo: 55, wash: 17, spoof: 20, layer: 9, colors: ['#28A0F0', '#050214'], type: 'stable', ath: '$2.40', athDist: '-53%', priceStr: 52, story: 'WATCH — Arbitrum is the largest ETH L2 by TVL ($17B). BOLD upgrade enabling permissionless validators.' },
      'injective-protocol': { id: 'inj', symbol: 'INJ', name: 'Injective', hype: 72, conf: 80, smart: 68, fomo: 62, wash: 16, spoof: 14, layer: 8, colors: ['#0082FA', '#fff'], type: 'gem', ath: '$52.63', athDist: '-46%', priceStr: 70, story: 'BUY — Injective emerging as the premier DeFi-native L1 with $1.4B TVL. Weekly burn creates strong deflationary pressure.' },
      'celestia': { id: 'tia', symbol: 'TIA', name: 'Celestia', hype: 82, conf: 72, smart: 52, fomo: 78, wash: 22, spoof: 28, layer: 14, colors: ['#7B2FBE', '#fff'], type: 'viral', ath: '$20.40', athDist: '-56%', priceStr: 62, story: "WATCH — Celestia modular data availability narrative innovative but hype (82) materially outrunning price strength (62)." },
      'dogecoin': { id: 'doge', symbol: 'DOGE', name: 'Dogecoin', hype: 94, conf: 55, smart: 12, fomo: 97, wash: 52, spoof: 41, layer: 28, colors: ['#C2A633', '#050214'], type: 'pump', ath: '$0.7376', athDist: '-81%', priceStr: 32, story: "AVOID — Dogecoin Reality Score suppressed by extreme hype-to-fundamentals divergence. Smart money (12%) near record lows — whales distributing. Wash trading at 52%." },
      'shiba-inu': { id: 'shib', symbol: 'SHIB', name: 'Shiba Inu', hype: 92, conf: 42, smart: 8, fomo: 96, wash: 64, spoof: 52, layer: 38, colors: ['#FF0000', '#FFB81C'], type: 'pump', ath: '$0.00008845', athDist: '-72%', priceStr: 24, story: 'AVOID — SHIB exhibits the most severe manipulation fingerprint in our dataset. Wash trading 64%, FOMO 96%. Smart money at critically low levels (8%).' },
      'pepe': { id: 'pepe', symbol: 'PEPE', name: 'Pepe', hype: 96, conf: 48, smart: 5, fomo: 98, wash: 68, spoof: 55, layer: 44, colors: ['#00B140', '#fff'], type: 'pump', ath: '$0.00001716', athDist: '-58%', priceStr: 20, story: 'AVOID — PEPE exhibits active pump phase mechanics. Wash trading 68%, spoofing 55%, smart money at 5% vs 98% FOMO. Exit liquidity territory.' },
      'dogwifhat': { id: 'wif', symbol: 'WIF', name: 'Dogwifhat', hype: 88, conf: 62, smart: 22, fomo: 88, wash: 44, spoof: 36, layer: 24, colors: ['#FF6B35', '#fff'], type: 'viral', ath: '$4.83', athDist: '-49%', priceStr: 58, story: 'WATCH — WIF genuine CEX adoption but hype (88) significantly outpaces price strength (58). Smart money (22%) is low.' },
      'floki': { id: 'floki', symbol: 'FLOKI', name: 'Floki', hype: 98, conf: 38, smart: 4, fomo: 99, wash: 72, spoof: 61, layer: 48, colors: ['#E94400', '#FFC940'], type: 'pump', ath: '$0.0003403', athDist: '-43%', priceStr: 18, story: 'AVOID — CRITICAL: Floki maximum manipulation signals across all vectors. Hype 98/100, smart money near zero (4%). Wash trading 72%. Dump imminent.' },
    };

    let COINS = [];
    let lastRefresh = null;
    let globalData = null;
    let fngData = null;
    let isRefreshing = false;
    let activeFilter = 'all';
    let activeSort = 'rank';
    let searchQuery = '';

    function rnd(a, b) { return Math.random() * (b - a) + a }
    function fmtLarge(n) { if (!n || isNaN(n)) return '—'; if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + 'T'; if (n >= 1e9) return '$' + (n / 1e9).toFixed(1) + 'B'; if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M'; return '$' + n.toLocaleString(); }
    function fmtSupply(n, sym) { if (!n || isNaN(n)) return '—'; if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T ' + sym; if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B ' + sym; if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M ' + sym; return n.toLocaleString() + ' ' + sym; }
    function fmtPrice(p) { if (!p || isNaN(p)) return '$0.00'; if (p >= 1000) return '$' + p.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); if (p >= 1) return '$' + p.toFixed(4); if (p >= 0.001) return '$' + p.toFixed(6); return '$' + p.toFixed(8); }
    function fmtAth(n) { if (!n || isNaN(n)) return '—'; return fmtPrice(n); }
    function sampleSparkline(arr, n = 30) { if (!arr || !arr.length) return []; const step = Math.max(1, Math.floor(arr.length / n)); const out = []; for (let i = 0; i < arr.length && out.length < n; i += step)out.push(arr[i]); return out; }
    function fakeHist(price) { const out = []; let v = price * 0.85; for (let i = 0; i < 30; i++) { v *= (1 + rnd(-0.04, 0.05)); out.push(v); } return out; }
    function computeFields(c) { const raw = 50 + (c.priceStr - c.hype) / 2; c.realityScore = Math.max(0, Math.min(100, Math.round(raw))); c.decision = c.realityScore > 55 && c.conf > 72 ? 'BUY' : c.realityScore >= 32 ? 'WATCH' : 'AVOID'; c.statusClass = c.decision === 'BUY' ? 'green' : c.decision === 'WATCH' ? 'yellow' : 'red'; return c; }

    const CHART_DEFAULTS = {
      plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(5,2,20,0.95)', borderColor: 'rgba(10,54,217,0.3)', borderWidth: 1, titleColor: 'rgba(255,255,255,0.55)', bodyColor: '#E8EEFF', titleFont: { family: 'Space Grotesk', size: 10 }, bodyFont: { family: 'Space Grotesk', size: 11 }, padding: 10 } },
      scales: { x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(160,174,192,0.8)', font: { family: 'Space Grotesk', size: 10 }, maxTicksLimit: 8 } }, y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(160,174,192,0.8)', font: { family: 'Space Grotesk', size: 10 }, maxTicksLimit: 5 } } },
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 700, easing: 'easeInOutQuart' },
      interaction: { mode: 'index', intersect: false },
    };

    async function fetchCGData() {
      if (isRefreshing) return;
      isRefreshing = true;
      setRefreshState('loading');
      try {
        const [mktRes, glbRes, fngRes] = await Promise.allSettled([
          fetch(`${CG_BASE}/coins/markets?vs_currency=usd&ids=${CG_IDS}&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d`, { headers: CG_HEADERS }),
          fetch(`${CG_BASE}/global`, { headers: CG_HEADERS }),
          fetch('https://api.alternative.me/fng/?limit=1&format=json')
        ]);
        let marketOk = false;
        if (mktRes.status === 'fulfilled' && mktRes.value.ok) { const markets = await mktRes.value.json(); mergeMarkets(markets); lastRefresh = new Date(); marketOk = true; }
        if (glbRes.status === 'fulfilled' && glbRes.value.ok) { const g = await glbRes.value.json(); globalData = g.data; }
        if (fngRes.status === 'fulfilled' && fngRes.value.ok) { const f = await fngRes.value.json(); fngData = f.data && f.data[0] ? f.data[0] : null; }
        if (marketOk) { setRefreshState('ok'); document.getElementById('error-banner').style.display = 'none'; }
        else throw new Error('Market data unavailable');
      } catch (e) { console.warn('CoinGecko:', e); if (!COINS.length) buildStaticCoins(); setRefreshState('error'); document.getElementById('error-banner').style.display = 'flex'; }
      finally { isRefreshing = false; }
    }

    function mergeMarkets(markets) {
      const mapped = [];
      markets.forEach(m => {
        const s = STATIC_DATA[m.id]; if (!s) return;
        const sparkline = m.sparkline_in_7d && m.sparkline_in_7d.price ? m.sparkline_in_7d.price : [];
        const hist = sparkline.length ? sampleSparkline(sparkline) : fakeHist(m.current_price);
        const athDist = m.ath && m.current_price ? ((m.current_price - m.ath) / m.ath * 100).toFixed(0) + '%' : '—';
        const coin = { ...s, price: m.current_price || 0, change: parseFloat((m.price_change_percentage_24h || 0).toFixed(2)), change7d: parseFloat((m.price_change_percentage_7d_in_currency || 0).toFixed(2)), mcap: fmtLarge(m.market_cap), mcapRaw: m.market_cap || 0, vol: fmtLarge(m.total_volume), supply: fmtSupply(m.circulating_supply, s.symbol), rank: m.market_cap_rank || 99, ath: fmtAth(m.ath), athDist, image: m.image || '', hist };
        mapped.push(computeFields(coin));
      });
      if (mapped.length > 0) { COINS.length = 0; mapped.forEach(c => COINS.push(c)); }
    }

    function buildStaticCoins() {
      COINS.length = 0;
      Object.values(STATIC_DATA).forEach((s, i) => {
        const c = { ...s, price: 0, change: 0, change7d: 0, mcap: '—', mcapRaw: 0, vol: '—', supply: '—', rank: i + 1, image: '', hist: fakeHist(100) };
        COINS.push(computeFields(c));
      });
    }

    function setRefreshState(state) {
      const dot = document.getElementById('refresh-dot');
      const label = document.getElementById('refresh-label');
      const btn = document.getElementById('refresh-btn');
      const liveLabel = document.getElementById('live-label');
      if (!dot) return;
      if (state === 'loading') { dot.style.background = 'var(--alert)'; dot.style.boxShadow = '0 0 6px var(--alert)'; label.textContent = 'Fetching live data from CoinGecko…'; if (btn) btn.disabled = true; if (liveLabel) liveLabel.textContent = 'SYNCING'; }
      else if (state === 'ok') { dot.style.background = 'var(--positive)'; dot.style.boxShadow = '0 0 6px var(--positive)'; const t = lastRefresh ? lastRefresh.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : ''; label.textContent = `Live data · CoinGecko · Updated ${t}`; if (btn) btn.disabled = false; if (liveLabel) liveLabel.textContent = 'LIVE'; }
      else { dot.style.background = 'var(--danger)'; dot.style.boxShadow = '0 0 6px var(--danger)'; label.textContent = 'Live feed error — showing cached data · Click Retry'; if (btn) btn.disabled = false; if (liveLabel) liveLabel.textContent = 'OFFLINE'; }
    }

    /* ============================================================
       MAIN APP
    ============================================================ */
    const CX = {
      charts: {},
      currentCoin: null,
      replayTimer: null,
      replayStep: 0,
      selectedEra: '2021-bull',
      fetchPromise: null,

      init() {
        CX.fetchPromise = fetchCGData();
        setTimeout(() => CX.enterApp(), 5200);
      },

      async enterApp() {
        const intro = document.getElementById('intro-page');
        if (intro.style.opacity === '0') return;
        intro.style.opacity = '0';
        const loader = document.getElementById('data-loader');
        loader.style.display = 'flex';
        try { await CX.fetchPromise; } catch (e) { }
        if (!COINS.length) buildStaticCoins();
        loader.style.display = 'none';
        setTimeout(() => {
          intro.style.display = 'none';
          document.getElementById('navbar').style.display = 'flex';
          document.getElementById('app-container').style.display = 'block';
          document.getElementById('status-bar').style.display = 'flex';
          CX.renderDashboard();
          CX.initInsightsCharts();
          CX.updateSim();
          CX.buildGravity('gravMap');
          CX.updateMarketBar();
          CX.populateToolSelects();
          CX.startLive();
        }, 200);
      },

      async manualRefresh() {
        await fetchCGData();
        CX.updateMarketBar();
        CX.renderDashboard();
        CX.populateToolSelects();
        if (CX.currentCoin) { const updated = COINS.find(c => c.id === CX.currentCoin.id); if (updated) CX.openCoin(updated.id); }
        CX.toast('✦', 'LIVE', 'Data refreshed from CoinGecko.', 'positive');
      },

      navigate(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const view = document.getElementById(viewId);
        if (view) view.classList.add('active');
        const link = document.querySelector(`[data-view="${viewId}"]`);
        if (link) link.classList.add('active');
        if (viewId === 'manipulation-lab') CX.buildReplayChart([], []);
        if (viewId === 'dashboard') CX.renderDashboard();
        if (viewId === 'insights-lab') CX.refreshInsights();
        if (viewId === 'tools') { CX.populateToolSelects(); CX.calcRSI(); CX.calcRR(); }
      },

      updateMarketBar() {
        const avgManip = Math.round(COINS.reduce((s, c) => (s + c.wash + c.spoof) / 2, 0) / Math.max(COINS.length, 1));
        const gems = COINS.filter(c => c.decision === 'BUY').length;
        const avoids = COINS.filter(c => c.decision === 'AVOID').length;
        const mb = document.getElementById('mb-manip'); if (mb) mb.textContent = avgManip + '%';
        const mbg = document.getElementById('mb-gems'); if (mbg) mbg.textContent = gems + ' Active ↑';
        const mba = document.getElementById('mb-avoid'); if (mba) mba.textContent = avoids + ' Coins ↓';
        const fgEl = document.getElementById('mb-fg'); const fgClass = document.getElementById('mb-fg-class');
        if (fngData) { const v = parseInt(fngData.value || 0); const cls = fngData.value_classification || ''; if (fgEl) { fgEl.textContent = v + ' — ' + cls; fgEl.style.color = v > 60 ? 'var(--danger)' : v > 40 ? 'var(--alert)' : 'var(--positive)'; } if (fgClass) fgClass.textContent = 'Alternative.me · Live'; }
        else { if (fgEl) { fgEl.textContent = '74 — Greed'; fgEl.style.color = 'var(--danger)'; } }
        const mcapEl = document.getElementById('mb-mcap'); const mcapChange = document.getElementById('mb-mcap-change');
        if (globalData && globalData.total_market_cap && globalData.total_market_cap.usd) { const mc = globalData.total_market_cap.usd; if (mcapEl) mcapEl.textContent = fmtLarge(mc); const chg = globalData.market_cap_change_percentage_24h_usd; if (mcapChange && chg != null) { mcapChange.textContent = (chg >= 0 ? '▲' : '▼') + Math.abs(chg).toFixed(1) + '% 24H'; mcapChange.style.color = chg >= 0 ? 'var(--positive)' : 'var(--danger)'; } }
      },

      setFilter(el, f) { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); el.classList.add('active'); activeFilter = f; CX.renderDashboard(); },
      setSort(s) { activeSort = s; CX.renderDashboard(); },
      handleSearch(q) { searchQuery = q; CX.renderDashboard(); },

      getFilteredSorted() {
        let list = [...COINS];
        if (searchQuery) { const q = searchQuery.toLowerCase(); list = list.filter(c => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q)); }
        if (activeFilter !== 'all') { if (['BUY', 'WATCH', 'AVOID'].includes(activeFilter)) { list = list.filter(c => c.decision === activeFilter); } else { list = list.filter(c => c.type === activeFilter); } }
        list.sort((a, b) => { if (activeSort === 'rank') return a.rank - b.rank; if (activeSort === 'realityScore') return b.realityScore - a.realityScore; if (activeSort === 'hype') return b.hype - a.hype; if (activeSort === 'change') return b.change - a.change; if (activeSort === 'mcapRaw') return b.mcapRaw - a.mcapRaw; return 0; });
        return list;
      },

      renderDashboard() {
        if (!COINS.length) { CX.renderSkeletons(); return; }
        const coins = CX.getFilteredSorted();
        document.getElementById('coin-count-num').textContent = coins.length;
        const grid = document.getElementById('coin-grid');
        grid.innerHTML = '';
        coins.forEach(c => {
          const up = c.change >= 0;
          const decLabel = c.decision === 'BUY' ? '🟢 BUY' : c.decision === 'WATCH' ? '🟡 WATCH' : '🔴 AVOID';
          const dots = Array.from({ length: 10 }, (_, i) => { const pct = c.hype / 100; const cls = i / 10 < pct ? (c.hype > 70 ? 'on' : c.hype > 45 ? 'mid' : 'low') : ''; return `<div class="hype-dot ${cls}"></div>`; }).join('');
          const typeTag = c.type === 'pump' ? '<span class="tag tag-pump">PUMP RISK</span>' : c.type === 'gem' ? '<span class="tag tag-gem">GEM</span>' : c.type === 'viral' ? '<span class="tag tag-viral">VIRAL</span>' : '<span class="tag tag-stable">STABLE</span>';
          const avatarContent = c.image ? `<img src="${c.image}" alt="${c.symbol}" style="width:26px;height:26px;object-fit:contain;" onerror="this.style.display='none';this.nextSibling.style.display='block'"><span style="display:none;color:${c.colors[1]}">${c.symbol.slice(0, 2)}</span>` : `<span style="color:${c.colors[1]}">${c.symbol.slice(0, 2)}</span>`;
          const card = document.createElement('div'); card.className = 'coin-card'; card.onclick = () => CX.openCoin(c.id);
          card.innerHTML = `<div class="coin-card-header"><div class="flex gap-12"><div class="coin-avatar" style="background:${c.colors[0]}">${avatarContent}</div><div><div class="coin-name"><span class="coin-rank">#${c.rank}</span>${c.name}</div><div class="coin-symbol">${c.symbol}</div></div></div><span class="badge ${c.statusClass}">${decLabel}</span></div><div class="coin-price">${fmtPrice(c.price)}</div><div class="coin-meta"><span class="${up ? 'up' : 'dn'}" style="font-weight:600">${up ? '▲' : '▼'} ${Math.abs(c.change).toFixed(2)}%</span>${typeTag}</div><div class="rs-row"><div class="text-xs text-muted" style="width:90px">Reality Score</div><div class="rs-track"><div class="rs-fill" style="width:${c.realityScore}%;background:${c.statusClass === 'green' ? 'var(--positive)' : c.statusClass === 'red' ? 'var(--danger)' : 'var(--highlight)'}"></div></div><div class="rs-label">${c.realityScore}/100</div></div><div class="hype-indicator"><span>Hype ${c.hype}/100</span><div class="hype-dots">${dots}</div></div><div class="coin-footer-stats"><div class="cfs-item"><div class="cfs-label">Mkt Cap</div><div class="cfs-value">${c.mcap}</div></div><div class="cfs-item"><div class="cfs-label">Volume</div><div class="cfs-value">${c.vol}</div></div><div class="cfs-item"><div class="cfs-label">7D</div><div class="cfs-value ${c.change7d >= 0 ? 'up' : 'dn'}">${c.change7d >= 0 ? '▲' : '▼'}${Math.abs(c.change7d).toFixed(1)}%</div></div></div><div class="mini-chart-box"><canvas id="mc-${c.id}"></canvas></div>`;
          grid.appendChild(card);
          setTimeout(() => CX.buildMini(c), 30);
        });
      },

      renderSkeletons() {
        const grid = document.getElementById('coin-grid');
        grid.innerHTML = Array.from({ length: 9 }, () => `<div class="skeleton-card"><div class="skeleton" style="height:18px;width:60%;margin-bottom:12px"></div><div class="skeleton" style="height:28px;width:80%;margin-bottom:8px"></div><div class="skeleton" style="height:12px;width:100%;margin-bottom:6px"></div><div class="skeleton" style="height:12px;width:100%;margin-bottom:6px"></div><div class="skeleton" style="height:60px;margin-top:16px"></div></div>`).join('');
      },

      buildMini(c) {
        const el = document.getElementById(`mc-${c.id}`); if (!el) return;
        if (CX.charts[`m-${c.id}`]) CX.charts[`m-${c.id}`].destroy();
        const col = c.statusClass === 'green' ? '#5BB539' : c.statusClass === 'red' ? '#C71824' : '#F2D03B';
        CX.charts[`m-${c.id}`] = new Chart(el.getContext('2d'), { type: 'line', data: { labels: c.hist.map((_, i) => i), datasets: [{ data: c.hist, borderColor: col, borderWidth: 2, tension: 0.4, pointRadius: 0, fill: true, backgroundColor: col + '18' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } }, animation: { duration: 600 } } });
      },

      openCoin(id) {
        const c = COINS.find(x => x.id === id); if (!c) return;
        CX.currentCoin = c; const up = c.change >= 0;
        const cdLink = document.getElementById('nav-coin-detail'); cdLink.style.display = 'inline-flex'; cdLink.textContent = `◈ ${c.symbol}`;
        CX.navigate('coin-detail');
        const av = document.getElementById('d-avatar'); av.style.background = c.colors[0];
        if (c.image) { av.innerHTML = `<img src="${c.image}" alt="${c.symbol}" style="width:32px;height:32px;object-fit:contain;" onerror="this.style.display='none'">`; }
        else { av.innerHTML = `<span style="color:${c.colors[1]}">${c.symbol.slice(0, 2)}</span>`; }
        document.getElementById('d-name').textContent = c.name;
        document.getElementById('d-symbol-tag').innerHTML = `<span class="text-muted mono">${c.symbol} · #${c.rank}</span><span class="tag ${c.type === 'pump' ? 'tag-pump' : c.type === 'gem' ? 'tag-gem' : c.type === 'viral' ? 'tag-viral' : 'tag-stable'}">${c.type.toUpperCase()}</span>`;
        document.getElementById('d-price').textContent = fmtPrice(c.price);
        document.getElementById('d-hype').textContent = `${c.hype}/100`;
        document.getElementById('d-conf').textContent = `${c.conf}%`;
        document.getElementById('d-change').innerHTML = `<span class="${up ? 'up' : 'dn'}">${up ? '▲' : '▼'} ${Math.abs(c.change).toFixed(2)}%</span>`;
        document.getElementById('d-mcap').textContent = c.mcap;
        document.getElementById('d-vol').textContent = c.vol;
        document.getElementById('d-supply').textContent = c.supply;
        document.getElementById('d-ath').textContent = c.ath;
        document.getElementById('d-ath-dist').innerHTML = `<span class="dn">${c.athDist}</span>`;
        const chg7 = c.change7d >= 0;
        document.getElementById('d-7d').innerHTML = `<span class="${chg7 ? 'up' : 'dn'}">${chg7 ? '▲' : '▼'} ${Math.abs(c.change7d).toFixed(2)}%</span>`;
        const r = 64, circ = 2 * Math.PI * r, offset = circ - (c.realityScore / 100 * circ);
        const arc = document.getElementById('ring-arc');
        const col = c.statusClass === 'green' ? '#5BB539' : c.statusClass === 'red' ? '#C71824' : '#F2D03B';
        arc.style.stroke = col; arc.style.strokeDashoffset = circ; arc.style.filter = `drop-shadow(0 0 9px ${col})`;
        document.getElementById('d-reality-val').textContent = c.realityScore; document.getElementById('d-reality-val').style.color = col;
        setTimeout(() => { arc.style.strokeDashoffset = offset; }, 100);
        const de = document.getElementById('d-decision-engine'); const pulse = de.querySelector('.de-pulse'); const emoji = de.querySelector('.de-emoji');
        if (c.statusClass === 'green') { de.style.background = 'rgba(91,181,57,0.08)'; de.style.border = '1px solid rgba(91,181,57,0.25)'; pulse.style.background = 'radial-gradient(ellipse at center,rgba(91,181,57,0.1),transparent 70%)'; }
        else if (c.statusClass === 'red') { de.style.background = 'rgba(199,24,36,0.08)'; de.style.border = '1px solid rgba(199,24,36,0.25)'; pulse.style.background = 'radial-gradient(ellipse at center,rgba(199,24,36,0.1),transparent 70%)'; }
        else { de.style.background = 'rgba(242,208,59,0.07)'; de.style.border = '1px solid rgba(242,208,59,0.25)'; pulse.style.background = 'radial-gradient(ellipse at center,rgba(242,208,59,0.08),transparent 70%)'; }
        emoji.textContent = c.decision === 'BUY' ? '🟢' : c.decision === 'WATCH' ? '🟡' : '🔴';
        document.getElementById('d-de-label').textContent = c.decision; document.getElementById('d-de-label').style.color = col;
        document.getElementById('d-de-conf').textContent = `Confidence: ${c.conf}%`;
        document.getElementById('d-decision-badge').className = `badge ${c.statusClass}`; document.getElementById('d-decision-badge').textContent = c.decision;
        document.getElementById('d-smart-val').textContent = c.smart + '%'; document.getElementById('d-smart-bar').style.width = c.smart + '%';
        document.getElementById('d-fomo-val').textContent = c.fomo + '%'; document.getElementById('d-fomo-bar').style.width = c.fomo + '%';
        CX.buildFP('d-fp-grid', c.wash, 14, 5);
        document.getElementById('d-wash').textContent = c.wash + '%'; document.getElementById('d-spoof').textContent = c.spoof + '%'; document.getElementById('d-layer').textContent = c.layer + '%';
        CX.buildDNA('d-vdna', c);
        const vtag = document.getElementById('d-virality-tag');
        if (c.hype > 80) { vtag.textContent = 'EXPLOSIVE'; vtag.className = 'tag tag-pump'; } else if (c.hype > 60) { vtag.textContent = 'HIGH'; vtag.className = 'tag tag-viral'; } else if (c.hype > 40) { vtag.textContent = 'MODERATE'; vtag.className = 'tag tag-stable'; } else { vtag.textContent = 'LOW'; vtag.className = 'tag tag-gem'; }
        document.getElementById('d-story').textContent = c.story || 'Analysis loading…';
        setTimeout(() => {
          const ctx = document.getElementById('detailChart').getContext('2d');
          if (CX.charts.detail) CX.charts.detail.destroy();
          const L = c.hist.map((_, i) => `D${i + 1}`);
          const minP = Math.min(...c.hist), maxP = Math.max(...c.hist);
          const priceN = c.hist.map(p => maxP > minP ? ((p - minP) / (maxP - minP) * 80 + 10) : 50);
          const hyp = Array.from({ length: c.hist.length }, () => Math.floor(rnd(c.hype - 10, c.hype + 10)));
          CX.charts.detail = new Chart(ctx, { type: 'line', data: { labels: L, datasets: [{ label: 'Price Strength', data: priceN, borderColor: '#5BB539', backgroundColor: 'rgba(91,181,57,0.07)', borderWidth: 2.5, tension: 0.4, fill: true, yAxisID: 'y' }, { label: 'Hype Intensity', data: hyp, borderColor: '#C71824', borderDash: [5, 5], borderWidth: 2, tension: 0.4, yAxisID: 'y1' }] }, options: { ...CHART_DEFAULTS, scales: { x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(160,174,192,0.7)', font: { size: 9 } } }, y: { type: 'linear', display: true, position: 'left', grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#5BB539', font: { size: 9 } } }, y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false }, ticks: { color: '#C71824', font: { size: 9 } } } }, plugins: { legend: { display: true, labels: { color: 'rgba(255,255,255,0.7)', font: { family: 'Space Grotesk', size: 11 }, usePointStyle: true } }, tooltip: { ...CHART_DEFAULTS.plugins.tooltip } } } });
        }, 80);
      },

      buildFP(id, washPct, cols, rows) { const el = document.getElementById(id); if (!el) return; el.style.gridTemplateColumns = `repeat(${cols},1fr)`; const cells = cols * rows; el.innerHTML = Array.from({ length: cells }, () => { const q = Math.random(); const isM = q > (1 - washPct / 100 * 0.65); const c = isM ? `rgba(199,24,36,${0.25 + q * 0.68})` : `rgba(10,54,217,${0.08 + q * 0.3})`; return `<div class="fp-cell" style="background:${c};aspect-ratio:1;border-radius:2px"></div>`; }).join(''); },
      buildDNA(id, c) { const el = document.getElementById(id); if (!el) return; const n = 24; const pcts = (c.type === 'pump') ? [5, 5, 6, 7, 10, 14, 22, 32, 48, 64, 78, 92, 95, 92, 84, 70, 55, 38, 24, 14, 8, 6, 5, 5] : (c.type === 'viral') ? Array.from({ length: n }, (_, i) => Math.round(5 + Math.pow(i / n, 0.4) * 90)) : Array.from({ length: n }, () => Math.round(rnd(8, c.hype + 10))); el.innerHTML = pcts.map(h => { const col = h > 70 ? '#C71824' : h > 40 ? '#F2851D' : '#0A36D9'; return `<div class="vdna-bar" style="height:${Math.max(5, h)}%;background:${col};opacity:${0.4 + h / 100 * 0.55};flex:1;border-radius:2px 2px 0 0;min-height:4px"></div>`; }).join(''); },

      updateSim() {
        const hype = +document.getElementById('sl-hype').value, vol = +parseFloat(document.getElementById('sl-vol').value).toFixed(1), priceStr = +document.getElementById('sl-price').value, whale = +document.getElementById('sl-whale').value;
        document.getElementById('sv-hype').textContent = hype.toLocaleString(); document.getElementById('sv-vol').textContent = `$${vol}B`; document.getElementById('sv-price').textContent = `${priceStr} / 100`; document.getElementById('sv-whale').textContent = `${whale} / 100`;
        const hypeNorm = (hype / 50000) * 100; let score = 50 + (priceStr - hypeNorm) / 2 + (whale * 0.12); if (vol < 1.0 && hypeNorm > 70) score -= 22; score = Math.max(0, Math.min(100, Math.round(score)));
        const el = document.getElementById('sim-score'), badge = document.getElementById('sim-badge'), desc = document.getElementById('sim-desc');
        el.textContent = score;
        if (score > 60) { el.style.color = 'var(--positive)'; badge.className = 'badge green'; badge.innerHTML = '🟢 BUY SIGNAL'; desc.textContent = 'Strong price action with controlled hype. Smart money patterns detected.'; }
        else if (score >= 35) { el.style.color = 'var(--highlight)'; badge.className = 'badge yellow'; badge.innerHTML = '🟡 WATCH — UNSTABLE'; desc.textContent = 'Mixed signals. Hype and fundamentals in tension. Monitor closely.'; }
        else { el.style.color = 'var(--danger)'; badge.className = 'badge red'; badge.innerHTML = '🔴 AVOID — MANIPULATION DETECTED'; desc.textContent = 'Extreme hype divergence from price strength. Exit liquidity risk is high.'; }
      },

      buildReplayChart(hData, pData) {
        const ctx = document.getElementById('replayChart'); if (!ctx) return;
        if (CX.charts.replay) CX.charts.replay.destroy();
        CX.charts.replay = new Chart(ctx.getContext('2d'), { type: 'line', data: { labels: ['T-9', 'T-8', 'T-7', 'T-6', 'T-5', 'T-4', 'T-3', 'T-2', 'T-1', 'T0'], datasets: [{ label: 'Hype', data: hData, borderColor: '#C71824', backgroundColor: 'rgba(199,24,36,0.07)', borderWidth: 2.5, tension: 0.4, fill: true }, { label: 'Price', data: pData, borderColor: '#5BB539', backgroundColor: 'rgba(91,181,57,0.07)', borderWidth: 2.5, tension: 0.4, fill: true }] }, options: { ...CHART_DEFAULTS, plugins: { legend: { display: true, labels: { color: 'rgba(255,255,255,0.7)', usePointStyle: true, font: { family: 'Space Grotesk', size: 11 } } }, tooltip: { ...CHART_DEFAULTS.plugins.tooltip } }, scales: { x: { ...CHART_DEFAULTS.scales.x }, y: { ...CHART_DEFAULTS.scales.y, min: 0, max: 100 } }, animation: { duration: 0 } } });
      },

      resetReplay() { if (CX.replayTimer) { clearInterval(CX.replayTimer); CX.replayTimer = null; } CX.replayStep = 0; document.querySelectorAll('.replay-step').forEach(el => { el.classList.remove('active', 'done'); }); document.getElementById('replay-phase').textContent = ''; CX.buildReplayChart([], []); },

      playReplay() {
        CX.resetReplay();
        const hFull = [5, 8, 12, 80, 95, 100, 88, 42, 18, 8], pFull = [8, 9, 12, 16, 38, 82, 88, 18, 5, 2];
        const phases = ['Phase 1: Stealth accumulation begins — wallets quietly buying.', 'Phase 1: Bot network activated — social media seeding starts.', 'Phase 2: Price ignition — organic FOMO begins to build.', 'Phase 3: Retail mania — hype goes parabolic.', 'Phase 3: FOMO peak — 98% crowd index, maximum greed.', 'Phase 3: Price peaks — Reality Score collapses to 8.', 'Phase 4: Smart money exits — $18M sold into retail demand.', 'Phase 4: Price crashes — AVOID signal confirmed 3 days ago.', 'Phase 4: Aftermath — retail trapped. Hype collapses.', 'Phase 4: Collapse complete. Reality Score: 5. Full AVOID.'];
        const phaseEl = document.getElementById('replay-phase'); let hData = [], pData = [], step = 0;
        const steps = document.querySelectorAll('.replay-step'); const stepMap = [0, 1, 2, 3, 3, 3, 4, 5, 5, 5];
        CX.replayTimer = setInterval(() => { if (step >= hFull.length) { clearInterval(CX.replayTimer); return; } hData.push(hFull[step]); pData.push(pFull[step]); CX.charts.replay.data.datasets[0].data = hData; CX.charts.replay.data.datasets[1].data = pData; CX.charts.replay.update('none'); phaseEl.textContent = phases[step]; const si = stepMap[step]; steps.forEach((el, i) => { if (i < si) el.classList.add('done'); else if (i === si) el.classList.add('active'); else { el.classList.remove('active', 'done'); } }); step++; }, 900);
      },

      buildGravity(id) {
        const el = document.getElementById(id); if (!el) return;
        const nodes = COINS.length ? COINS.map(c => ({ n: c.symbol, sz: Math.max(28, Math.min(90, Math.round(c.mcapRaw / 1e10))), c: c.colors[0] })) : [{ n: 'BTC', sz: 88, c: '#F7931A' }, { n: 'ETH', sz: 70, c: '#627EEA' }, { n: 'BNB', sz: 54, c: '#F0B90B' }, { n: 'SOL', sz: 50, c: '#9945FF' }, { n: 'PEPE', sz: 48, c: '#00B140' }, { n: 'SHIB', sz: 44, c: '#FF0000' }, { n: 'FLOKI', sz: 38, c: '#E94400' }, { n: 'WIF', sz: 36, c: '#FF6B35' }, { n: 'DOGE', sz: 42, c: '#C2A633' }, { n: 'INJ', sz: 34, c: '#0082FA' }, { n: 'TIA', sz: 32, c: '#7B2FBE' }, { n: 'LINK', sz: 34, c: '#375BD2' }];
        nodes.sort((a, b) => b.sz - a.sz);
        const positions = [[18, 16], [60, 14], [84, 28], [42, 34], [76, 56], [14, 60], [32, 72], [58, 76], [74, 84], [8, 82], [88, 68], [50, 56], [28, 44], [48, 20], [65, 42], [20, 38], [85, 50], [40, 65]];
        el.innerHTML = nodes.slice(0, 16).map((n, i) => { const pos = positions[i] || [Math.round(rnd(10, 85)), Math.round(rnd(10, 85))]; const jx = rnd(-3, 3), jy = rnd(-3, 3); return `<div class="g-bubble" title="${n.n}" style="width:${n.sz}px;height:${n.sz}px;background:radial-gradient(circle at 35% 35%,${n.c}44,${n.c}18);border:1.5px solid ${n.c}55;left:${pos[0] + jx}%;top:${pos[1] + jy}%;transform:translate(-50%,-50%);box-shadow:0 0 ${Math.round(n.sz / 3)}px ${n.c}44;font-size:${Math.max(9, n.sz / 5.5)}px;color:${n.c};font-weight:700;animation-delay:${i * 0.55}s;">${n.n}</div>`; }).join('');
      },

      refreshInsights() {
        if (!COINS.length) return;
        const avgFomo = Math.round(COINS.reduce((s, c) => s + c.fomo, 0) / COINS.length);
        const greed = fngData ? parseInt(fngData.value) : 74;
        const panic = Math.round((100 - greed) * 0.6); const despair = Math.round((100 - avgFomo) * 0.4); const euphoria = Math.min(100, Math.round(avgFomo * 1.05));
        const setBar = (f, n, v) => { const fe = document.getElementById(f), ne = document.getElementById(n); if (fe) fe.style.width = v + '%'; if (ne) ne.textContent = v; };
        setBar('mf-fomo', 'mn-fomo', avgFomo); setBar('mf-panic', 'mn-panic', panic); setBar('mf-euph', 'mn-euph', euphoria); setBar('mf-desp', 'mn-desp', despair); setBar('mf-greed', 'mn-greed', greed);
        const ml = document.getElementById('madness-label'), ms = document.getElementById('madness-sub');
        if (ml && ms) { if (greed > 75) { ml.textContent = 'EXTREME'; ml.className = 'madness-label text-red'; ms.textContent = 'Extreme Greed Detected'; } else if (greed > 55) { ml.textContent = 'GREEDY'; ml.className = 'madness-label text-orange'; ms.textContent = 'Greed Dominant'; } else if (greed > 45) { ml.textContent = 'NEUTRAL'; ml.className = 'madness-label text-yellow'; ms.textContent = 'Balanced Market'; } else if (greed > 25) { ml.textContent = 'FEARFUL'; ml.className = 'madness-label text-blue'; ms.textContent = 'Fear Dominant'; } else { ml.textContent = 'PANIC'; ml.className = 'madness-label text-red'; ms.textContent = 'Extreme Fear Detected'; } }
        if (CX.charts.madness) CX.charts.madness.destroy();
        const ctx = document.getElementById('madnessChart'); if (!ctx) return;
        const fearPct = Math.max(5, 100 - greed - COINS.filter(c => c.type === 'pump').length * 3);
        CX.charts.madness = new Chart(ctx.getContext('2d'), { type: 'doughnut', data: { labels: ['Greed / FOMO', 'Calm', 'Fear', 'Uncertainty'], datasets: [{ data: [greed, Math.max(5, 100 - greed - fearPct - 10), fearPct, 10], backgroundColor: ['#C71824', '#5BB539', '#0A36D9', '#F2851D'], borderWidth: 0, cutout: '78%' }] }, options: { responsive: false, plugins: { legend: { display: true, position: 'bottom', labels: { color: 'rgba(255,255,255,0.65)', font: { size: 11, family: 'Space Grotesk' }, usePointStyle: true, pointStyleWidth: 10 } } } } });
      },

      initInsightsCharts() {
        setTimeout(() => {
          CX.refreshInsights();
          const ctx2 = document.getElementById('viralityChart'); if (CX.charts.virality) CX.charts.virality.destroy();
          const bd = Array.from({ length: 28 }, () => ({ x: rnd(5, 95), y: rnd(5, 95), r: rnd(4, 22) }));
          CX.charts.virality = new Chart(ctx2.getContext('2d'), { type: 'bubble', data: { datasets: [{ label: 'Hype Nodes', data: bd.slice(0, 15), backgroundColor: 'rgba(242,208,59,0.55)', borderColor: '#F2D03B', borderWidth: 1 }, { label: 'Organic Nodes', data: bd.slice(15), backgroundColor: 'rgba(10,54,217,0.55)', borderColor: '#0A36D9', borderWidth: 1 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { x: { display: false }, y: { display: false } }, plugins: { legend: { display: true, labels: { color: 'rgba(255,255,255,0.65)', font: { size: 11, family: 'Space Grotesk' }, usePointStyle: true } } } } });
          const ctx3 = document.getElementById('radarChart'); if (CX.charts.radar) CX.charts.radar.destroy();
          CX.charts.radar = new Chart(ctx3.getContext('2d'), { type: 'radar', data: { labels: ['Reality Score', 'Confidence', 'Price Strength', 'Smart Money', 'Low Hype', 'Safety'], datasets: [{ label: 'BTC', data: [85, 92, 85, 88, 58, 90], borderColor: '#F7931A', backgroundColor: 'rgba(247,147,26,0.1)', borderWidth: 2, pointBackgroundColor: '#F7931A', pointRadius: 4 }, { label: 'ETH', data: [80, 90, 80, 85, 50, 85], borderColor: '#627EEA', backgroundColor: 'rgba(98,126,234,0.1)', borderWidth: 2, pointBackgroundColor: '#627EEA', pointRadius: 4 }, { label: 'LINK', data: [82, 84, 68, 78, 48, 82], borderColor: '#375BD2', backgroundColor: 'rgba(55,91,210,0.08)', borderWidth: 2, pointBackgroundColor: '#375BD2', pointRadius: 4 }, { label: 'FLOKI', data: [1, 38, 18, 4, 2, 6], borderColor: '#E94400', backgroundColor: 'rgba(233,68,0,0.1)', borderWidth: 2, pointBackgroundColor: '#E94400', pointRadius: 4 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { r: { grid: { color: 'rgba(255,255,255,0.07)' }, ticks: { display: false }, pointLabels: { color: 'rgba(160,174,192,0.8)', font: { size: 11, family: 'Space Grotesk' } } } }, plugins: { legend: { display: true, labels: { color: 'rgba(255,255,255,0.7)', font: { size: 11, family: 'Space Grotesk' }, usePointStyle: true } }, tooltip: { ...CHART_DEFAULTS.plugins.tooltip } } } });
          const rl = document.getElementById('rank-list');
          if (rl) { const sorted = [...COINS].sort((a, b) => b.realityScore - a.realityScore); rl.innerHTML = sorted.map((c, i) => `<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);cursor:pointer" onclick="CX.openCoin('${c.id}')"><div style="font-family:'Space Grotesk',sans-serif;font-weight:700;color:var(--text-muted);width:20px;font-size:0.82rem">${i + 1}</div><div class="coin-avatar" style="width:30px;height:30px;font-size:0.62rem;background:${c.colors[0]};flex-shrink:0">${c.image ? `<img src="${c.image}" style="width:18px;height:18px;object-fit:contain" onerror="this.style.display='none'">` : `<span style="color:${c.colors[1]}">${c.symbol.slice(0, 2)}</span>`}</div><div style="flex:1"><div style="font-weight:600;font-size:0.84rem">${c.name}</div><div style="font-size:0.68rem;color:var(--text-muted)">${c.symbol} · ${fmtPrice(c.price)}</div></div><span class="badge ${c.statusClass}" style="font-size:0.62rem;padding:2px 8px">${c.decision}</span><div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:0.88rem;color:${c.statusClass === 'green' ? 'var(--positive)' : c.statusClass === 'red' ? 'var(--danger)' : 'var(--highlight)'};min-width:28px;text-align:right">${c.realityScore}</div></div>`).join(''); }
        }, 120);
      },

      selectEra(el, era) { document.querySelectorAll('.era-card').forEach(c => c.classList.remove('selected')); el.classList.add('selected'); CX.selectedEra = era; },

      loadTimeTravel() {
        const era = CX.selectedEra; const results = document.getElementById('tt-results'); const story = document.getElementById('tt-story'); results.style.display = 'block'; results.style.animation = 'viewIn 0.4s ease forwards';
        const eras = { '2021-bull': { labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'], price: [32, 42, 62, 69, 47, 38], hype: [38, 54, 75, 100, 92, 62], text: "Late 2021 Bull Run: Hype reached 100/100 exactly as Bitcoin peaked at $69K. The Reality Score collapsed to 12. Smart money had been quietly exiting since October when the Hype/Price divergence first exceeded 30 points. The Fear & Greed Index hit 84 (Extreme Greed) — our model's most reliable contrarian AVOID trigger." }, '2022-crash': { labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], price: [38, 42, 30, 12, 4, 0.5], hype: [35, 38, 32, 95, 88, 28], text: "2022 Terra/Luna Contagion: When Do Kwon's algorithmic stablecoin UST depegged, LUNA went from $85 to near-zero in 72 hours — erasing $40B. Panic mentions spiked to 95 while price collapsed. Cryptexa's manipulation fingerprint flagged LUNA 3 weeks before collapse at $32 per LUNA." }, '2024-etf': { labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'], price: [27, 35, 42, 48, 60, 72], hype: [28, 40, 58, 95, 72, 55], text: "2024 Bitcoin Spot ETF Approval: Hype peaked exactly on approval day at 95/100, yet Price Strength held at 78/100. The Reality Score held above 60, sustaining a BUY/WATCH signal. BlackRock's IBIT pulled $4.6B in first-week inflows. Price hit $73,750 ATH within 60 days." } };
        const d = eras[era]; story.textContent = d.text;
        setTimeout(() => { const ctx = document.getElementById('ttChart'); if (CX.charts.tt) CX.charts.tt.destroy(); CX.charts.tt = new Chart(ctx.getContext('2d'), { type: 'line', data: { labels: d.labels, datasets: [{ label: 'Historical Price (Normalized)', data: d.price, borderColor: '#5BB539', backgroundColor: 'rgba(91,181,57,0.08)', borderWidth: 2.5, tension: 0.4, fill: true }, { label: 'Hype Index', data: d.hype, borderColor: '#C71824', borderDash: [6, 4], backgroundColor: 'rgba(199,24,36,0.05)', borderWidth: 2, tension: 0.4, fill: true }] }, options: { ...CHART_DEFAULTS, plugins: { legend: { display: true, labels: { color: 'rgba(255,255,255,0.7)', font: { family: 'Space Grotesk', size: 12 }, usePointStyle: true } }, tooltip: { ...CHART_DEFAULTS.plugins.tooltip } } } }); }, 60);
      },

      /* ============================================================
         NEW: POPULATE TOOL SELECTS
      ============================================================ */
      populateToolSelects() {
        const rsiSel = document.getElementById('rsi-coin-select');
        const compA = document.getElementById('comp-a');
        const compB = document.getElementById('comp-b');
        if (!COINS.length) return;
        const opts = COINS.map(c => `<option value="${c.id}">${c.symbol} — ${c.name}</option>`).join('');
        if (rsiSel && rsiSel.options.length <= 1) rsiSel.innerHTML = '<option value="">— Select a tracked coin —</option>' + opts;
        if (compA && compA.options.length <= 1) compA.innerHTML = '<option value="">— Select Coin A —</option>' + opts;
        if (compB && compB.options.length <= 1) compB.innerHTML = '<option value="">— Select Coin B —</option>' + opts;
      },

      /* ============================================================
         NEW FEATURE 1: RSI CALCULATOR
      ============================================================ */
      rsiAutofill(coinId) {
        if (!coinId) return;
        const c = COINS.find(x => x.id === coinId);
        if (!c) return;
        // Use the coin's sparkline history
        const prices = c.hist.map(p => +p.toFixed(4));
        document.getElementById('rsi-prices').value = prices.join(', ');
        CX.calcRSI();
      },

      // Core RSI formula
      _computeRSI(prices, period) {
        if (prices.length < period + 1) return null;
        // Calculate gains/losses
        const changes = [];
        for (let i = 1; i < prices.length; i++) changes.push(prices[i] - prices[i - 1]);
        let avgGain = 0, avgLoss = 0;
        for (let i = 0; i < period; i++) {
          if (changes[i] > 0) avgGain += changes[i];
          else avgLoss += Math.abs(changes[i]);
        }
        avgGain /= period; avgLoss /= period;
        if (avgLoss === 0) return 100;
        const rsiHistory = [100 - (100 / (1 + (avgGain / avgLoss)))];
        for (let i = period; i < changes.length; i++) {
          const gain = changes[i] > 0 ? changes[i] : 0;
          const loss = changes[i] < 0 ? Math.abs(changes[i]) : 0;
          avgGain = (avgGain * (period - 1) + gain) / period;
          avgLoss = (avgLoss * (period - 1) + loss) / period;
          if (avgLoss === 0) { rsiHistory.push(100); continue; }
          const rs = avgGain / avgLoss;
          rsiHistory.push(100 - (100 / (1 + rs)));
        }
        return { current: rsiHistory[rsiHistory.length - 1], history: rsiHistory };
      },

      calcRSI() {
        const raw = document.getElementById('rsi-prices').value;
        const period = parseInt(document.getElementById('rsi-period').value || 14);
        const valEl = document.getElementById('rsi-value');
        const zoneEl = document.getElementById('rsi-zone-label');
        const barEl = document.getElementById('rsi-bar');
        const interpBox = document.getElementById('rsi-interpretation');
        const interpText = document.getElementById('rsi-interp-text');

        if (!raw.trim()) {
          valEl.textContent = '—'; valEl.style.color = 'var(--text-muted)';
          zoneEl.textContent = 'Enter prices to calculate'; zoneEl.style.color = 'var(--text-muted)';
          barEl.style.width = '50%'; barEl.style.background = 'var(--highlight)';
          interpBox.style.display = 'none';
          if (CX.charts.rsi) CX.charts.rsi.destroy();
          return;
        }
        const prices = raw.split(/[\s,;]+/).map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
        if (prices.length < period + 1) {
          valEl.textContent = '—'; zoneEl.textContent = `Need at least ${period + 1} prices`; zoneEl.style.color = 'var(--alert)';
          interpBox.style.display = 'none'; return;
        }
        const result = CX._computeRSI(prices, period);
        if (!result) { interpBox.style.display = 'none'; return; }
        const rsi = Math.round(result.current * 100) / 100;
        valEl.textContent = rsi.toFixed(1);
        barEl.style.width = rsi + '%';
        let color, zone, interp, borderColor;
        if (rsi < 30) { color = 'var(--positive)'; zone = 'OVERSOLD'; interp = `RSI ${rsi.toFixed(1)} is in oversold territory (below 30). This is a potential BUY signal — the asset may be undervalued and due for a reversal. Confirm with volume analysis and broader market context before entering a long position.`; borderColor = 'var(--positive)'; }
        else if (rsi <= 50) { color = '#7eb3ff'; zone = 'BEARISH NEUTRAL'; interp = `RSI ${rsi.toFixed(1)} sits in the lower neutral zone (30–50). Momentum is tepid — the asset is neither oversold nor neutral-bullish. Watch for a crossover above 50 as a potential trend change signal.`; borderColor = '#7eb3ff'; }
        else if (rsi <= 70) { color = 'var(--highlight)'; zone = 'BULLISH NEUTRAL'; interp = `RSI ${rsi.toFixed(1)} is in the bullish neutral zone (50–70). Momentum is positive without being extreme. This is the "healthy trend" zone — pullbacks to the 50-60 range are generally good entry opportunities.`; borderColor = 'var(--highlight)'; }
        else { color = 'var(--danger)'; zone = 'OVERBOUGHT'; interp = `RSI ${rsi.toFixed(1)} is in overbought territory (above 70). This is a potential SELL/AVOID signal — the asset may be overextended and due for a pullback. High hype assets often stay overbought longer; wait for RSI to drop below 70 before shorting.`; borderColor = 'var(--danger)'; }
        valEl.style.color = color;
        zoneEl.textContent = zone; zoneEl.style.color = color;
        barEl.style.background = color;
        interpBox.style.display = 'block'; interpBox.style.borderLeftColor = borderColor;
        interpText.textContent = interp;
        // RSI history chart
        const hist = result.history.slice(-30);
        const L = hist.map((_, i) => 'T-' + (hist.length - 1 - i));
        setTimeout(() => {
          const ctx = document.getElementById('rsiChart').getContext('2d');
          if (CX.charts.rsi) CX.charts.rsi.destroy();
          CX.charts.rsi = new Chart(ctx, {
            type: 'line',
            data: {
              labels: L, datasets: [
                { data: hist, borderColor: color, backgroundColor: color + '22', borderWidth: 2.5, tension: 0.4, pointRadius: 0, fill: true },
                { data: hist.map(() => 70), borderColor: 'rgba(199,24,36,0.4)', borderWidth: 1, borderDash: [4, 4], pointRadius: 0, fill: false },
                { data: hist.map(() => 30), borderColor: 'rgba(91,181,57,0.4)', borderWidth: 1, borderDash: [4, 4], pointRadius: 0, fill: false },
              ]
            },
            options: { ...CHART_DEFAULTS, plugins: { legend: { display: false }, tooltip: { ...CHART_DEFAULTS.plugins.tooltip } }, scales: { x: { ...CHART_DEFAULTS.scales.x }, y: { ...CHART_DEFAULTS.scales.y, min: 0, max: 100 } } }
          });
        }, 50);
      },

      /* ============================================================
         NEW FEATURE 2: COIN COMPARISON
      ============================================================ */
      runComparison() {
        const idA = document.getElementById('comp-a').value;
        const idB = document.getElementById('comp-b').value;
        const result = document.getElementById('comp-result');
        const placeholder = document.getElementById('comp-placeholder');
        if (!idA || !idB) { result.style.display = 'none'; placeholder.style.display = 'block'; return; }
        if (idA === idB) { result.style.display = 'none'; placeholder.style.display = 'block'; placeholder.textContent = 'Please select two different coins.'; return; }
        const a = COINS.find(x => x.id === idA);
        const b = COINS.find(x => x.id === idB);
        if (!a || !b) return;
        result.style.display = 'block';
        placeholder.style.display = 'none';
        document.getElementById('comp-a-label').textContent = a.name + ' (' + a.symbol + ') — 7D Sparkline';
        document.getElementById('comp-b-label').textContent = b.name + ' (' + b.symbol + ') — 7D Sparkline';

        const metrics = [
          { key: 'Price', aVal: fmtPrice(a.price), bVal: fmtPrice(b.price), aNum: a.price, bNum: b.price, higher: true },
          { key: '24H Change', aVal: (a.change >= 0 ? '▲ +' : '▼ ') + a.change.toFixed(2) + '%', bVal: (b.change >= 0 ? '▲ +' : '▼ ') + b.change.toFixed(2) + '%', aNum: a.change, bNum: b.change, higher: true },
          { key: 'Reality Score', aVal: a.realityScore + '/100', bVal: b.realityScore + '/100', aNum: a.realityScore, bNum: b.realityScore, higher: true },
          { key: 'Hype', aVal: a.hype + '/100', bVal: b.hype + '/100', aNum: a.hype, bNum: b.hype, higher: false },
          { key: 'Confidence', aVal: a.conf + '%', bVal: b.conf + '%', aNum: a.conf, bNum: b.conf, higher: true },
          { key: 'Smart Money', aVal: a.smart + '%', bVal: b.smart + '%', aNum: a.smart, bNum: b.smart, higher: true },
          { key: 'FOMO Index', aVal: a.fomo + '%', bVal: b.fomo + '%', aNum: a.fomo, bNum: b.fomo, higher: false },
          { key: 'Wash Trading', aVal: a.wash + '%', bVal: b.wash + '%', aNum: a.wash, bNum: b.wash, higher: false },
          { key: 'Signal', aVal: a.decision, bVal: b.decision, aNum: a.realityScore, bNum: b.realityScore, higher: true },
        ];
        let aWins = 0, bWins = 0;
        const rows = metrics.map(m => {
          const aBetter = m.higher ? (m.aNum > m.bNum) : (m.aNum < m.bNum);
          const tied = m.aNum === m.bNum;
          if (!tied) { if (aBetter) aWins++; else bWins++; }
          const aClass = tied ? '' : aBetter ? 'comp-winner' : 'comp-loser';
          const bClass = tied ? '' : aBetter ? 'comp-loser' : 'comp-winner';
          const aColor = aBetter ? 'var(--positive)' : (!tied ? 'var(--danger)' : 'var(--text-main)');
          const bColor = !aBetter && !tied ? 'var(--positive)' : tied ? 'var(--text-main)' : 'var(--danger)';
          return { m, aClass, bClass, aColor, bColor };
        });

        const headerA = `<div class="comp-header ${a.statusClass === 'green' ? 'comp-winner' : a.statusClass === 'red' ? 'comp-loser' : ''}"><div class="coin-avatar" style="width:32px;height:32px;font-size:0.65rem;background:${a.colors[0]};flex-shrink:0">${a.image ? `<img src="${a.image}" style="width:20px;height:20px;object-fit:contain" onerror="this.style.display='none'">` : `<span style="color:${a.colors[1]}">${a.symbol.slice(0, 2)}</span>`}</div><div><div class="comp-header-name">${a.name}</div><div class="comp-header-sym">${a.symbol} · <span class="badge ${a.statusClass}" style="font-size:0.6rem;padding:2px 7px">${a.decision}</span></div></div></div>`;
        const headerB = `<div class="comp-header ${b.statusClass === 'green' ? 'comp-winner' : b.statusClass === 'red' ? 'comp-loser' : ''}"><div class="coin-avatar" style="width:32px;height:32px;font-size:0.65rem;background:${b.colors[0]};flex-shrink:0">${b.image ? `<img src="${b.image}" style="width:20px;height:20px;object-fit:contain" onerror="this.style.display='none'">` : `<span style="color:${b.colors[1]}">${b.symbol.slice(0, 2)}</span>`}</div><div><div class="comp-header-name">${b.name}</div><div class="comp-header-sym">${b.symbol} · <span class="badge ${b.statusClass}" style="font-size:0.6rem;padding:2px 7px">${b.decision}</span></div></div></div>`;

        const aRows = rows.map(r => `<div class="comp-row ${r.aClass}"><div class="comp-row-val" style="color:${r.aColor}">${r.m.aVal}</div></div>`).join('');
        const midRows = rows.map(r => `<div class="comp-mid-label">${r.m.key}</div>`).join('');
        const bRows = rows.map(r => `<div class="comp-row ${r.bClass}" style="justify-content:flex-end;text-align:right"><div class="comp-row-val" style="color:${r.bColor}">${r.m.bVal}</div></div>`).join('');

        document.getElementById('comp-grid-wrap').innerHTML = `
      <div class="comp-grid">
        <div class="comp-col">${headerA}${aRows}</div>
        <div class="comp-mid-col"><div style="height:57px"></div>${midRows}</div>
        <div class="comp-col">${headerB}${bRows}</div>
      </div>`;

        // Verdict
        const winner = aWins > bWins ? a : (bWins > aWins ? b : null);
        const verdictEl = document.getElementById('comp-verdict-text');
        if (winner) {
          const loser = winner.id === a.id ? b : a;
          const margin = Math.abs(aWins - bWins);
          verdictEl.innerHTML = `<span style="color:${winner.statusClass === 'green' ? 'var(--positive)' : 'var(--highlight)'}">⬡ ${winner.name} (${winner.symbol})</span> wins ${Math.max(aWins, bWins)}/${metrics.length} metrics — <span style="color:${winner.statusClass === 'green' ? 'var(--positive)' : 'var(--highlight)'}">stronger intelligence signal</span> vs ${loser.symbol} by ${margin} metric${margin !== 1 ? 's' : ''}.`;
        } else {
          verdictEl.textContent = '⚖️ Perfect tie — both coins score equally across all metrics.';
        }

        // Sparkline charts
        setTimeout(() => {
          ['a', 'b'].forEach(side => {
            const coin = side === 'a' ? a : b;
            const ctx = document.getElementById(`comp-chart-${side}`).getContext('2d');
            if (CX.charts[`comp-${side}`]) CX.charts[`comp-${side}`].destroy();
            const col = coin.statusClass === 'green' ? '#5BB539' : coin.statusClass === 'red' ? '#C71824' : '#F2D03B';
            CX.charts[`comp-${side}`] = new Chart(ctx, { type: 'line', data: { labels: coin.hist.map((_, i) => i), datasets: [{ data: coin.hist, borderColor: col, backgroundColor: col + '22', borderWidth: 2, tension: 0.4, pointRadius: 0, fill: true }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } }, animation: { duration: 500 } } });
          });
        }, 60);
      },

      /* ============================================================
         NEW FEATURE 3: RISK/REWARD CALCULATOR
      ============================================================ */
      calcRR() {
        const entry = parseFloat(document.getElementById('rr-entry').value);
        const stop = parseFloat(document.getElementById('rr-stop').value);
        const target = parseFloat(document.getElementById('rr-target').value);
        const portfolio = parseFloat(document.getElementById('rr-portfolio').value) || 10000;
        const riskPct = parseFloat(document.getElementById('rr-risk-pct').value) || 2;
        const resultEl = document.getElementById('rr-result');
        const placeholderEl = document.getElementById('rr-placeholder');

        if (isNaN(entry) || isNaN(stop) || isNaN(target)) {
          resultEl.style.display = 'none'; placeholderEl.style.display = 'block'; return;
        }
        if (entry <= 0 || stop <= 0 || target <= 0) {
          resultEl.style.display = 'none'; placeholderEl.style.display = 'block'; return;
        }
        const riskPerUnit = Math.abs(entry - stop);
        const rewardPerUnit = Math.abs(target - entry);
        if (riskPerUnit === 0) { resultEl.style.display = 'none'; placeholderEl.style.display = 'block'; return; }
        const ratio = rewardPerUnit / riskPerUnit;
        const riskAmt = portfolio * (riskPct / 100);
        const posSize = riskAmt / riskPerUnit * entry;
        const units = riskAmt / riskPerUnit;
        const potProfit = rewardPerUnit * units;
        const breakeven = 1 / (1 + ratio) * 100;
        const isLong = target > entry;
        const isValidStopLong = stop < entry;
        const isValidStopShort = stop > entry;
        const validDirection = (isLong && isValidStopLong) || (!isLong && isValidStopShort);

        resultEl.style.display = 'block'; placeholderEl.style.display = 'none';

        // Ratio display
        const ratioEl = document.getElementById('rr-ratio');
        const ratioColor = ratio >= 3 ? 'var(--positive)' : ratio >= 2 ? 'var(--highlight)' : ratio >= 1 ? 'var(--alert)' : 'var(--danger)';
        ratioEl.textContent = `1 : ${ratio.toFixed(2)}`; ratioEl.style.color = ratioColor;

        document.getElementById('rr-risk-amt').textContent = '$' + riskAmt.toFixed(2);
        document.getElementById('rr-reward-amt').textContent = '$' + potProfit.toFixed(2);
        document.getElementById('rr-breakeven').textContent = breakeven.toFixed(1) + '%';
        document.getElementById('rr-pos-size').textContent = '$' + posSize.toFixed(2);
        document.getElementById('rr-max-risk').textContent = '$' + riskAmt.toFixed(2);
        document.getElementById('rr-pot-profit').textContent = '$' + potProfit.toFixed(2);
        document.getElementById('rr-units').textContent = units.toFixed(4);

        // Verdict
        const verdictEl = document.getElementById('rr-verdict');
        let verdictText, verdictColor, borderColor;
        if (!validDirection) { verdictText = '⚠ Warning: Stop-loss placement is invalid for this trade direction. Ensure your stop is below entry for longs, above for shorts.'; verdictColor = 'var(--danger)'; borderColor = 'var(--danger)'; }
        else if (ratio >= 3) { verdictText = `✦ Excellent setup. A 1:${ratio.toFixed(2)} R/R means you only need to win ${breakeven.toFixed(0)}% of trades to break even. This is a high-probability edge — proceed with proper position sizing.`; verdictColor = 'var(--positive)'; borderColor = 'var(--positive)'; }
        else if (ratio >= 2) { verdictText = `⬡ Good setup. 1:${ratio.toFixed(2)} R/R is above the minimum professional threshold (1:2). You need ${breakeven.toFixed(0)}% win rate to break even. Acceptable entry if technical setup is confirmed.`; verdictColor = 'var(--highlight)'; borderColor = 'var(--highlight)'; }
        else if (ratio >= 1) { verdictText = `⚠ Marginal setup. 1:${ratio.toFixed(2)} R/R is below the professional minimum of 1:2. You need to win ${breakeven.toFixed(0)}% of similar trades to break even. Consider widening target or tightening stop.`; verdictColor = 'var(--alert)'; borderColor = 'var(--alert)'; }
        else { verdictText = `🔴 Poor setup. A 1:${ratio.toFixed(2)} R/R ratio means you lose more than you gain. Avoid this trade unless you have very high conviction (>70% win rate). Risk/Reward must be at minimum 1:1.`; verdictColor = 'var(--danger)'; borderColor = 'var(--danger)'; }
        verdictEl.style.color = verdictColor; verdictEl.style.borderLeftColor = borderColor; verdictEl.style.background = borderColor + '0A';
        verdictEl.textContent = verdictText;

        // Levels chart
        setTimeout(() => {
          const ctx = document.getElementById('rrChart').getContext('2d');
          if (CX.charts.rr) CX.charts.rr.destroy();
          const labels = ['Stop Loss', 'Entry', 'Target'];
          const values = [stop, entry, target];
          const barColors = ['rgba(199,24,36,0.7)', 'rgba(10,54,217,0.7)', 'rgba(91,181,57,0.7)'];
          CX.charts.rr = new Chart(ctx, {
            type: 'bar',
            data: { labels, datasets: [{ data: values, backgroundColor: barColors, borderColor: ['#C71824', '#0A36D9', '#5BB539'], borderWidth: 2, borderRadius: 6 }] },
            options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => '$' + c.raw.toLocaleString(undefined, { minimumFractionDigits: 2 }) }, backgroundColor: 'rgba(5,2,20,0.95)', borderColor: 'rgba(10,54,217,0.3)', borderWidth: 1, bodyFont: { family: 'Space Grotesk', size: 11 } } }, scales: { x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(160,174,192,0.7)', font: { family: 'Space Grotesk', size: 9 }, callback: v => '$' + v.toLocaleString() } }, y: { grid: { display: false }, ticks: { color: 'rgba(160,174,192,0.8)', font: { family: 'Space Grotesk', size: 11 } } } } }
          });
        }, 50);
      },

      /* ============================================================
         LIVE UPDATES
      ============================================================ */
      startLive() {
        setInterval(CX.tickPrices, 3500);
        setInterval(() => { fetchCGData().then(() => { CX.updateMarketBar(); const dash = document.getElementById('dashboard'); if (dash && dash.classList.contains('active')) CX.renderDashboard(); }); }, REFRESH_INTERVAL);
        setInterval(CX.randomAlert, 16000);
        setInterval(() => { const el = document.getElementById('sb-time'); if (el) el.textContent = new Date().toLocaleTimeString('en', { hour12: false }); }, 1000);
      },

      tickPrices() {
        COINS.forEach(c => {
          const drift = c.type === 'stable' ? 0.003 : c.type === 'pump' ? 0.008 : 0.005;
          c.price *= (1 + rnd(-drift, drift));
          c.hype = Math.max(0, Math.min(100, c.hype + rnd(-0.8, 0.8)));
          const raw = 50 + (c.priceStr - c.hype) / 2;
          c.realityScore = Math.max(0, Math.min(100, Math.round(raw)));
          c.decision = c.realityScore > 55 && c.conf > 72 ? 'BUY' : c.realityScore >= 32 ? 'WATCH' : 'AVOID';
          c.statusClass = c.decision === 'BUY' ? 'green' : c.decision === 'WATCH' ? 'yellow' : 'red';
        });
        CX.updateMarketBar();
        const dash = document.getElementById('dashboard');
        if (dash && dash.classList.contains('active')) CX.renderDashboard();
        if (CX.currentCoin) { const updated = COINS.find(c => c.id === CX.currentCoin.id); if (updated) { const priceEl = document.getElementById('d-price'); if (priceEl) priceEl.textContent = fmtPrice(updated.price); } }
      },

      toast(icon, title, msg, type) {
        const bar = { danger: 'var(--danger)', positive: 'var(--positive)', warn: 'var(--alert)' }[type] || 'var(--alert)';
        const t = document.createElement('div'); t.className = 'toast';
        t.innerHTML = `<div class="toast-bar" style="background:${bar}"></div><div class="toast-body"><div class="toast-title" style="color:${bar}">${icon} ${title}</div><div class="toast-msg">${msg}</div></div><button class="toast-close" onclick="this.closest('.toast').remove()">×</button>`;
        document.getElementById('alerts-container').appendChild(t);
        setTimeout(() => { if (t.parentElement) { t.style.animation = 'toastOut 0.3s ease forwards'; setTimeout(() => t.remove(), 300); } }, 5500);
      },

      randomAlert() {
        const alerts = [
          { coin: 'FLOKI', msg: 'Maximum manipulation score reached. Smart money at 4%. Pump imminent or dump in progress.', type: 'danger' },
          { coin: 'BTC', msg: `Live price: ${COINS.length ? fmtPrice(COINS.find(c => c.id === 'btc')?.price || 64000) : '$64,000'}. ETF net inflow +$312M today. Smart money accumulation upgraded.`, type: 'positive' },
          { coin: 'PEPE', msg: 'Hype spike detected. Wash trading confirmed at 68%. Exit liquidity trap forming.', type: 'danger' },
          { coin: 'LINK', msg: 'CCIP integration: 15th chain confirmed. Hidden gem signal strengthening.', type: 'positive' },
          { coin: 'SOL', msg: 'Firedancer validator client testnet live. TVL up 12% this week.', type: 'warn' },
          { coin: 'INJ', msg: 'Weekly token burn at 3-month high. BUY signal confirmed.', type: 'positive' },
        ];
        const a = alerts[Math.floor(Math.random() * alerts.length)];
        CX.toast(a.type === 'danger' ? '🚨' : a.type === 'positive' ? '✦' : '⚡', `ALERT: ${a.coin}`, a.msg, a.type);
      },
    };

    window.onload = CX.init;

    /* ============================================================
       FIREBASE MEMECOIN LISTENER (Runs in background)
    ============================================================ */
    setTimeout(() => {
      // Check if Firebase was initialized in index.html
      if (window.firebaseApp) {
        import("https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js")
          .then((module) => {
            const { getDatabase, ref, onValue } = module;
            const db = getDatabase(window.firebaseApp);
            const memecoinRef = ref(db, 'solana_memecoins');
            
            // Listen to the data you upload from upload_csv.py
            onValue(memecoinRef, (snapshot) => {
              const liveData = snapshot.val();
              if (liveData) {
                const coinCount = Object.keys(liveData).length;
                console.log(`🔥 SUCCESS: Silently grabbed ${coinCount} Meme Coins from Firebase backend!`, liveData);
                CX.toast('📦', 'DATABASE SYNC', `Fetched ${coinCount} custom coins from Firebase! Check console.`, 'positive');
                
                // Note: To display this data on the dashboard, you will need to map these items into 
                // the global COINS array format! For now, they are perfectly synced in the background.
              }
            });
          }).catch(err => console.error("Firebase DB Error:", err));
      }
    }, 5500); // Wait 5.5s so it doesn't interrupt the initial dashboard loading animations
