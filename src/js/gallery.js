import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
    {
preview:
'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
original:
'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
description: 'Hokkaido Flower',
    },
    {
preview:
'../img/img-gallery/preview/preview-object-2.jpg',
original:
'../img/img-gallery/original/original-object-2.jpg',
description: 'Object 2',
    },
    {
preview:
'../img/img-gallery/preview/preview-object-3.jpg',
original:
'../img/img-gallery/original/original-object-3.jpg',
description: 'Object 3',
    },
    {
preview:
'../img/img-gallery/preview/preview-object-4.jpg',
original:
'../img/img-gallery/original/original-object-4.jpg',
description: 'Object 4',
    },
    {
preview:
'../img/img-gallery/preview/preview-object-5.jpg',
original:
'../img/img-gallery/original/original-object-5.jpg',
description: 'Object 5',
    },
    {
preview:
'../img/img-gallery/preview/preview-object-6.jpg',
original:
'../img/img-gallery/original/original-object-6.jpg',
description: 'Object 6',
    },
    {
preview:
'../img/img-gallery/preview/preview-object-7.jpg',
original:
'../img/img-gallery/original/original-object-7.jpg',
description: 'Object 7',
    },
    {
preview:
'../img/img-gallery/preview/preview-object-8.jpg',
original:
'../img/img-gallery/original/original-object-8.jpg',
description: 'Object 8',
    },
    {
preview:
'../img/img-gallery/preview/preview-object-9.jpg',
original:
'../img/img-gallery/original/original-object-9.jpg',
description: 'Object 9',
},
]

const list =document.querySelector("ul.gallery")
const markupGallery = images
.map((image) => `<li class="gallery-item">
<a class="gallery-link" href="${image.original}">
<img 
class="gallery-image"
src="${image.preview}"
alt="${image.description}"> 
</a>
</li>`) 
.join(""); 
list.insertAdjacentHTML("beforeend", markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});