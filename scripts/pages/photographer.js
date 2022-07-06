
const paramsString = document.location.search.substring(1);
let mediaPhotographer = []
const photosSection = document.getElementById('photos-section')

// Obtenir les données
async function getPhotographers() {
      const response = await fetch("../../data/photographers.json")
      const data = await response.json();
      return data
}

// Creer un façon de display les objets
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
// Start
init();

// Sorting
const sorting = document.getElementById('select-sorting');
const sortingTitre = document.getElementById('sorting-titre');
const chevron = document.getElementById('chevron-up-down');
const sortingLikes = document.getElementById('sort-pop-text');
const sortingDate = document.getElementById('sorting-date');

      // apparaitre le liste de sorting
chevron.addEventListener('click' ,() => {
      chevron.classList.toggle('fa-chevron-up');
      if(chevron.classList.contains('fa-chevron-up')) {
            sortingTitre.style.display = "block";
            sortingDate.style.display = "block";
            sortingLikes.style.paddingBottom = "0"
            sorting.style.boxShadow = "0 10px 10px #1e1e1e94"
      } else if(chevron.classList.contains('fa-chevron-down')) {
            sortingTitre.style.display = "none";
            sortingDate.style.display = "none";
      }
})
      // par popularité
sortingLikes.addEventListener('click' ,() => {
      mediaPhotographer = mediaPhotographer.sort( (a,b) => {
            return b.likes - a.likes
      })
      photosSection.innerHTML = ""
      mediaPhotographer.forEach((content) => {
            const photoCardDOM = content.getPhotoCardDOM();
            photosSection.appendChild(photoCardDOM);
      })
      
      Lightbox.setMedia(mediaPhotographer)
      
      chevron.classList.toggle('fa-chevron-up');
      if(chevron.classList.contains('fa-chevron-up')) {
            sortingTitre.style.display = "none";
            sortingDate.style.display = "none";
            chevron.classList.toggle('fa-chevron-down');
      }

})

      // par titre
sortingTitre.addEventListener('click' ,() => {
      mediaPhotographer = mediaPhotographer.sort( (a,b) => {
            return a.title.localeCompare(b.title)
      })
      photosSection.innerHTML = ""
      mediaPhotographer.forEach((content) => {
            const photoCardDOM = content.getPhotoCardDOM();
            photosSection.appendChild(photoCardDOM);
      });
      
      Lightbox.setMedia(mediaPhotographer)

})

      // par date
sortingDate.addEventListener('click' ,() => {
      mediaPhotographer = mediaPhotographer.sort( (a,b) => {
            return new Date(b.date) - new Date(a.date)
      })
      photosSection.innerHTML = ""
      mediaPhotographer.forEach((content) => {
            const photoCardDOM = content.getPhotoCardDOM();
            photosSection.appendChild(photoCardDOM);
      });
     
      Lightbox.setMedia(mediaPhotographer)

})