function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function toggleColor() {
  const colors = ['#2E8B57', '#1E90FF', '#FF6347', '#8A2BE2'];
  const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  let nextIndex = (colors.indexOf(currentColor) + 1) % colors.length;
  const nextColor = colors[nextIndex];
  document.documentElement.style.setProperty('--primary-color', nextColor);
  localStorage.setItem('color', nextColor);
}

function applySavedSettings() {
  const savedTheme = localStorage.getItem('theme');
  const savedColor = localStorage.getItem('color');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  if (savedColor) {
    document.documentElement.style.setProperty('--primary-color', savedColor);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applySavedSettings();
  document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
  document.getElementById('toggleColor').addEventListener('click', toggleColor);
});
