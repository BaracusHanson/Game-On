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
const navigation = document.querySelector(".topnav");
const footer = document.querySelector("footer");
const hero = document.querySelector(".hero-section");

/**
 * modification de la barre de navigation
 */
const accueilButton = document.querySelector(".main-navbar");
const heroHeadline = document.querySelector(".hero-headline");
const main = document.querySelector('main')
const heroText = document.querySelector(".hero-text");
const heroSection = document.querySelector(".hero-section");
const heroContent = document.querySelector(".hero-content");
const content = document.querySelector(".content");
accueilButton.children[0].style.display = "none";
accueilButton.children[1].style.backgroundColor = "#FE142F";
accueilButton.children[1].style.borderRadius = "8px";
const icon = document.querySelector('.icon')
const logoMobile = document.querySelector('.header-logo').children[0]

// media query pour un écran avec une largeur maximale de 768px
const mediaQuery = window.matchMedia("(max-width: 768px)");

// Fonction qui sera appelée quand la media query correspond
function handleTabletChange(e) {
  if (e.matches) {
    console.log("Écran de tablette ou plus petit");
    heroHeadline.style.fontSize = "2.3rem";
    heroHeadline.style.fontWeight = "900";
    heroText.style.fontSize = "0.8rem";
    heroText.style.marginTop = "17px";
    heroText.style.Height = "100vh";
    heroContent.style.padding = "20px 0px";
    heroContent.style.minWidth = "100%";
    navigation.style.display = "flex";
    content.style.margin = "0";
    main.style.margin= "0"
    main.style.padding= "0"
    icon.style.margin= "0"
    navigation.style.justifyContent = "space-between"
    navigation.style.alignItems = "center"
    icon.style.color = "#FF001B"
    logoMobile.style.width = "131px"
   
    
    

  } else {
    console.log("Écran plus large que 768px");
  }
}

handleTabletChange(mediaQuery);
mediaQuery.addEventListener("change", handleTabletChange);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.style.position = "relative";
  heroSection.style.display = "none"
  heroSection.style.width = "100vw"
  // modalbg.style.backgroundColor = "white";
  // navigation.style.display = "none";
  // footer.style.display = "none";
  // hero.style.display = "none";
}
//close modal form
function closeModal() {
  const crossClose = document.querySelector(".close");
  crossClose.addEventListener("click", () => {
    modalbg.style.display = "none";
    navigation.style.display = "flex";
    footer.style.display = "block";
    hero.style.display = "";
    heroSection.style.width = "100%"
  });
}

closeModal();



// selection des inputs 
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const birthdate = document.querySelector("#birthdate");
const formPrenom = document.querySelector("form").children[0];
const formNom = document.querySelector("form").children[1];

function addAttributs(first, last, birthdate) {
  last.setAttribute("minlength", "2");
  first.setAttribute("minlength", "2");
  last.setAttribute("required", true);
  first.setAttribute("required", true);
  birthdate.setAttribute("required", true);
}
addAttributs(prenom, nom, birthdate);

function validate() {
  let isValid = true;
  const formPrenom = document.querySelector("form");

  // Prénom
  let p1 = document.getElementById("error-first");
  if (!p1) {
    p1 = document.createElement("p");
    p1.id = "error-first";
    formPrenom.children[0].appendChild(p1);
  }
  const firstName = document.getElementById("first");

  if (firstName.value.length < 2) {
    p1.classList.add("text-label");
    p1.style.color = "red";
    p1.innerHTML = "Le champ Prénom a un minimum de 2 caractères";
    isValid = false;
  } else {
    p1.innerHTML = ""; // Effacer les messages d'erreur précédents
  }

  // Nom
  let p2 = document.getElementById("error-last");
  if (!p2) {
    p2 = document.createElement("p");
    p2.id = "error-last";
    formPrenom.children[1].appendChild(p2);
  }
  const lastName = document.getElementById("last");

  if (lastName.value.length < 2) {
    p2.classList.add("text-label");
    p2.style.color = "red";
    p2.innerHTML = "Le champ Nom a un minimum de 2 caractères";
    isValid = false;
  } else {
    p2.innerHTML = "";
  }

  // Email
  let p3 = document.getElementById("error-email");
  if (!p3) {
    p3 = document.createElement("p");
    p3.id = "error-email";
    formPrenom.children[2].appendChild(p3);
  }
  const email = document.getElementById("email");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.value.match(emailPattern)) {
    p3.classList.add("text-label");
    p3.style.color = "red";
    p3.innerHTML = "L'adresse électronique est invalide";
    isValid = false;
  } else {
    p3.innerHTML = "";
  }

  // Nombre de tournois
  let p4 = document.getElementById("error-quantity");
  if (!p4) {
    p4 = document.createElement("p");
    p4.id = "error-quantity";
    formPrenom.children[4].appendChild(p4);
  }
  const quantity = document.getElementById("quantity");

  if (isNaN(quantity.value) || quantity.value === "") {
    p4.classList.add("text-label");
    p4.style.color = "red";
    p4.innerHTML = "Veuillez entrer un nombre valide";
    isValid = false;
  } else {
    p4.innerHTML = "";
  }

  // Tournoi (radio buttons)
  let p5 = document.getElementById("error-location");
  if (!p5) {
    p5 = document.createElement("p");
    p5.id = "error-location";
    formPrenom.children[6].appendChild(p5);
  }
  const location = document.querySelectorAll(".checkbox-input");
  // Accéder aux boutons radio directement par leur id
  const location1 = document.getElementById("location1");
  const location2 = document.getElementById("location2");
  const location3 = document.getElementById("location3");
  const location4 = document.getElementById("location4");
  const location5 = document.getElementById("location5");
  const location6 = document.getElementById("location6");

  if (
    !location1.checked &&
    !location2.checked &&
    !location3.checked &&
    !location4.checked &&
    !location5.checked &&
    !location6.checked
  ) {
    p5.classList.add("text-label");
    p5.style.color = "red";
    p5.innerHTML = "Un tournoi doit être sélectionné !";
    isValid = false;
  } else {
    p5.innerHTML = "";
  }

  // Conditions générales
  let p6 = document.getElementById("error-terms");
  if (!p6) {
    p6 = document.createElement("p");
    p6.id = "error-terms";
    formPrenom.children[7].appendChild(p6);
  }
  const terms = document.getElementById("checkbox1");

  if (!terms.checked) {
    p6.classList.add("text-label");
    p6.style.color = "red";
    p6.style.paddingBottom = "16px";
    p6.innerHTML = "Vous devez accepter les conditions d'utilisation.";
    isValid = false;
  } else {
    p6.innerHTML = "";
  }

  return isValid; // Empêche l'envoi du formulaire si des champs sont invalides
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêcher l'envoi du formulaire pour vérifier les champs
  const formIsValid = validate();

  if (formIsValid) {
    // Soumettre le formulaire si toutes les validations sont réussies
    form.submit();
  }
});


