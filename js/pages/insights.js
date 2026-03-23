import { Store } from '../store.js';

export function initInsightsLab() {
  document.addEventListener('marketDataUpdated', renderInsights);
  if (Store.COINS.length > 0) renderInsights();

  // init gravity map bubbles
  const map = document.getElementById('gravity-map');
  if (map) {
    const bubbles = ['BTC', 'ETH', 'SOL', 'SHIB', 'PEPE', 'DOGE', 'LINK', 'INJ'];
    const colors = ['#F7931A', '#627EEA', '#9945FF', '#FF0000', '#00B140', '#C2A633', '#375BD2', '#0082FA'];
    bubbles.forEach((b, i) => {
      const el = document.createElement('div');
      el.className = 'g-bubble';
      el.textContent = b;
      el.style.backgroundColor = colors[i] + 'D0';
      el.style.width = Math.max(30, Math.random() * 60 + 20) + 'px';
      el.style.height = el.style.width;
      el.style.left = (10 + Math.random() * 80) + '%';
      el.style.top = (10 + Math.random() * 80) + '%';
      el.style.animationDelay = (Math.random() * -5) + 's';
      map.appendChild(el);
    });
  }
}

function renderInsights() {
  setTimeout(() => {
    // animate madness
    const fills = document.querySelectorAll('.mad-fill');
    fills.forEach(f => {
      const v = f.parentElement.nextElementSibling.textContent;
      f.style.width = v + '%';
      f.style.background = v > 75 ? 'var(--danger)' : v > 40 ? 'var(--highlight)' : 'var(--positive)';
    });
  }, 100);
}
