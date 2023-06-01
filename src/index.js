import './styleSheets/styles.css';
import { initialLoad, cleanPage } from './functions/pageLoad';
import { createAboutPage } from './pages/about';

// begin initial setup of page

initialLoad();

const menuBtn = document.querySelector('#menuBtn');
const aboutBtn = document.querySelector('#aboutBtn');
const galleryBtn = document.querySelector('#galleryBtn');

menuBtn.addEventListener('click', () => {
  cleanPage();
});

aboutBtn.addEventListener('click', () => {
  cleanPage();
  createAboutPage();
});

galleryBtn.addEventListener('click', () => {
  cleanPage();
});
