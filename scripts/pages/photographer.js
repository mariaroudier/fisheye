
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
                  document.getElementById('photographer-photo').setAttribute("alt", photographer.name);
                  document.getElementById('text-price').innerHTML = photographer.price + '€ / jour';
                  document.getElementById('name-photographer').innerHTML = `Contactez-moi <br/> ${photographer.name}`;
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
            // eslint-disable-next-line no-undef
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
const sortingLikes = document.getElementById('sorting-popularity');
const sortingDate = document.getElementById('sorting-date');

// Apparaitre le liste de sorting
const toShowOrCloseSortingList = () => {
      if(!chevron.classList.contains('fa-chevron-up')) {
            sortingTitre.style.display = "block";
            sortingDate.style.display = "block";
            sortingLikes.style.display = "block";
            sorting.style.boxShadow = "0 6px 10px #1e1e1e94";
            sortingDate.style.borderTop = "1px white solid";
            sortingTitre.style.borderTop = "1px white solid";
            sorting.setAttribute("aria-expanded", "true");
            chevron.classList.toggle('fa-chevron-up');
      } else if(chevron.classList.contains('fa-chevron-up')) {
            sortingTitre.style.display = "none";
            sortingDate.style.display = "none";
            sortingLikes.style.display = "none";
            sorting.style.boxShadow = "none";
            sorting.setAttribute("aria-expanded", "false")
      }
}    
      
      chevron.addEventListener("keyup", (e) => {
            if(e.key === 'Enter') {
                  toShowOrCloseSortingList();
            }
      })
      chevron.addEventListener('click' ,() => {
            toShowOrCloseSortingList();
      })

      
// Sorting par popularité
const toSortByPopularity = () => {
      if(!chevron.classList.contains('fa-chevron-up')) {
            sortingTitre.style.display = "block";
            sortingDate.style.display = "block";
            sorting.style.boxShadow = "0 6px 10px #1e1e1e94"
            sortingDate.style.borderTop = "1px white solid";
            sortingTitre.style.borderTop = "1px white solid";
            sorting.setAttribute("aria-expanded", "true")
            chevron.classList.toggle('fa-chevron-up');
      }
      else if(chevron.classList.contains('fa-chevron-up')) {
            sortingTitre.style.display = "none";
            sortingDate.style.display = "none";
            sorting.style.boxShadow = "none"
            sorting.setAttribute("aria-expanded", "false")
            mediaPhotographer = mediaPhotographer.sort( (a,b) => {
                  return b.likes - a.likes
            })
            photosSection.innerHTML = ""
            mediaPhotographer.forEach((content) => {
                  const photoCardDOM = content.getPhotoCardDOM();
                  photosSection.appendChild(photoCardDOM);
            })
            // eslint-disable-next-line no-undef
            Lightbox.setMedia(mediaPhotographer)
            chevron.classList.remove('fa-chevron-up');
      }
}

      sortingLikes.addEventListener("keydown", (e) => {
            if(e.key === 'Enter') {
                  toSortByPopularity();
                  sorting.setAttribute("aria-activedescendant",e.target.id)
            }
      })
      sortingLikes.addEventListener('click' ,(e) => {
            toSortByPopularity();
            sorting.setAttribute("aria-activedescendant",e.target.id)
      })

// Sorting par titre
const toSortByTitre = () => {
      mediaPhotographer = mediaPhotographer.sort( (a,b) => {
            return a.title.localeCompare(b.title);
      })
      photosSection.innerHTML = "";
      mediaPhotographer.forEach((content) => {
            const photoCardDOM = content.getPhotoCardDOM();
            photosSection.appendChild(photoCardDOM);
      });
      // eslint-disable-next-line no-undef
      Lightbox.setMedia(mediaPhotographer)

      if(chevron.classList.contains('fa-chevron-up')) {
            sortingLikes.style.display = "none";
            sortingDate.style.display = "none";
            sorting.style.boxShadow = "none";
            sortingTitre.style.border = "none";
            sorting.setAttribute("aria-expanded", "false");
            chevron.classList.remove('fa-chevron-up');
      }
      else if(!chevron.classList.contains('fa-chevron-up')) {
            sortingLikes.style.display = "block";
            sortingDate.style.display = "block";
            sorting.style.boxShadow = "0 6px 10px #1e1e1e94";
            sortingTitre.style.borderTop = "1px white solid";
            sortingDate.style.borderTop = "1px white solid";
            sorting.setAttribute("aria-expanded", "true");
            chevron.classList.toggle('fa-chevron-up');
      }
}

      sortingTitre.addEventListener("keydown", (e) => {
            if(e.key === 'Enter') {
                  toSortByTitre();
                  sorting.setAttribute("aria-activedescendant",e.target.id)
            }
      })
      sortingTitre.addEventListener('click' ,(e) => {
            toSortByTitre();
            sorting.setAttribute("aria-activedescendant",e.target.id)
      })

// Sorting par date
const toSortByDate = () => {
      mediaPhotographer = mediaPhotographer.sort( (a,b) => {
            return new Date(b.date) - new Date(a.date)
      })
      photosSection.innerHTML = ""
      mediaPhotographer.forEach((content) => {
            const photoCardDOM = content.getPhotoCardDOM();
            photosSection.appendChild(photoCardDOM);
      });
      // eslint-disable-next-line no-undef
      Lightbox.setMedia(mediaPhotographer)

      if(chevron.classList.contains('fa-chevron-up')) {
            sortingTitre.style.display = "none";
            sortingLikes.style.display = "none";
            sorting.style.boxShadow = "none"
            sortingDate.style.border = "none"
            sorting.setAttribute("aria-expanded", "false")
            chevron.classList.remove('fa-chevron-up');
      }
      else if(!chevron.classList.contains('fa-chevron-up')) {
            sortingLikes.style.display = "block";
            sortingTitre.style.display = "block";
            sortingDate.style.borderTop = "1px white solid";
            sortingTitre.style.borderTop = "1px white solid";
            sorting.style.boxShadow = "0 6px 10px #1e1e1e94";
            sorting.setAttribute("aria-expanded", "true");
            chevron.classList.toggle('fa-chevron-up');
      }   
}
            
      sortingDate.addEventListener("keydown", (e) => {
            if(e.key === 'Enter') {
                  toSortByDate();
                  sorting.setAttribute("aria-activedescendant",e.target.id)
            }
      })
      sortingDate.addEventListener('click' ,(e) => {
            toSortByDate();
            sorting.setAttribute("aria-activedescendant",e.target.id)
      })

      window.addEventListener('click', e => { // при клике в любом месте окна браузера
            const target = e.target // находим элемент, на котором был клик
            if (!target.closest('#chevron-up-down') && !target.closest('#sorting-popularity') && !target.closest('#sorting-date') && !target.closest('#sorting-titre')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
                  chevron.classList.remove('fa-chevron-up') // то закрываем окно навигации, удаляя активный класс
                  sortingTitre.style.display = "none";
                  sortingDate.style.display = "none";
                  sorting.style.boxShadow = "none"
                  sorting.setAttribute("aria-expanded", "false")
            }
      })