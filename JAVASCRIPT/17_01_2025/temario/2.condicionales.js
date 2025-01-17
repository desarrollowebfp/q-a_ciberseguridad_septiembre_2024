const age = 36;

if (age >= 18 && age <= 34) {
  console.log("Eres mayor de edad");
} else if (age >= 35 && age <= 69) {
  console.log("Eres adulto");
} else if (age >= 70) {
  console.log("Eres mayor");
} else {
  console.log("Eres pequeño");
}

const bajarLaBasura = true;
const estudiar = false;
const portarseMal = false;

if (bajarLaBasura && !portarseMal) {
  console.log("Puedes bajar a jugar");
} else {
  console.log("No puedes bajar a jugar");
}

const pais = "Japón";

if (pais === "Japón") {
  console.log("Idioma japonés");
} else if (pais === "Francia") {
  console.log("Idioma francés");
} else if (pais === "España") {
  console.log("Idioma español");
} else {
  console.log("No conozco ese país");
}

//SWITCH

switch (pais) {
  case "Japón":
    console.log("Idioma japonés");
    break;
  case "Francia":
    console.log("Idioma francés");
    break;
  case "España":
    console.log("Idioma español");
    break;
  default:
    console.log("No conozco el país");
    break;
}

//TERNARIO
if (age >= 18) {
  console.log("Puedes entrar en la discoteca");
} else {
  console.log("No puedes entrar a la discoteca");
}
