/* empty css                      */import{S as s}from"./assets/vendor-CgTBfC_f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=[{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2476-1-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2476-1-scaled.jpg",description:"Mannheim Object 4521 image-1"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2474-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2474-scaled.jpg",description:"Mannheim Object 4521 image-2"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2378-1-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2378-1-scaled.jpg",description:"Mannheim Object 4520 image-1"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2376-1-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2376-1-scaled.jpg",description:"Mannheim Object 4520 image-2"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2371-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2371-scaled.jpg",description:"Mannheim Object 4520 image-3"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2383-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2383-scaled.jpg",description:"Mannheim Object 7002 image-1"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2387-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2387-scaled.jpg",description:"Mannheim Object 7002 image-2"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2386-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2386-scaled.jpg",description:"Mannheim Object 7002 image-1"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2395-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2395-scaled.jpg",description:"Mannheim Object 7003 image-1"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2392-1-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2392-1-scaled.jpg",description:"Mannheim Object 7003 image-2"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2398-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2398-scaled.jpg",description:"Mannheim Object 7003 image-3"},{preview:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2368-2048x1536.jpg",original:"https://aabaugmbh.de/wp-content/uploads/2022/03/img_2368-scaled.jpg",description:"Mannheim Object 4519 image-1"}],r=document.querySelector("ul.gallery"),c=g.map(a=>`<li class="gallery-item">
<a class="gallery-link" href="${a.original}">
<img 
class="gallery-image"
src="${a.preview}"
alt="${a.description}"> 
</a>
</li>`).join("");r.insertAdjacentHTML("beforeend",c);new s(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
