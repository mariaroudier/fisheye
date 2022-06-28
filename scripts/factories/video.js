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
            article.id = "article-photo"
        const imageBox = document.createElement( 'a' );
            imageBox.id = "image-box";
            imageBox.setAttribute( "href", "###" )
        const images = document.createElement( 'video' );
            images.setAttribute( "src", this.video )
            images.setAttribute( "alt", this.title )
        const titleAndLikes = document.createElement( 'div' );
            titleAndLikes.id = "title-and-likes"
        const nameOfImage = document.createElement( 'p' );
            nameOfImage.textContent = this.title;
            nameOfImage.id = "name-of-image"
        const likesOfPhoto = document.createElement( 'div' );
            likesOfPhoto.id = "quantity-likes"
        const clickIcon = document.createElement ( 'a' )
            clickIcon.id = "click-icon"
            clickIcon.setAttribute("href", "###")
        const heartIcon = document.createElement ( 'i')
            heartIcon.className = "fa-solid fa-heart"
            heartIcon.id = "icon-heart"
        const numberLikes = document.createElement( 'p' );
             numberLikes.textContent = this.likes
             numberLikes.id = "number-likes"

        // les enfants
        article.appendChild(imageBox)
             imageBox.appendChild(images)
        article.appendChild(titleAndLikes)
             titleAndLikes.appendChild(nameOfImage)
             titleAndLikes.appendChild(likesOfPhoto)
                likesOfPhoto.appendChild(numberLikes)
                likesOfPhoto.appendChild(clickIcon)
                    clickIcon.appendChild(heartIcon)

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

        // Lancer lightbox par click
        imageBox.addEventListener('click', () => {
            document.getElementById('lightbox').style.display = "block"
        })


        return article;
    }
}

    
    
  

