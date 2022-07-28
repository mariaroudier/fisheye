// eslint-disable-next-line no-unused-vars
class Lightbox {
      static media = []
      constructor (idMedia) {
            this.idMedia = idMedia
            this.index = Lightbox.media.findIndex((elem)=> {
                  return elem.id == this.idMedia
            })
      // Montrer le lightbox
            const lightbox = document.getElementById('lightbox')
                  lightbox.style.display = "flex";
                  document.getElementById('photograph-main').style.display = "none";
                  document.querySelector('.photograph-header').style.display = "none";
                  document.getElementById('info-additional').style.display = "none";
            const displayedMedia = Lightbox.media[this.index];
                  document.getElementById('article-lightbox').appendChild(displayedMedia.DOMLightbox());
   
      // Changer le photo dans lightbox
            //next image
            const nextImage = () => {
                  this.index = (this.index + 1) % Lightbox.media.length;
                  document.getElementById('article-lightbox').innerHTML = "";
                  document.getElementById('article-lightbox').appendChild(Lightbox.media[this.index].DOMLightbox());
            }
            
            document.querySelector('.fa-chevron-right').addEventListener("keyup", (e) => {
                  if(e.key === 'Enter') {
                        nextImage();
                  }
            })
            window.addEventListener('keydown',(e) => {
                  if(e.key == 'ArrowRight') {
                        nextImage();
                  }
            })
            document.querySelector('.fa-chevron-right').addEventListener('click',() => {
                  nextImage();
            }) 

            // previous image
            const previousImage = () => {
                  this.index = (((this.index - 1) % Lightbox.media.length) + Lightbox.media.length) % Lightbox.media.length;
                  document.getElementById('article-lightbox').innerHTML = "";
                  document.getElementById('article-lightbox').appendChild(Lightbox.media[this.index].DOMLightbox());
            }

            document.querySelector('.fa-chevron-left').addEventListener("keyup", (e) => {
                  if(e.key === 'Enter') {
                        previousImage();
                  }
            })
            document.querySelector('.fa-chevron-left').addEventListener('click',() => {
                  previousImage();
             }) 
            window.addEventListener('keydown',(e) => {
                  if(e.key == 'ArrowLeft') {
                        previousImage();
                  }
            })

      // Fermer Lightbox
            const toCloseLightbox = () => {
                  lightbox.style.display = "none";
                  document.getElementById('article-lightbox').innerHTML = "";
                  document.getElementById('photograph-main').style.display = "block";
                  document.querySelector('.photograph-header').style.display = "flex";
                  document.getElementById('info-additional').style.display = "flex";
            }
              
            document.querySelector('.cross').addEventListener("keyup", (e) => {
                  if(e.key === 'Enter') {
                        toCloseLightbox();
                  }
            })
            window.addEventListener('keydown',(e) => {
                  if(e.key == 'Esc' || e.key == 'Escape') {
                        toCloseLightbox();
                  }
            })
            document.querySelector('.cross').addEventListener('click',() => {
                  toCloseLightbox();
            })    
                 
      }
      static setMedia(media) {
            Lightbox.media = media;
      }
}

