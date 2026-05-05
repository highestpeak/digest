document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('[data-sort]');
  let currentSort = null;
  let ascending = true;

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const key = header.getAttribute('data-sort');
      if (currentSort === key) {
        ascending = !ascending;
      } else {
        currentSort = key;
        ascending = true;
      }

      const tbody = document.querySelector('#leaderboard-table tbody');
      if (!tbody) return;
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((a, b) => {
        let aVal = a.getAttribute('data-' + key) || '';
        let bVal = b.getAttribute('data-' + key) || '';

        const aNum = parseFloat(aVal);
        const bNum = parseFloat(bVal);
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return ascending ? aNum - bNum : bNum - aNum;
        }
        return ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      });

      rows.forEach(row => tbody.appendChild(row));
    });
  });
});
