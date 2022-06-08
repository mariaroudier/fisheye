//Mettre le code JavaScript lié à la page photographer.html


let paramsString = document.location.search;

fetch("../../data/photographers.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('data', data)
  })


  
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

console.log(paramsString)