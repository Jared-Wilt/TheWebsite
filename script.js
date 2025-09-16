// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav ul');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const articleGrid = document.getElementById('articleGrid');

if (searchBtn && searchInput && articleGrid) {
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const articles = articleGrid.querySelectorAll('article');

    articles.forEach(article => {
      const title = article.dataset.title.toLowerCase();
      article.style.display = title.includes(query) ? 'block' : 'none';
    });
  });
}
