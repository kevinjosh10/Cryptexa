function renderNavbar(activePath) {
  const navHTML = `
    <nav id="navbar">
      <a href="index.html" class="nav-brand">
        <svg class="nav-brand-logo" viewBox="0 0 24 24" fill="none" stroke="url(#logoGlowGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <defs>
            <linearGradient id="logoGlowGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0A36D9" />
              <stop offset="100%" stop-color="#F2D03B" />
            </linearGradient>
          </defs>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <div class="nav-brand-text">CRYPT<span>EXA</span></div>
      </a>
      <div class="nav-center">
        <a href="index.html" class="nav-link ${activePath === 'index' ? 'active' : ''}">Dashboard</a>
        <a href="manipulation.html" class="nav-link ${activePath === 'manipulation' ? 'active' : ''}">Manipulation Lab</a>
        <a href="insights.html" class="nav-link ${activePath === 'insights' ? 'active' : ''}">Insights Lab</a>
        <a href="timetravel.html" class="nav-link ${activePath === 'timetravel' ? 'active' : ''}">Time Travel</a>
      </div>
      <div class="nav-right">
        <div class="search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="global-search" class="search-bar" placeholder="Search tokens...">
        </div>
        <div class="live-chip"><div class="live-dot"></div><span id="live-label">LIVE</span></div>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  document.getElementById('global-search').addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (document.dispatchEvent) {
      document.dispatchEvent(new CustomEvent('globalSearch', { detail: q }));
    }
  });
}
