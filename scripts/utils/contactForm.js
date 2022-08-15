
const contactModal = document.getElementById('contact_modal')
const form = document.getElementById('contact-form')
const inputIn = document.querySelectorAll(".text-control")
const formData = document.querySelectorAll(".formData");
const  focusableElements = 'button, input, textarea, [tabindex]:not([tabindex="-1"])';
const firstFocusableElement = contactModal.querySelectorAll(focusableElements)[0];
const focusableContent = contactModal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1];
let firstChecked = true
let lastChecked = true
let emailChecked = true



document.querySelector('.contact_button').addEventListener('click',() => {
    document.getElementById('contact_modal').style.display = "flex";
    firstFocusableElement.focus();
})

// Verification de dennées dans les champs
form.addEventListener('submit',function(ev) {
    // on arrete l'envoy de forme par default
    ev.preventDefault() 
    inputIn.forEach(elem => {
        if (elem.id == 'first') {                           
            if (elem.value.length < 2) {
            firstChecked = false
            formData[0].dataset.errorVisible = "true"
            formData[0].setAttribute("aria-invalid", "true")
            } else {
            firstChecked = true
            formData[0].dataset.errorVisible = "false"
            formData[0].setAttribute("aria-invalid", "false") 
            }
        }
        else if (elem.id == 'last') {                     
            if (elem.value.length < 2) {
            lastChecked = false
            formData[1].dataset.errorVisible = "true"
            formData[1].setAttribute("aria-invalid", "true") 
            } else {                                        
                lastChecked = true
                formData[1].dataset.errorVisible = "false"
                formData[1].setAttribute("aria-invalid", "false") 
            }

        }
        if (elem.id == 'email'){
            let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
            if (elem.value.match(validRegex)) {
            emailChecked = true
            formData[2].dataset.errorVisible = "false"
            formData[2].setAttribute("aria-invalid", "true") 
            } else {
            emailChecked = false
            formData[2].dataset.errorVisible = "true"
            formData[2].setAttribute("aria-invalid", "false") 
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
        contactModal.style.display = 'none';
        // Pour afficher les données en console
        inputIn.forEach(elem => {
            console.log(elem.value)
        })
    }
    
})

// Fermer le modale
window.addEventListener('keydown',(e) => {
    if(e.key == 'Esc' || e.key == 'Escape') {
        document.getElementById('contact_modal').style.display = "none";
    }
})
document.getElementById('cross-modale').addEventListener('click', () => {
    document.getElementById('contact_modal').style.display = "none"
})
document.getElementById('cross-modale').addEventListener("keyup", (e) => {
    if(e.key === 'Enter') {
        document.getElementById('contact_modal').style.display = "none";
    }
})

document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab';
  
    if (!isTabPressed) {
        return;
    }
  
    else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
      }
    }
});
  
firstFocusableElement.focus();