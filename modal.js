function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const footer = document.querySelector('footer')
const logo = document.querySelector('#myTopnav')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.style.backgroundColor = "white";
  hero.style.display = "none";
  navbar.style.display = "none";
  footer.style.display = "none";
  logo.style.display = "none";
  
}

/**
 *  CORRECTIONS VISUELLES CODE
 */
// navbar desktop correction
const navbar = document.querySelector(".main-navbar");
const hero = document.querySelector(".hero-section");
const accueil = navbar.children[0];
const Détails = navbar.children[1];

accueil.style.display = "none";
Détails.style.backgroundColor = "#FE142F";
Détails.style.borderRadius = "8px";

// formulaire display manager
const close = document.querySelector(".close");
const formbg = document.querySelector(".bground");
close.addEventListener("click", () => {
  formbg.style.display = "none";
  if (formbg.style.display==="none") {
    hero.style.display = "";
    navbar.style.display = "inline";
    footer.style.display = "inline";
    logo.style.display = "inline";
    
  }
  console.log("ok");
});

const nom = document.getElementById("last");
nom.setAttribute("minlength", "2");

// function validate() {
//   let valid = true;

//   // Récupérer les champs du formulaire
//   // const firstName = document.getElementById("first");
//   const lastName = document.getElementById("last");
//   lastName.setAttribute('minlenght',"2")
//   const container = document.getElementsByClassName("formData");
//   console.log(container);
//   // Effacer les messages d'erreur
//   const p = document.createElement("p");
//   p.innerText = "message erreur test";
//   p.style.color = "red";

//   const nom = container[1];
//   nom.appendChild(p);

//   // p.innerText = "message erreur text";
//   // p.style.color = "red";
//   // form.appendChild(p);
//   // console.log(form);

//   // document.getElementById("first-error").textContent = "";
//   // document.getElementById("last-error").textContent = "";

//   // Valider le prénom (doit avoir au moins 2 caractères)
//   // if (lastName.value.length < 2) {
//   //   p.innerText = "Veuillez entrer 2 caractères ou plus";
//   //   valid = false;
//   // }

//   // Valider le nom (doit être non vide)
//   if (lastName.value.trim() === "") {
//     p.innerText = "le champ Nom ne peut pas etre vide !";
//     valid = false;
//   }

//   // Vous pouvez ajouter d'autres validations ici pour les autres champs.

//   // Retourner 'false' si le formulaire n'est pas valide (cela empêche la soumission)
//   return valid;
// }

const form = document.getElementById("Myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // validate();
  // console.log("soumission");
});

function validate() {
  const inputs = document.querySelectorAll(".formData");
  inputs.forEach((value) => {
    // console.log(value.firstElementChild.innerText);
  });
  // console.log(inputs);
}
validate();
