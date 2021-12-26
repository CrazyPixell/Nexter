'use strict';

const navBtn = document.querySelector('.nav-btn');
const closeNavBtn = document.querySelector('.main-nav__close-btn');
const navBar = document.querySelector('.main-nav');
const navLinks = document.querySelector('.main-nav__list');

navBtn.addEventListener('click', function (e) {
  navBar.classList.add('main-nav--show');
});

closeNavBtn.addEventListener('click', function (e) {
  navBar.classList.remove('main-nav--show');
});

navLinks.addEventListener('click', function (e) {
  if (e.target.classList.contains('main-nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: 'smooth',
    });
    navBar.classList.remove('main-nav--show');
  }
});

const linksFade = function (e) {
  if (e.target.classList.contains('main-nav__link')) {
    const linkActive = e.target;
    const siblings = linkActive
      .closest('.main-nav')
      .querySelectorAll('.main-nav__link');
    siblings.forEach(link => {
      if (link !== linkActive) link.style.opacity = this;
    });
  }
};

navLinks.addEventListener('mouseover', linksFade.bind('0.5'));
navLinks.addEventListener('mouseout', linksFade.bind('1'));
