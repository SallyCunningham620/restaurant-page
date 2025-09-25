//index.js

import loadPage from './loadPage';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import "./style.css";

init();

function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
}
function init() {
  loadPage();
  loadHome();
  addNavEvents();
}
