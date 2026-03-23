function computeFields(c) {
  const raw = 50 + (c.priceStr - c.hype) / 2;
  c.realityScore = Math.max(0, Math.min(100, Math.round(raw)));
  c.decision = c.realityScore > 55 && c.conf > 72 ? 'BUY' : c.realityScore >= 32 ? 'WATCH' : 'AVOID';
  c.statusClass = c.decision === 'BUY' ? 'green' : c.decision === 'WATCH' ? 'yellow' : 'red';
  return c;
}
