import"./assets/vendor-491d46cf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function a(r){const o="42192199-b3b6ebcf3d1600f471f1bd878",n="https://pixabay.com/api/",i=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${n}?${i}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(`${t.status}`)})}c.searchForm.addEventListener("submit",l);function l(r){r.preventDefault();const o=r.target.elements.query.value;a(o).then(n=>{d(n.hits)}),r.target.reset()}function u({webformatURL:r,largeImageURL:o,tags:n,likes:i,views:e,comments:t,downloads:s}){return`<li>
    <img src="" alt="${n}">
    <figcaption>
      
      <div>
        <h3>Views</h3>
        <p>${i}</p>
      </div>

      <div>
        <h3>Views</h3>
        <p>${e}</p>
      </div>

      <div>
        <h3>Comments</h3>
        <p>${t}</p>
      </div>

      <div>
        <h3>Downloads</h3>
        <p>${s}</p>
      </div>

    </figcaption>
  </li>`}function f(r){return r.map(u).join("")}function d(r){const o=f(r);c.galleryList.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
