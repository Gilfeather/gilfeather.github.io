// Theme preferences are local to this site and never sent to a server.
(() => {
  const select = document.querySelector('[data-theme-select]');
  if (!select) return;
  const system = matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  const update = () => {
    const choice = root.dataset.theme || 'system';
    select.value = choice;
    const dark = choice === 'dark' || (choice === 'system' && system.matches);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b1423' : '#f5f9ff');
    document.dispatchEvent(new CustomEvent('appearancechange'));
  };
  select.addEventListener('change', () => {
    const choice = select.value;
    if (choice === 'system') delete root.dataset.theme;
    else root.dataset.theme = choice;
    try {
      if (choice === 'system') localStorage.removeItem('appearance');
      else localStorage.setItem('appearance', choice);
    } catch (_) { /* The selected theme still applies for this page. */ }
    update();
  });
  system.addEventListener('change', update);
  addEventListener('storage', event => {
    if (event.key !== 'appearance' && event.key !== null) return;
    if (event.newValue === 'light' || event.newValue === 'dark') root.dataset.theme = event.newValue;
    else delete root.dataset.theme;
    update();
  });
  update();
})();
