// Restore the explicit choice before paint; system remains the default.
(() => {
  try {
    const preference = localStorage.getItem('appearance');
    if (preference === 'light' || preference === 'dark') document.documentElement.dataset.theme = preference;
  } catch (_) { /* Storage may be unavailable; follow the system. */ }
})();
