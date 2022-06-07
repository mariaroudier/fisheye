function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'p' )
        location.textContent = city + ", " + country
        const taglineP = document.createElement( 'p' )
        taglineP.textContent = tagline;
        const priceP = document.createElement( 'p' )
        priceP.textContent = price;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineP);
        article.appendChild(priceP);

        return article;
    }
    return { name, city, country, tagline, price, picture, getUserCardDOM }
}

