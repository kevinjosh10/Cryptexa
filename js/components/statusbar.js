export function renderStatusBar() {
  const sbHTML = `
    <div id="status-bar">
      <div class="sb-item sb-ok"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> CONNECTION SECURE</div>
      <div class="sb-sep"></div>
      <div class="sb-item">NODE: CX-ALPHA-09</div>
      <div class="sb-sep"></div>
      <div class="sb-item">LATENCY: <span class="text-green">14MS</span></div>
      <div class="sb-sep"></div>
      <div style="flex:1"></div>
      <div class="sb-item">SYSTEM TIME: <span id="sb-time"></span></div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', sbHTML);
  setInterval(() => {
    const el = document.getElementById('sb-time');
    if (el) el.textContent = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  }, 1000);
}
