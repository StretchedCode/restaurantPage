// group of functions that allows for the loading of and cleaning of pages.

// initial loading of index.html

const container = document.getElementById('content');

const initialLoad = () => {

};

// cleans up the 'container' div everytime a new page needs to be loaded

const cleanPage = () => {
  container.innerHTML = '';
};
