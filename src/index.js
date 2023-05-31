import './styleSheets/styles.css';
import { initialLoad, cleanPage } from './functions/pageLoad';

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
});

galleryBtn.addEventListener('click', () => {
  cleanPage();
});
