import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
   searchForm: document.querySelector('.search-form'),
   galleryList: document.querySelector('.gallery'),
   loader: document.querySelector('.loader'),
}
refs.loader.style.display = 'none';
let lightbox;

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
    refs.galleryList.innerHTML = '';
    refs.loader.style.display = 'block';

    const query = e.target.elements.query.value;

    fetchImages(query).then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: 'red',
          messageColor: 'white',});
      };

      createMarkup(data.hits);
      
    })
    .catch( err =>{
      console.log(`Error fetching images: ${err}`);
    }
  )
  .finally(() =>{
    refs.searchForm.reset();
    lightbox.refresh();
    refs.loader.style.display = 'none';
  });
  };

  function galleryTemplate({webformatURL, largeImageURL, tags, likes, views, comments,  downloads}){
    return `<li class="gallery-list">
    <a class="gallery-link" href="${largeImageURL}"><img class="img-gallery" src="${webformatURL}" alt="${tags}"></a>
    <figcaption class="info-img">
      
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

  function createMarkup(arr){
    const markup =arr.map(galleryTemplate).join('');
    refs.galleryList.innerHTML = markup;
    lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      captionsData: 'alt',
    });
  }


