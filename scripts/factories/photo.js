

// eslint-disable-next-line no-unused-vars
class Photo {
    constructor(data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
        this.image = `assets/images/${data.photographerId}/${data.image}`;
        document.getElementById('sum-likes').textContent = Number(document.getElementById('sum-likes').textContent)+this.likes

    }

    getPhotoCardDOM() {
        // DOM
        const article = document.createElement( 'article' );
            article.id = "article-photo"
        const imageBox = document.createElement( 'div' );
            imageBox.id = "image-box";
            imageBox.setAttribute("aria-label", `${this.title}',closeup view'`)
            imageBox.setAttribute("tabindex", "0")
        const images = document.createElement( 'img' );
            images.setAttribute( "src", this.image )
            images.setAttribute( "alt", this.title )
            images.className = "image-file"
        const titleAndLikes = document.createElement( 'div' );
            titleAndLikes.id = "title-and-likes"
        const nameOfImage = document.createElement( 'h2' );
            nameOfImage.textContent = this.title;
            nameOfImage.className = "name-of-image"
        const likesOfPhoto = document.createElement( 'div' );
            likesOfPhoto.id = "quantity-likes"
        const heartIcon = document.createElement ( 'i' )
            heartIcon.className = "fa-solid fa-heart"
            heartIcon.id = "icon-heart"
        const numberLikes = document.createElement( 'p' );
             numberLikes.textContent = this.likes
             numberLikes.className = "number-likes"
             numberLikes.setAttribute("aria-label", "likes")

        // les enfants
        article.appendChild(imageBox)
            imageBox.appendChild(images)
        article.appendChild(titleAndLikes)
            titleAndLikes.appendChild(nameOfImage)
            titleAndLikes.appendChild(likesOfPhoto)
                likesOfPhoto.appendChild(numberLikes)
                likesOfPhoto.appendChild(heartIcon)

        // Pour lightbox id
        images.addEventListener('click', () => {
            const idModel = new Lightbox(this.id)
            console.log(this.id)
        })

        // ajoute +1 like par click et toogle le .class
        heartIcon.addEventListener('click', () => {
            numberLikes.classList.toggle('number-clicked');
    
            if(numberLikes.classList.contains('number-clicked')) {
                this.likes++
                document.getElementById('sum-likes').textContent = Number(document.getElementById('sum-likes').textContent)+1
            } else if (!numberLikes.classList.contains('number-clicked')) {
                this.likes-- 
                document.getElementById('sum-likes').textContent = Number(document.getElementById('sum-likes').textContent)-1
            }
            numberLikes.textContent = this.likes
        })
        return article;
    }
    
    DOMLightbox () {
        const boxOfLightbox = document.createElement('div')
            boxOfLightbox.id = "box-lightbox"
        const imgLightbox = document.createElement('img')
            imgLightbox.setAttribute("src",this.image)
            imgLightbox.setAttribute( "alt", this.title )
            imgLightbox.id = "img-lightbox"
        const imgTitle = document.createElement('span')
            imgTitle.innerHTML = this.title
            imgTitle.id = "lightbox-title"
        boxOfLightbox.appendChild(imgLightbox)
        boxOfLightbox.appendChild(imgTitle)
        return boxOfLightbox
    }
}

    
    
  

