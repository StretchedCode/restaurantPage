import donValley from '../assets/donValley.jpeg';
import { mainContent } from '../functions/pageLoad';

const donValleyImg = new Image();
donValleyImg.src = donValley;

const aboutPage = document.createElement('div');
aboutPage.classList.add('aboutPage');

const aboutHeader = document.createElement('h1');
aboutHeader.textContent = 'A tale etched in Time.';
aboutHeader.classList.add('content-header');

const aboutContent = document.createElement('div');
aboutContent.textContent = 'The Don Valley Parkway, known as one of the freeways located within Toronto, travels through the vast ravine system that the city itself is built upon. Experience how the city conforms to the spectacular shifts in elevation and is able to carve itself a unique identity through it.';
aboutContent.classList.add('about-content');

mainContent.appendChild(aboutPage);
mainContent.appendChild(aboutHeader);
mainContent.appendChild(donValleyImg);
mainContent.appendChild(aboutContent);
