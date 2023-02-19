const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const setImagesGalleryEl = document.querySelector('.gallery');

const makeImagesEl = ({url,alt}) => {

  
  return `<li class="gallery_item"> <img class="gallery_images" src=${url} alt=${alt}> </li>`

}
const imagesEl = images.map(makeImagesEl).join('');
setImagesGalleryEl.insertAdjacentHTML("afterbegin", imagesEl);


console.log(setImagesGalleryEl);

// setImagesGalleryEl.addEventListener('load' ,makeImagesEl, { once: true})
