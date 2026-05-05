document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-filter-tab]');
  const items = document.querySelectorAll('[data-filter-item]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('filter-active');
        t.classList.add('filter-inactive');
      });
      tab.classList.add('filter-active');
      tab.classList.remove('filter-inactive');

      const category = tab.getAttribute('data-filter-tab');
      items.forEach(item => {
        if (category === 'All' || item.getAttribute('data-category') === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
