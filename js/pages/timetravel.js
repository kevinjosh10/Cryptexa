
let replayInterval;

function initTimeTravel() {
  document.querySelectorAll('.era-card').forEach(c => {
    c.addEventListener('click', (e) => {
      document.querySelectorAll('.era-card').forEach(x => x.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
      const box = document.getElementById('tt-analysis');
      box.style.display = 'none';
      setTimeout(() => {
        box.style.display = 'block';
        const p = box.querySelector('.tt-ai');
        const txt = e.currentTarget.querySelector('.era-year').textContent;
        p.textContent = `Analyzing ${txt} conditions... Synthesizing historical market data. Simulated replay of major cycles active.`;
      }, 300);
      drawTtChart(e.currentTarget.querySelector('.era-year').textContent);
    });
  });
  
  // default
  const evt = new Event('click');
  const first = document.querySelector('.era-card');
  if (first) first.dispatchEvent(evt);
}

function drawTtChart(era) {
  const ctx = document.getElementById('tt-chart');
  if (!ctx || !window.Chart) return;
  // logic to draw simple chart
  const data = window.chartInstance ? window.chartInstance.data : [100, 110, 105, 120, 90, 80, 200];
  // simplified
}
