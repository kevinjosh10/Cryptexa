
const CG_KEY = 'CG-ZieMdW15Bh6P9zGjgUegF4yJ';
const CG_BASE = 'https://api.coingecko.com/api/v3';
const CG_IDS = 'bitcoin,ethereum,binancecoin,solana,ripple,cardano,avalanche-2,chainlink,polkadot,matic-network,arbitrum,injective-protocol,celestia,dogecoin,shiba-inu,pepe,dogwifhat,floki';
const CG_HEADERS = { 'x-cg-demo-api-key': CG_KEY };

async function fetchCGData() {
  if (Store.isRefreshing) return;
  Store.isRefreshing = true;
  setRefreshState('loading');

  try {
    const [mktRes, glbRes, fngRes] = await Promise.allSettled([
      fetch(`${CG_BASE}/coins/markets?vs_currency=usd&ids=${CG_IDS}&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d`, { headers: CG_HEADERS }),
      fetch(`${CG_BASE}/global`, { headers: CG_HEADERS }),
      fetch('https://api.alternative.me/fng/?limit=1&format=json')
    ]);

    let marketOk = false;

    if (mktRes.status === 'fulfilled' && mktRes.value.ok) {
      const markets = await mktRes.value.json();
      mergeMarkets(markets);
      Store.lastRefresh = new Date();
      marketOk = true;
    }

    if (glbRes.status === 'fulfilled' && glbRes.value.ok) {
      const g = await glbRes.value.json();
      Store.globalData = g.data;
    }

    if (fngRes.status === 'fulfilled' && fngRes.value.ok) {
      const f = await fngRes.value.json();
      Store.fngData = f.data && f.data[0] ? f.data[0] : null;
    }

    const errBanner = document.getElementById('error-banner');
    if (marketOk) {
      setRefreshState('ok');
      if (errBanner) errBanner.style.display = 'none';
      if (document.dispatchEvent) document.dispatchEvent(new CustomEvent('marketDataUpdated'));
    } else {
      throw new Error('Market data unavailable');
    }
  } catch (e) {
    console.warn('CoinGecko fetch error:', e);
    if (!Store.COINS.length) buildStaticCoins();
    setRefreshState('error');
    const errBanner = document.getElementById('error-banner');
    if (errBanner) errBanner.style.display = 'flex';
    if (document.dispatchEvent) document.dispatchEvent(new CustomEvent('marketDataUpdated'));
  } finally {
    Store.isRefreshing = false;
  }
}

function mergeMarkets(markets) {
  const mapped = [];
  markets.forEach(m => {
    const s = STATIC_DATA[m.id];
    if (!s) return;
    const sparkline = m.sparkline_in_7d && m.sparkline_in_7d.price ? m.sparkline_in_7d.price : [];
    const hist = sparkline.length ? sampleSparkline(sparkline) : fakeHist(m.current_price);
    const athDist = m.ath && m.current_price ? ((m.current_price - m.ath) / m.ath * 100).toFixed(0) + '%' : '—';
    const coin = {
      ...s,
      price: m.current_price || 0,
      change: parseFloat((m.price_change_percentage_24h || 0).toFixed(2)),
      change7d: parseFloat((m.price_change_percentage_7d_in_currency || 0).toFixed(2)),
      mcap: fmtLarge(m.market_cap),
      mcapRaw: m.market_cap || 0,
      vol: fmtLarge(m.total_volume),
      supply: fmtSupply(m.circulating_supply, s.symbol),
      rank: m.market_cap_rank || s.rank || 99,
      ath: fmtAth(m.ath),
      athDist: athDist,
      image: m.image || '',
      hist,
    };
    mapped.push(computeFields(coin));
  });
  if (mapped.length > 0) {
    Store.COINS.length = 0;
    mapped.forEach(c => Store.COINS.push(c));
  }
}

function buildStaticCoins() {
  Store.COINS.length = 0;
  Object.values(STATIC_DATA).forEach((s, i) => {
    const c = { ...s, price: 0, change: 0, change7d: 0, mcap: '—', mcapRaw: 0, vol: '—', supply: '—', rank: i + 1, image: '', hist: fakeHist(100) };
    Store.COINS.push(computeFields(c));
  });
}

function setRefreshState(state) {
  const dot = document.getElementById('refresh-dot');
  const label = document.getElementById('refresh-label');
  const btn = document.getElementById('refresh-btn');
  const liveLabel = document.getElementById('live-label');
  
  if (state === 'loading') {
    if (dot) { dot.style.background = 'var(--alert)'; dot.style.boxShadow = '0 0 6px var(--alert)'; }
    if (label) label.textContent = 'Fetching live data from CoinGecko…';
    if (btn) btn.disabled = true;
    if (liveLabel) liveLabel.textContent = 'SYNCING';
  } else if (state === 'ok') {
    if (dot) { dot.style.background = 'var(--positive)'; dot.style.boxShadow = '0 0 6px var(--positive)'; }
    const t = Store.lastRefresh ? Store.lastRefresh.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '';
    if (label) label.textContent = `Live data · CoinGecko · Updated ${t}`;
    if (btn) btn.disabled = false;
    if (liveLabel) liveLabel.textContent = 'LIVE';
  } else {
    if (dot) { dot.style.background = 'var(--danger)'; dot.style.boxShadow = '0 0 6px var(--danger)'; }
    if (label) label.textContent = 'Live feed error — showing cached data · Click Retry';
    if (btn) btn.disabled = false;
    if (liveLabel) liveLabel.textContent = 'OFFLINE';
  }
}
