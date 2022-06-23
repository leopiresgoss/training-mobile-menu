function toggleHiddenElements() {
  const elements = [
    '.menu-bars',
    'main',
    'footer',
    'h1',
  ];

  elements.forEach((element) => {
    document.querySelector(element).classList.toggle('hide');
  });
}

function toggleShownElements() {
  const elements = [
    '#desktop-nav',
    '#desktop-nav ul',
  ];

  elements.forEach((element) => {
    document.querySelector(element).classList.toggle('show');
  });
}

function removeCloseBtn() {
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.parentNode.removeChild(closeBtn);
}

function closeMenu() {
  document.querySelector('header').classList.remove('menu-visible');
  toggleShownElements();
  toggleHiddenElements();
  removeCloseBtn();
}

function addMenuListeners() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

function createCloseBtn() {
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = 'X';
  closeBtn.classList.add('close-btn');
  closeBtn.type = 'button';
  document.querySelector('header').appendChild(closeBtn);
}

function openMenu() {
  document.querySelector('header').classList.add('menu-visible');
  toggleHiddenElements();
  toggleShownElements();
  createCloseBtn();
  addMenuListeners();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-bars').addEventListener('click', openMenu);
});