// eslint-disable-next-line no-unused-vars
class Video {
    constructor(data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
        this.video = `assets/images/${data.photographerId}/${data.video}`;
        document.getElementById('sum-likes').textContent = Number(document.getElementById('sum-likes').textContent)+this.likes
    }

    getPhotoCardDOM() {
        // construction DOM
        const article = document.createElement( 'article' );
            article.classList = "article-photo";
        const imageBox = document.createElement( 'div' );
            imageBox.classList = "image-box";
        const images = document.createElement( 'video' );
            images.className = "image-file";
            images.setAttribute( "src", this.video );
            images.setAttribute( "alt", this.title );
            images.setAttribute("tabindex", "0");
            images.setAttribute("playsinline", "true");
            images.setAttribute("loop", "true");
            images.setAttribute("preload", "auto");
            images.setAttribute("type", "video/mp4");
            images.setAttribute("aria-label", `${this.title}',closeup view'`);
        const titleAndLikes = document.createElement( 'div' );
            titleAndLikes.id = "title-and-likes";
        const nameOfImage = document.createElement( 'h2' );
            nameOfImage.textContent = this.title;
            nameOfImage.className = "name-of-image";
        const likesOfPhoto = document.createElement( 'div' );
            likesOfPhoto.id = "quantity-likes";
        const heartIcon = document.createElement ( 'span');
            heartIcon.className = "fa-solid fa-heart";
            heartIcon.id = "icon-heart";
            heartIcon.setAttribute("tabindex", "0");
            heartIcon.setAttribute("role","button");
            heartIcon.setAttribute("aria-label", "To like this video");
        const numberLikes = document.createElement( 'p' );
             numberLikes.textContent = this.likes;
             numberLikes.className = "number-likes";
             numberLikes.setAttribute("aria-label", "likes");

        // les enfants
        article.appendChild(imageBox)
             imageBox.appendChild(images)
        article.appendChild(titleAndLikes)
             titleAndLikes.appendChild(nameOfImage)
             titleAndLikes.appendChild(likesOfPhoto)
                likesOfPhoto.appendChild(numberLikes)
                likesOfPhoto.appendChild(heartIcon)

        // Pour lightbox id
        images.addEventListener("keyup", (e) => {
            if(e.key === 'Enter') {
                // eslint-disable-next-line no-undef
                new Lightbox(this.id)
            }
        })
        images.addEventListener('click', () => {
            // eslint-disable-next-line no-undef
            new Lightbox(this.id)
        })

        // Ajoute +1 like par click et toogle le .class
        const toLike = () => {
            numberLikes.classList.toggle('number-clicked');
    
            if(numberLikes.classList.contains('number-clicked')) {
                this.likes++
                document.getElementById('sum-likes').textContent = Number(document.getElementById('sum-likes').textContent)+1
            } else if (!numberLikes.classList.contains('number-clicked')) {
                this.likes-- 
                document.getElementById('sum-likes').textContent = Number(document.getElementById('sum-likes').textContent)-1
            }
            numberLikes.textContent = this.likes
        }

        heartIcon.addEventListener("keyup", (e) => {
            if(e.key === 'Enter') {
                toLike();
            }
        })
        heartIcon.addEventListener('click', () => {
            toLike()
        })

        return article;
    }

    DOMLightbox () {
        const boxOfLightbox = document.createElement('div')
            boxOfLightbox.id = "box-lightbox"
        const imgLightbox = document.createElement('video')
            imgLightbox.setAttribute("src",this.video)
            imgLightbox.setAttribute( "alt", this.title )
            imgLightbox.id = "img-lightbox"
            imgLightbox.setAttribute("controls","true")
            imgLightbox.setAttribute( "aria-label", this.title )
        const imgTitle = document.createElement('h2')
            imgTitle.innerHTML = this.title
            imgTitle.id = "lightbox-title"
        boxOfLightbox.appendChild(imgLightbox)
        boxOfLightbox.appendChild(imgTitle)
        return boxOfLightbox
    }
}

    
    
  

