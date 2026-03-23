
let activeLabMode = 'sim';
let activeLabCoin = null;
let replayState = 0;
let replayChart = null;

function initManipulationLab() {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get('id');
  
  if (idParam && Store.COINS.length) {
    activeLabCoin = Store.COINS.find(x => x.id === idParam) || Store.COINS[0];
  }

  document.addEventListener('marketDataUpdated', () => {
    if (!activeLabCoin && Store.COINS.length > 0) activeLabCoin = Store.COINS[0];
    setupLab();
  });

  if (activeLabCoin || Store.COINS.length > 0) {
    if (!activeLabCoin) activeLabCoin = Store.COINS[0];
    setupLab();
  }

  document.querySelectorAll('.filter-btn[data-mode]').forEach(b => {
    b.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn[data-mode]').forEach(x => x.classList.remove('active'));
      e.target.classList.add('active');
      activeLabMode = e.target.dataset.mode;
      setupLab();
    });
  });
}

function setupLab() {
  if (!activeLabCoin) return;
  
  const sim = document.getElementById('panel-sim');
  const rep = document.getElementById('panel-rep');
  
  if (activeLabMode === 'sim') {
    if (sim) sim.style.display = 'block';
    if (rep) rep.style.display = 'none';
    initSimulator();
  } else {
    if (sim) sim.style.display = 'none';
    if (rep) rep.style.display = 'block';
    initReplay();
  }
}

function initSimulator() {
  const lbl = document.getElementById('sim-coin-lbl');
  if (lbl) lbl.textContent = `Simulation Asset: ${activeLabCoin.symbol.toUpperCase()}`;
  
  const inputs = ['sim-wash', 'sim-spoof', 'sim-fomo'];
  const updateSim = () => {
    const w = parseInt(document.getElementById('sim-wash').value);
    const s = parseInt(document.getElementById('sim-spoof').value);
    const f = parseInt(document.getElementById('sim-fomo').value);
    
    document.getElementById('val-wash').textContent = w + '%';
    document.getElementById('val-spoof').textContent = s + '%';
    document.getElementById('val-fomo').textContent = f;
    
    const imp = Math.round((w + s + f) / 3);
    const rs = Math.max(0, 100 - (imp * 1.5));
    const scoreEl = document.getElementById('sim-score');
    scoreEl.textContent = rs;
    scoreEl.style.color = rs > 55 ? 'var(--positive)' : rs > 30 ? 'var(--highlight)' : 'var(--danger)';
  };

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === 'sim-wash') el.value = activeLabCoin.wash || 10;
      if (id === 'sim-spoof') el.value = activeLabCoin.spoof || 10;
      if (id === 'sim-fomo') el.value = activeLabCoin.fomo || 50;
      el.addEventListener('input', updateSim);
    }
  });
  
  updateSim();
}

function initReplay() {
  const lbl = document.getElementById('rep-coin-lbl');
  if (lbl) lbl.textContent = `Analyzing: ${activeLabCoin.symbol.toUpperCase()}`;
  
  replayState = 0;
  
  const steps = document.querySelectorAll('.replay-step');
  steps.forEach(s => { s.classList.remove('active', 'done'); });
  
  drawReplayChart();
  
  const btn = document.getElementById('btn-play');
  if (btn) {
    btn.onclick = () => {
      btn.disabled = true;
      btn.textContent = 'ANALYZING...';
      const int = setInterval(() => {
        if (replayState >= steps.length) {
          clearInterval(int);
          btn.textContent = 'ANALYSIS COMPLETE';
          return;
        }
        steps.forEach((s, i) => {
          if (i < replayState) { s.classList.remove('active'); s.classList.add('done'); }
          else if (i === replayState) { s.classList.add('active'); s.classList.remove('done'); }
        });
        replayState++;
      }, 1500);
    };
  }
}

function drawReplayChart() {
  const ctx = document.getElementById('replay-chart');
  if (!ctx || !window.Chart) return;
  
  if (replayChart) replayChart.destroy();
  
  const data = activeLabCoin.hist && activeLabCoin.hist.length ? activeLabCoin.hist : [10, 15, 14, 28, 35, 20, 18];
  
  replayChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map((_, i) => i),
      datasets: [{
        data, borderColor: 'var(--alert)', tension: 0.1, borderWidth: 2, pointRadius: 2, pointBackgroundColor: 'var(--alert)'
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      scales: { x: { display: false }, y: { display: true, position: 'right', grid: gridOpts, ticks: tickOpts } }
    }
  });
}
