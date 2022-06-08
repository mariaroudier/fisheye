

function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait, id } = data;
    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
        //заголовок + фото
        const imageAndName = document.createElement( 'a' );
        imageAndName.setAttribute( "aria-labelledby", name) ;
        imageAndName.setAttribute("href","photographer.html" + "?" + id );
        const img = document.createElement( 'img' );
        img.setAttribute( "src", picture )
        img.setAttribute( "alt", name )
        const h2 = document.createElement('h2');
        h2.textContent = name;
        
        // остальное
        const location = document.createElement( 'p' )
        location.textContent = city + ", " + country
        const taglineP = document.createElement( 'p' )
        taglineP.textContent = tagline;
        const priceP = document.createElement( 'p' )
        priceP.textContent = price + " /jour ";

        // добавление элементов-детей
        article.appendChild(imageAndName);
        imageAndName.appendChild(img);
        imageAndName.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineP);
        article.appendChild(priceP);
     

        return article;
    }
    return { name, city, country, tagline, price, picture, getUserCardDOM }
}

