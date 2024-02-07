import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.loader.style.display="none";let a;function f(i){const t="42192199-b3b6ebcf3d1600f471f1bd878",o="https://pixabay.com/api/",s=new URLSearchParams({key:t,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}?${s}`;return fetch(e).then(r=>{if(r.ok)return r.json();throw new Error(`${r.status}`)})}n.searchForm.addEventListener("submit",d);function d(i){i.preventDefault(),n.galleryList.innerHTML="",n.loader.style.display="block";const t=i.target.elements.query.value;f(t).then(o=>{o.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"}),h(o.hits)}).catch(o=>{console.log(`Error fetching images: ${o}`)}).finally(()=>{n.searchForm.reset(),a.refresh(),n.loader.style.display="none"})}function m({webformatURL:i,largeImageURL:t,tags:o,likes:s,views:e,comments:r,downloads:l}){return`<li class="gallery-list">
    <a class="gallery-link" href="${t}"><img class="img-gallery" src="${i}" alt="${o}"></a>
    <figcaption class="info-img">
      
      <div>
        <h3>Views</h3>
        <p>${s}</p>
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
        <p>${l}</p>
      </div>

    </figcaption>
  </li>`}function h(i){const t=i.map(m).join("");n.galleryList.innerHTML=t,a=new u(".gallery a",{captionDelay:250,captionsData:"alt"})}
//# sourceMappingURL=commonHelpers.js.map
