function closeMenu() {
  document.querySelector('.menu-bars').classList.remove('hide');
  document.querySelector('#desktop-nav').classList.remove('show');
  document.querySelector('#desktop-nav ul').classList.remove('show');
  document.querySelector('main').classList.remove('hide');
  document.querySelector('footer').classList.remove('hide');
  document.querySelector('h1').classList.remove('hide');
  document.querySelector('header').classList.remove('menu-visible');
  document.querySelector('.close-btn').classList.add('hide');
}

function openMenu() {
  document.querySelector('.menu-bars').classList.add('hide');
  document.querySelector('#desktop-nav').classList.add('show');
  document.querySelector('#desktop-nav ul').classList.add('show');
  document.querySelector('main').classList.add('hide');
  document.querySelector('footer').classList.add('hide');
  document.querySelector('h1').classList.add('hide');
  document.querySelector('header').classList.add('menu-visible');
  document.querySelector('.close-btn').classList.remove('hide');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-bars').addEventListener('click', openMenu);
  document.querySelector('.close-btn').addEventListener('click', closeMenu);
});