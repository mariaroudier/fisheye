
const contactModal = document.getElementById('contact_modal')
const form = document.getElementById('contact-form')
const inputIn = document.querySelectorAll(".text-control")
const formData = document.querySelectorAll(".formData");
let firstChecked = true
let lastChecked = true
let emailChecked = true

// eslint-disable-next-line no-unused-vars
function displayModal() {
      contactModal.style.display = "block";
} 
// eslint-disable-next-line no-unused-vars
function closeModal() {
      contactModal.style.display = "none";
}

// Verification de dennées dans les champs
form.addEventListener('submit',function(ev) {
      
    // on arrete l'envoy de forme par default
    ev.preventDefault() 
    inputIn.forEach(elem => {
        if (elem.id == 'first') {                           
            if (elem.value.length < 2) {
            firstChecked = false
            formData[0].dataset.errorVisible = "true"
            } else {
            firstChecked = true
            formData[0].dataset.errorVisible = "false"
            }
        }
        else if (elem.id == 'last') {                     
            if (elem.value.length < 2) {
            lastChecked = false
            formData[1].dataset.errorVisible = "true"
            } else {                                        
                lastChecked = true
                formData[1].dataset.errorVisible = "false"
            }

        }
        if (elem.id == 'email'){
            let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
            if (elem.value.match(validRegex)) {
            emailChecked = true
            formData[2].dataset.errorVisible = "false"
            } else {
            emailChecked = false
            formData[2].dataset.errorVisible = "true"
            }
        }

        //disable error warning
        formData.forEach(elem => elem.addEventListener("click", () => {
            elem.dataset.errorVisible = "false";
        }))
        
        inputIn.forEach(elem => elem.addEventListener("click", () => {
            elem.style.background = '#fff'
        }))

    })

    if (firstChecked == true &&  lastChecked == true &&  emailChecked == true ) {
        inputIn.forEach(elem => {
            console.log(elem.value)
        })
        contactModal.style.display = 'none';
       
    }

})