import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const a={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function u(t){const o="42192199-b3b6ebcf3d1600f471f1bd878",i="https://pixabay.com/api/",n=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${i}?${n}`;return fetch(e).then(r=>{if(r.ok)return r.json();throw new Error(`${r.status}`)})}a.searchForm.addEventListener("submit",f);function f(t){t.preventDefault();const o=t.target.elements.query.value;u(o).then(i=>{i.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"}),h(i.hits),new c(".gallery a",{captionDelay:250,captionsData:"alt"})}).catch(i=>{console.log(`Error fetching images: ${i}`)}).finally(a.searchForm.reset()),t.target.reset()}function m({webformatURL:t,largeImageURL:o,tags:i,likes:n,views:e,comments:r,downloads:s}){return`<li class="gallery-list">
    <a class="gallery-link" href="${o}"><img class="img-gallery" src="${t}" alt="${i}"></a>
    <figcaption class="info-img">
      
      <div>
        <h3>Views</h3>
        <p>${n}</p>
      </div>

      <div>
        <h3>Views</h3>
        <p>${e}</p>
      </div>

      <div>
        <h3>Comments</h3>
        <p>${r}</p>
      </div>

      <div>
        <h3>Downloads</h3>
        <p>${s}</p>
      </div>

    </figcaption>
  </li>`}function d(t){return t.map(m).join("")}function h(t){const o=d(t);a.galleryList.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
