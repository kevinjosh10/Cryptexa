export function rnd(a, b) {
  return Math.random() * (b - a) + a;
}

export function fmtLarge(n) {
  if (!n || isNaN(n)) return '—';
  if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9) return '$' + (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M';
  return '$' + n.toLocaleString();
}

export function fmtSupply(n, sym) {
  if (!n || isNaN(n)) return '—';
  if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T ' + sym;
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B ' + sym;
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M ' + sym;
  return n.toLocaleString() + ' ' + sym;
}

export function fmtPrice(p) {
  if (!p || isNaN(p)) return '$0.00';
  if (p >= 1000) return '$' + p.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (p >= 1) return '$' + p.toFixed(4);
  if (p >= 0.001) return '$' + p.toFixed(6);
  return '$' + p.toFixed(8);
}

export function fmtAth(n) {
  if (!n || isNaN(n)) return '—';
  return fmtPrice(n);
}

export function sampleSparkline(arr, n = 30) {
  if (!arr || !arr.length) return [];
  const step = Math.max(1, Math.floor(arr.length / n));
  const out = [];
  for (let i = 0; i < arr.length && out.length < n; i += step) out.push(arr[i]);
  return out;
}

export function fakeHist(price) {
  const out = [];
  let v = price * 0.85;
  for (let i = 0; i < 30; i++) {
    v *= (1 + rnd(-0.04, 0.05));
    out.push(v);
  }
  return out;
}
