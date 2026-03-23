

document.addEventListener('DOMContentLoaded', async () => {
  const path = window.location.pathname;
  let activePath = 'index';
  if (path.includes('manipulation')) activePath = 'manipulation';
  else if (path.includes('insights')) activePath = 'insights';
  else if (path.includes('timetravel')) activePath = 'timetravel';
  else if (path.includes('coin')) activePath = 'coin';

  // Render components
  renderNavbar(activePath);
  renderStatusBar();
  renderAlertsContainer();

  // Load static data to show UI immediately
  buildStaticCoins();

  // Check which page initialize to run
  if (activePath === 'index') bindHomeEvents();
  else if (activePath === 'coin') initCoinPage();
  else if (activePath === 'manipulation') initManipulationLab();
  else if (activePath === 'insights') initInsightsLab();
  else if (activePath === 'timetravel') initTimeTravel();

  // Fetch actual data
  await fetchCGData();
  
  const loader = document.getElementById('data-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 400);
  }

  // Periodic updates
  setInterval(fetchCGData, 45000);
  startRandomAlerts();

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('#refresh-btn')) {
      fetchCGData();
    }
  });
});
