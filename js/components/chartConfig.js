export const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { 
      mode: 'index', 
      intersect: false, 
      backgroundColor: 'rgba(5, 2, 20, 0.9)', 
      titleFont: { family: 'Space Grotesk' }, 
      bodyFont: { family: 'Inter' }, 
      padding: 12, 
      cornerRadius: 8, 
      borderColor: 'rgba(10, 54, 217, 0.4)', 
      borderWidth: 1 
    } 
  },
  scales: { x: { display: false }, y: { display: false } },
  elements: { point: { radius: 0, hitRadius: 10, hoverRadius: 4 }, line: { tension: 0.4, borderWidth: 2 } },
  interaction: { mode: 'nearest', axis: 'x', intersect: false }
};

export const gridOpts = { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false };
export const tickOpts = { color: '#8896C0', font: { family: 'Inter', size: 10 } };
