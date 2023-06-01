// group of functions that allows for the loading of and cleaning of pages.

// initial loading of index.html

const container = document.getElementById('content');
const mainContent = document.createElement('div');

const initialLoad = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  const aboutBtn = document.createElement('button');
  aboutBtn.textContent = 'About';
  aboutBtn.id = 'aboutBtn';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.id = 'menuBtn';

  const galleryBtn = document.createElement('button');
  galleryBtn.textContent = 'Gallery';
  galleryBtn.id = 'galleryBtn';

  header.appendChild(aboutBtn);
  header.appendChild(menuBtn);
  header.appendChild(galleryBtn);

  mainContent.textContent = 'Welcome to the beginning of this website, please take a look around!';
  mainContent.classList.add('main-content');

  container.appendChild(header);
  container.appendChild(mainContent);
};

// cleans up the 'container' div everytime a new page needs to be loaded

const cleanPage = () => {
  mainContent.innerHTML = '';
};

export {
  initialLoad,
  cleanPage,
  mainContent,
};
