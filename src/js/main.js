import menuData from '../json/menu.json';
import menuTemplate from '../templates/card.hbs';
import { bodyEl, themeSwitchEL, menuEL } from './refs.js';
import { LIGHT, DARK } from './theme';

let uiTheme = localStorage.getItem('ui-theme');
if (!uiTheme) {
  uiTheme = LIGHT;
  localStorage.setItem('ui-theme', LIGHT);
}

bodyEl.classList.add(uiTheme);
themeSwitchEL.checked = uiTheme === LIGHT ? false : true;

const menuMarkup = menuTemplate(menuData);
menuEL.insertAdjacentHTML('beforeend', menuMarkup);

themeSwitchEL.addEventListener('change', fnChangeTheme);

function fnChangeTheme(event) {
  bodyEl.classList.toggle(DARK);
  bodyEl.classList.toggle(LIGHT);
  localStorage.setItem('ui-theme', event.target.checked ? DARK : LIGHT);
}