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
                  document.getElementById('photos-section').style.display = "none";
            const displayedMedia = Lightbox.media[this.index];
                  document.getElementById('article-lightbox').appendChild(displayedMedia.DOMLightbox());
   
      // Changer le photo dans lightbox
            //next

                  // par Enter
            document.querySelector('.fa-chevron-right').addEventListener("keyup", (e) => {
                  if(e.key === 'Enter') {
                        this.index = (this.index + 1) % Lightbox.media.length;
                        document.getElementById('article-lightbox').innerHTML = "";
                        document.getElementById('article-lightbox').appendChild(Lightbox.media[this.index].DOMLightbox());
                  }
            })
                  // par arrow
            window.addEventListener('keydown',(e) => {
                  if(e.key == 'ArrowRight') {
                        this.index = (this.index + 1) % Lightbox.media.length;
                        document.getElementById('article-lightbox').innerHTML = "";
                        document.getElementById('article-lightbox').appendChild(Lightbox.media[this.index].DOMLightbox());
                  }
            })
            document.querySelector('.fa-chevron-right').addEventListener('click',() => {
                 this.index = (this.index + 1) % Lightbox.media.length;
                 document.getElementById('article-lightbox').innerHTML = "";
                 document.getElementById('article-lightbox').appendChild(Lightbox.media[this.index].DOMLightbox());
            }) 

            // previous
                  // par Enter
            document.querySelector('.fa-chevron-left').addEventListener("keyup", (e) => {
                  if(e.key === 'Enter') {
                        this.index = (((this.index - 1) % Lightbox.media.length) + Lightbox.media.length) % Lightbox.media.length;
                        document.getElementById('article-lightbox').innerHTML = "";
                        document.getElementById('article-lightbox').appendChild(Lightbox.media[this.index].DOMLightbox());
                  }
            })
            document.querySelector('.fa-chevron-left').addEventListener('click',() => {
                  this.index = (((this.index - 1) % Lightbox.media.length) + Lightbox.media.length) % Lightbox.media.length;
                  document.getElementById('article-lightbox').innerHTML = "";
                  document.getElementById('article-lightbox').appendChild(Lightbox.media[this.index].DOMLightbox());
             }) 
             
                  // par arrow
            window.addEventListener('keydown',(e) => {
                  if(e.key == 'ArrowLeft') {
                        this.index = (((this.index - 1) % Lightbox.media.length) + Lightbox.media.length) % Lightbox.media.length;
                        document.getElementById('article-lightbox').innerHTML = "";
                        document.getElementById('article-lightbox').appendChild(Lightbox.media[this.index].DOMLightbox())
                  }
            })

      // Fermer Lightbox
                  // par Enter
            document.querySelector('.cross').addEventListener("keyup", (e) => {
                  if(e.key === 'Enter') {
                        lightbox.style.display = "none";
                        document.getElementById('article-lightbox').innerHTML = "";
                        document.getElementById('photos-section').style.display = "flex";
                  }
            })
                  // par Esc
            window.addEventListener('keydown',(e) => {
                  if(e.key == 'Esc' || e.key == 'Escape') {
                        lightbox.style.display = "none";
                        document.getElementById('article-lightbox').innerHTML = "";
                        document.getElementById('photos-section').style.display = "flex";
                  }
            })
            document.querySelector('.cross').addEventListener('click',() => {
                  lightbox.style.display = "none";
                  document.getElementById('article-lightbox').innerHTML = "";
                  document.getElementById('photos-section').style.display = "flex";
            })    
                 
      }
      static setMedia(media) {
            Lightbox.media = media;
      }
}

