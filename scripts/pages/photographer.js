
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
const sortingLikes = document.getElementById('sort-pop-text');
const sortingDate = document.getElementById('sorting-date');



      // Apparaitre le liste de sorting
            // par Enter
            chevron.addEventListener("keyup", (e) => {
                  if(e.key === 'Enter') {
                        chevron.classList.toggle('fa-chevron-up');
                        if(chevron.classList.contains('fa-chevron-up')) {
                              sortingTitre.style.display = "block";
                              sortingDate.style.display = "block";
                              sorting.style.boxShadow = "0 6px 10px #1e1e1e94";
                              sorting.setAttribute("aria-expanded", "true");
                        } else if(!chevron.classList.contains('fa-chevron-up')) {
                              sortingTitre.style.display = "none";
                              sortingDate.style.display = "none";
                              sorting.style.boxShadow = "none";
                              sorting.setAttribute("aria-expanded", "false")
                        }
                  }
            })

      chevron.addEventListener('click' ,() => {
            chevron.classList.toggle('fa-chevron-up');
            if(chevron.classList.contains('fa-chevron-up')) {
                  sortingTitre.style.display = "block";
                  sortingDate.style.display = "block";
                  sorting.style.boxShadow = "0 6px 10px #1e1e1e94"
                  sorting.setAttribute("aria-expanded", "true")
            } else if(!chevron.classList.contains('fa-chevron-up')) {
                  sortingTitre.style.display = "none";
                  sortingDate.style.display = "none";
                  sorting.style.boxShadow = "none";
                  sorting.setAttribute("aria-expanded", "false")
            }
      })
      // Sorting par popularité
            // par Enter
            sortingLikes.addEventListener("keydown", (e) => {
                  if(e.key === 'Enter') {
                        if(!chevron.classList.contains('fa-chevron-up')) {
                              sortingTitre.style.display = "block";
                              sortingDate.style.display = "block";
                              chevron.classList.toggle('fa-chevron-up');
                              sorting.style.boxShadow = "0 6px 10px #1e1e1e94"
                              sorting.setAttribute("aria-expanded", "true")
                        }
                        else if(chevron.classList.contains('fa-chevron-up')) {
                              sortingTitre.style.display = "none";
                              sortingDate.style.display = "none";
                              sorting.style.boxShadow = "none"
                              chevron.classList.remove('fa-chevron-up');
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
                              sorting.setAttribute("aria-activedescendant",e.target.id)
                        }
            
                  }
            })
      sortingLikes.addEventListener('click' ,(e) => {
            if(!chevron.classList.contains('fa-chevron-up')) {
                  sortingTitre.style.display = "block";
                  sortingDate.style.display = "block";
                  chevron.classList.toggle('fa-chevron-up');
                  sorting.style.boxShadow = "0 6px 10px #1e1e1e94"
                  sorting.setAttribute("aria-expanded", "true")
            }
            else if(chevron.classList.contains('fa-chevron-up')) {
                  sortingTitre.style.display = "none";
                  sortingDate.style.display = "none";
                  sorting.style.boxShadow = "none"
                  chevron.classList.remove('fa-chevron-up');
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
                  sorting.setAttribute("aria-activedescendant",e.target.id)
            }

      })

      // Sorting par titre
            // par Enter
            sortingTitre.addEventListener("keydown", (e) => {
                  if(e.key === 'Enter') {
                        mediaPhotographer = mediaPhotographer.sort( (a,b) => {
                              return a.title.localeCompare(b.title)
                        })
                        photosSection.innerHTML = ""
                        mediaPhotographer.forEach((content) => {
                              const photoCardDOM = content.getPhotoCardDOM();
                              photosSection.appendChild(photoCardDOM);
                        });
                        
                        // eslint-disable-next-line no-undef
                        Lightbox.setMedia(mediaPhotographer)
                        sorting.setAttribute("aria-activedescendant",e.target.id)
            
                        if(chevron.classList.contains('fa-chevron-up')) {
                              sortingTitre.style.display = "none";
                              sortingDate.style.display = "none";
                              sorting.style.boxShadow = "none"
                              chevron.classList.remove('fa-chevron-up');
                              sorting.setAttribute("aria-expanded", "false")
                        }
                  }
            })
      sortingTitre.addEventListener('click' ,(e) => {
            mediaPhotographer = mediaPhotographer.sort( (a,b) => {
                  return a.title.localeCompare(b.title)
            })
            photosSection.innerHTML = ""
            mediaPhotographer.forEach((content) => {
                  const photoCardDOM = content.getPhotoCardDOM();
                  photosSection.appendChild(photoCardDOM);
            });
            
            // eslint-disable-next-line no-undef
            Lightbox.setMedia(mediaPhotographer)
            sorting.setAttribute("aria-activedescendant",e.target.id)

            if(chevron.classList.contains('fa-chevron-up')) {
                  sortingTitre.style.display = "none";
                  sortingDate.style.display = "none";
                  sorting.style.boxShadow = "none"
                  chevron.classList.remove('fa-chevron-up');
                  sorting.setAttribute("aria-expanded", "false")
            }
      })

      // Sorting par date
            // par Enter
            sortingDate.addEventListener("keydown", (e) => {
                  if(e.key === 'Enter') {
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
                        sorting.setAttribute("aria-activedescendant",e.target.id)
                  
                        if(chevron.classList.contains('fa-chevron-up')) {
                              sortingTitre.style.display = "none";
                              sortingDate.style.display = "none";
                              sorting.style.boxShadow = "none"
                              chevron.classList.remove('fa-chevron-up');
                              sorting.setAttribute("aria-expanded", "false")
                        }
                  }
            })
      sortingDate.addEventListener('click' ,(e) => {
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
            sorting.setAttribute("aria-activedescendant",e.target.id)
      
            if(chevron.classList.contains('fa-chevron-up')) {
                  sortingTitre.style.display = "none";
                  sortingDate.style.display = "none";
                  sorting.style.boxShadow = "none"
                  chevron.classList.remove('fa-chevron-up');
                  sorting.setAttribute("aria-expanded", "false")
            }
      })