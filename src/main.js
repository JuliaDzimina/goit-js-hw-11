import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
   searchForm: document.querySelector('.search-form'),
    galleryList: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
}


function fetchImages(query){
    const API_KEY = '42192199-b3b6ebcf3d1600f471f1bd878';
    const BASE_URL = 'https://pixabay.com/api/';

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    const url = `${BASE_URL}?${params}`;
    
   return fetch(url).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          const myError = new Error(`${res.status}`);
          throw myError;
        }
      });

};

refs.searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.query.value;
 
    fetchImages(query).then(data => {
      createMarkup(data.hits);
    });
  
    e.target.reset();
  };

  function galleryTemplate({webformatURL, largeImageURL, tags, likes, views, comments,  downloads}){
    return `<li>
    <img src="" alt="${tags}">
    <figcaption>
      
      <div>
        <h3>Views</h3>
        <p>${likes}</p>
      </div>

      <div>
        <h3>Views</h3>
        <p>${views}</p>
      </div>

      <div>
        <h3>Comments</h3>
        <p>${comments}</p>
      </div>

      <div>
        <h3>Downloads</h3>
        <p>${downloads}</p>
      </div>

    </figcaption>
  </li>`

  };

  function imagesTemp(img){
    return img.map(galleryTemplate).join('')
  }


  function createMarkup(arr){
    const markup = imagesTemp(arr);
    refs.galleryList.innerHTML = markup;

  }


