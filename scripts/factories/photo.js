

class Photo {
    constructor(data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
        this.image = `assets/images/${data.photographerId}/${data.image}`;
    }

    getPhotoCardDOM() {
        //const article = document.getElementById( 'article' );
        const article = document.createElement( 'article' );
        const imageBox = document.createElement( 'div' );
        const images = document.createElement( 'img' );
            images.setAttribute( "src", this.image )
            images.setAttribute( "alt", this.title )
        const titleAndLikes = document.createElement( 'div' );
        const nameOfImage = document.createElement( 'p' );
            nameOfImage.textContent = this.title;
        const quantityLikes = document.createElement( 'div' );
        const numberLikes = document.createElement( 'p' );
             numberLikes.textContent = this.likes

        article.appendChild(imageBox)
            imageBox.appendChild(images)
        article.appendChild(titleAndLikes)
            titleAndLikes.appendChild(nameOfImage)
            titleAndLikes.appendChild(quantityLikes)
                quantityLikes.appendChild(numberLikes)


        //const iconLikes = document.createElement( 'p' );


        /*const images = document.querySelector( '.image' );
            images.setAttribute( "src", this.image )
            images.setAttribute( "alt", this.title )
        const nameOfImage = document.querySelector( '.name-image' );
            nameOfImage.textContent = this.title;
    
        const quantityOfLikes = document.querySelector( '.number-likes' );
            quantityOfLikes.textContent = this.likes
        */

        return article;
    }
}

    
    
  
