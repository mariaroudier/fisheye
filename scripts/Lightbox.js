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
            
            const displayedMedia = Lightbox.media[this.index]
            document.getElementById('article-lightbox').appendChild(displayedMedia.DOMLightbox())
            
            // Fermer Lightbox
            document.querySelector('.cross').addEventListener('click',() => {
                  lightbox.style.display = "none";
                  document.getElementById('article-lightbox').innerHTML = ""
            }) // avec Esc
            window.addEventListener('keydown',(e) => {
                  if(e.key == 'Esc' || e.key == 'Escape') {
                        lightbox.style.display = "none";
                        document.getElementById('article-lightbox').innerHTML = ""
                  }
            })


      }
     

      static setMedia(media) {
            Lightbox.media = media
      }
      

}

