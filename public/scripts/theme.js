(function () {
  const STORAGE_KEY = 'digest-theme';

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Apply immediately to prevent flash
  apply(getPreferred());

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }

  // Bind click after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) btn.addEventListener('click', toggle);
  });

  // Also try binding immediately in case DOM is already loaded
  if (document.readyState !== 'loading') {
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) btn.addEventListener('click', toggle);
  }
})();
