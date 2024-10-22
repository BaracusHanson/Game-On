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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal form
function closeModal() {
  const crossClose = document.querySelector(".close");
  crossClose.addEventListener("click", () => {
    modalbg.style.display = "none";
  });
}

closeModal();

/**
 * Les champs Prénom et Nom ont un minimum de 2 caractères / n'est pas vide.
 */

// selection des inputs prenom et nom
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
  const p1 = document.createElement("p");
  const firstName = document.getElementById("first");
  firstName.addEventListener("input", (e) => {
    e.preventDefault();
    console.log(firstName.value.length < 2);

    if (firstName.value.length < 2 || firstName.value.length === 0) {
      const ok = formPrenom.children[0];
      p1.classList.add("text-label");
      p1.style.color = "red";
      p1.innerHTML = "Le champ Prénom a un minimum de 2 caractères";
      ok.appendChild(p1);
      isValid = false;
    }
    if (firstName.value.length >= 2) {
      p1.innerHTML = "";
    }
  });
  // Nom
  const p2 = document.createElement("p");
  const lastName = document.getElementById("last");
  lastName.addEventListener("input", (e) => {
    e.preventDefault();

    if (lastName.value.length < 2 || lastName.value.length === 0) {
      const ok = formPrenom.children[1];
      p2.classList.add("text-label");
      p2.style.color = "red";
      p2.innerHTML = "Le champ Nom a un minimum de 2 caractères";
      ok.appendChild(p2);
      isValid = false;
    }
    if (lastName.value.length >= 2) {
      p2.innerHTML = "";
    }
  });

  // Email
  const p3 = document.createElement("p");
  const email = document.getElementById("email");

  email.addEventListener("input", () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      const ok = formPrenom.children[2];
      p3.classList.add("text-label");
      p3.style.color = "red";
      p3.innerHTML = "L'adresse électronique est invalide";
      ok.appendChild(p3);
      isValid = false;
    }
    if (email.value.match(emailPattern)) {
      p3.innerHTML = "";
    }
  });

  // Nombre de tournois
  const quantity = document.getElementById("quantity");
  quantity.type = "text";
  const p4 = document.createElement("p");
  quantity.addEventListener("input", () => {
    if (quantity.value === "" || isNaN(quantity.value)) {
      const ok = formPrenom.children[4];
      ok.appendChild(p4);
      p4.innerHTML = "Veuillez entrer un nombre valide";
      p4.classList.add("text-label");
      p4.style.color = "red";
      isValid = false;
    }
    if (quantity.value > 0) {
      p4.innerHTML = "";
    }
  });

  // Tournoi (radio buttons)
  const location = document.querySelectorAll("checkbox-input");
  const ok = formPrenom.children[6];
  console.log(ok);
  if (!location) {
    isValid = false;
  }

  // Conditions générales
  // const terms = document.getElementById("checkbox1");
  // if (!terms.checked) {
  //   alert("Vous devez accepter les conditions d'utilisation.");
  //   isValid = false;
  // }

  return isValid; // Empêche l'envoi du formulaire si des champs sont invalides
}
validate();
