class Lightbox {
      static media = []
      constructor (idMedia) {
            
            this.idMedia = idMedia
            this.index = Lightbox.media.findIndex((elem)=> {
                  return elem.id == this.idMedia
            })
      }
      static setMedia(media) {
            Lightbox.media = media
      }

}

