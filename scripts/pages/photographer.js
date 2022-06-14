//Mettre le code JavaScript lié à la page photographer.html

const paramsString = document.location.search.substring(1);
console.log(paramsString)

async function getPhotographers() {
      const response = await fetch("../../data/photographers.json")
      const data = await response.json();
      //return data;
      return data
}

function displayData(photographers, media) {
      
      photographers.forEach((photographer) => {
            const picture = `assets/photographers/${photographer.portrait}`;
            if (photographer.id == paramsString) {
                  document.getElementById('photographer-name').innerHTML = photographer.name
                  document.getElementById('photographer-location').innerHTML = photographer.city + ', ' + photographer.country
                  document.getElementById('photographer-tagline').innerHTML = photographer.tagline
                  document.getElementById('photographer-photo').setAttribute("src", picture);
                  
            }
      
      });


      media.forEach((content) => {
            const photosSection = document.getElementById('photos-section')

            if (content.photographerId == paramsString) {
                  const photoModel = new MediaFactory(content);
                  const photoCardDOM = photoModel.getPhotoCardDOM();
                  photosSection.appendChild(photoCardDOM);
                  return content
            }
            
      });
      
}
  

async function init() {
      // Récupère les datas des photographes
      const { photographers, media} = await getPhotographers();
      displayData(photographers, media);
}

init();




/*async function dataPhotographe() {
      await fetch("../../data/photographers.json")
      .then(function (response) {
      return response.json()
      })
      .then(function (data) {
      console.log('data', data)
      })
}

function displayData(photographers) {
      const photographersSection = document.querySelector(".photograph-header");
  
      photographers.forEach((photographer) => {
          const photographerModel = photographerFactory(photographer);
          const userCardDOM = photographerModel.getUserCardDOM();
          photographersSection.appendChild(userCardDOM);
      });
      
  }

async function init() {
      const { photographers } = await dataPhotographe()
}
init()



/*async function getPhotographers() {
      const response = await fetch("../../index.html")
      const data = await response
      return data
      
  }

function displayData(photographers) {
const photographersSection = document.querySelector(".photographer_section");

photographers.forEach((photographer) => {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
});

}

async function init() {
      // Récupère les datas des photographes
      const { photographers } = await getPhotographers();
      displayData(photographers);
     
  }
      
  init();


  //console.log(taglineP)




// забираем данные из файла - обращаемся к нему
/*async function getPhotographers() {
      const response = await fetch("../../data/photographers.json")
      const data = await response.json()
      return data
}

function displayData(photographers) {
      const photographersSection = document.querySelector(".photographer_section");

      photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
      });

}

async function init() {
// Récupère les datas des photographes
const { photographers } = await getPhotographers();
displayData(photographers);

}



// обратиться к каждому элементу на соответствие номера айди матч



init();*/








/*function photographerFactory(data) {
      const { name, city, country, tagline, price, portrait, id } = data;
      const picture = `../../assets/photographers/${portrait}`;     
      
      function getUserCardDOM() {
            const article = document.createElement( 'article' );

            const h2 = document.createElement('h2');
            h2.textContent = name;
            const location = document.createElement( 'p' )
            location.textContent = city + ", " + country
            const taglineP = document.createElement( 'p' )
            taglineP.textContent = tagline;
            const boxImagePhotographe = document.createElement( 'div' )
            const img = document.createElement( 'img' );
            img.setAttribute( "src", picture )
            img.setAttribute( "alt", name )
            
            const likesAndPrice = document.createElement( 'div' )
            const likesQuantity = document.createElement( 'p' )
            const priceP = document.createElement( 'p' )
            priceP.textContent = price + " /jour ";

            // добавление элементов-детей

            article.appendChild(h2);
            article.appendChild(location);
            article.appendChild(taglineP);
            article.appendChild(boxImagePhotographe)
            boxImagePhotographe.appendChild(img);

            article.appendChild(likesAndPrice);
            likesAndPrice.appendChild(likesQuantity);
            likesAndPrice.appendChild(priceP)

            return article;
      }
      return { name, city, country, tagline, price, picture, id, getUserCardDOM }
}
*/
// добавление элементов на страницу