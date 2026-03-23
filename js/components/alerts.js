export function renderAlertsContainer() {
  document.body.insertAdjacentHTML('beforeend', '<div id="alerts-container"></div>');
}

export function toast(title, msg, type = 'info') {
  const c = document.getElementById('alerts-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = 'toast';
  const colors = { info: '#7eb3ff', warn: 'var(--alert)', danger: 'var(--danger)', success: 'var(--positive)' };
  t.innerHTML = `
    <div class="toast-bar" style="background:${colors[type]}"></div>
    <div class="toast-body">
      <div class="toast-title" style="color:${colors[type]}">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
    <button class="toast-close">×</button>
  `;
  c.appendChild(t);
  const rm = () => {
    t.style.animation = 'toastOut 0.3s forwards';
    setTimeout(() => t.remove(), 300);
  };
  t.querySelector('.toast-close').onclick = rm;
  setTimeout(rm, 6000);
}

const ALERTS = [
  { t: "Whale Alert", m: "12,450 BTC moved from dormant wallet to Binance.", y: "warn" },
  { t: "Wash Trading Detected", m: "Spike in circular trading volume for SHIB across tier-2 exchanges.", y: "danger" },
  { t: "Smart Money Flow", m: "Institutional wallets accumulating LINK for 6th consecutive day.", y: "success" },
  { t: "Spoofing Warning", m: "Large fake sell orders detected on SOL orderbook.", y: "danger" },
  { t: "Network Congestion", m: "ETH gas fees spiking due to NFT minting event.", y: "info" }
];

export function startRandomAlerts() {
  setInterval(() => {
    if (Math.random() > 0.7) {
      const a = ALERTS[Math.floor(Math.random() * ALERTS.length)];
      toast(a.t, a.m, a.y);
    }
  }, 15000);
}
