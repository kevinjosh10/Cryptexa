function renderCoinCard(c) {
  const isUp = c.change >= 0;
  const isUp7 = c.change7d >= 0;
  const rank = c.rank !== 99 ? `<span class="coin-rank">#${c.rank}</span>` : '';
  
  const hypeBlocks = Array(10).fill(0).map((_, i) => {
    let cls = '';
    if (i < c.hype / 10) {
      if (c.hype > 80) cls = 'on'; else if (c.hype > 50) cls = 'mid'; else cls = 'low';
    }
    return `<div class="hype-dot ${cls}"></div>`;
  }).join('');

  return `
    <a href="coin.html?id=${c.id}" class="coin-card" data-hype="${c.hype}" data-conf="${c.conf}" data-rs="${c.realityScore}">
      <div class="coin-card-header">
        <div class="flex gap-12">
          <div class="coin-avatar">${c.image ? `<img src="${c.image}" alt="${c.symbol}" loading="lazy">` : c.symbol.substring(0, 2)}</div>
          <div>
            <div class="coin-name">${c.name}</div>
            <div class="flex">
              ${rank}
              <span class="coin-symbol">${c.symbol.toUpperCase()}</span>
            </div>
          </div>
        </div>
        <div class="badge ${c.statusClass}">${c.decision}</div>
      </div>
      <div class="coin-price" id="p-${c.id}">
        ${c.price ? '$' + c.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: (c.price < 1 ? 6 : 2) }) : '—'}
      </div>
      <div class="coin-meta">
        <span class="${isUp ? 'up' : 'dn'} flex gap-8">
          ${isUp ? '▲' : '▼'} ${Math.abs(c.change).toFixed(2)}% (24h)
        </span>
        <span class="${isUp7 ? 'up' : 'dn'}">7d: ${Math.abs(c.change7d).toFixed(2)}%</span>
      </div>
      <div class="mini-chart-box"><canvas id="ch-${c.id}"></canvas></div>
      <div class="divider"></div>
      <div class="rs-row">
        <div class="rs-label">REALITY</div>
        <div class="rs-track">
          <div class="rs-fill" style="width:${c.realityScore}%; background:var(--${c.statusClass === 'green' ? 'positive' : c.statusClass === 'yellow' ? 'highlight' : 'danger'})"></div>
        </div>
        <div class="rs-label" style="text-align:left; width:30px">${c.realityScore}</div>
      </div>
      <div class="flex-between">
        <div class="hype-indicator">HYPE <div class="hype-dots">${hypeBlocks}</div></div>
        <div class="text-xs text-muted mono">CONF: ${c.conf}%</div>
      </div>
      <div class="coin-footer-stats">
        <div class="cfs-item"><span class="cfs-label">MCap</span><span class="cfs-value">${c.mcap}</span></div>
        <div class="cfs-item"><span class="cfs-label">Vol (24h)</span><span class="cfs-value">${c.vol}</span></div>
      </div>
    </a>
  `;
}
