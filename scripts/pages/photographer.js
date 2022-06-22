//Mettre le code JavaScript lié à la page photographer.html

const paramsString = document.location.search.substring(1);
const mediaPhotographer = []


async function getPhotographers() {
      const response = await fetch("../../data/photographers.json")
      const data = await response.json();
      //return data;
      return data
}

function displayData(photographers, media) {
     
      photographers.forEach((photographer) => {
            const picture = `assets/photographers/${photographer.portrait}`;
            if (photographer.id == paramsString) {
                  document.getElementById('photographer-name').innerHTML = photographer.name
                  document.getElementById('photographer-location').innerHTML = photographer.city + ', ' + photographer.country
                  document.getElementById('photographer-tagline').innerHTML = photographer.tagline
                  document.getElementById('photographer-photo').setAttribute("src", picture);
                  document.getElementById('text-price').innerHTML = photographer.price + '€ / jour';
                  document.getElementById('name-photographer').innerHTML = photographer.name;

            }
      
      });

      media.forEach((content) => {
            const photosSection = document.getElementById('photos-section')

            if (content.photographerId == paramsString) {
                  // eslint-disable-next-line no-undef
                  const photoModel = new MediaFactory(content);
                  const photoCardDOM = photoModel.getPhotoCardDOM();
                  photosSection.appendChild(photoCardDOM);
                  mediaPhotographer.push(photoModel)
                  
                  return content
            }
            Lightbox.setMedia(mediaPhotographer)
      });
}

async function init() {
      // Récupère les datas des photographes
      const { photographers, media} = await getPhotographers();
      displayData(photographers, media);
}

init();