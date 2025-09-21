const themeSelector = document.getElementById('theme-selector');
const body = document.body;
const logo = document.getElementById('logo');

themeSelector.addEventListener('change', () => {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.src = 'dark.png';
  } else {
    body.classList.remove('dark');
    logo.src = 'logo.webp';
  }
});
