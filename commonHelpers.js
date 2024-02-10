import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let l;s.loader.style.display="none";function d(o){const t="42192199-b3b6ebcf3d1600f471f1bd878",i="https://pixabay.com/api/",n=new URLSearchParams({key:t,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${i}?${n}`;return fetch(e).then(r=>{if(r.ok)return r.json();throw new Error(`${r.status}`)})}s.searchForm.addEventListener("submit",m);function m(o){o.preventDefault(),s.loader.style.display="block",s.galleryList.innerHTML="";const t=o.target.elements.query.value;d(t).then(i=>{f(i.hits)}).catch(i=>c.error({message:`Error fetching images: ${i}`,position:"topRight",backgroundColor:"red",messageColor:"white"})).finally(()=>{s.searchForm.reset(),s.loader.style.display="none"})}function f(o){o.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});const t=o.map(h).join("");s.galleryList.innerHTML=t,l=new u(".gallery a",{captionDelay:250,captionsData:"alt"}),l.refresh()}function h({webformatURL:o,largeImageURL:t,tags:i,likes:n,views:e,comments:r,downloads:a}){return`<li class="gallery-list">
    <a class="gallery-link" href="${t}"><img class="img-gallery" src="${o}" alt="${i}"></a>
    <div class="info-img">
      
      <div>
        <h3>Likes</h3>
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
        <p>${a}</p>
      </div>

    </div>
  </li>`}
//# sourceMappingURL=commonHelpers.js.map
