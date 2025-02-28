//OPERADOR AND &&
//OPERADOR OR ||
//OPERADOR NOT !
// > >= < <=
// ==    ===   !=

const age = 10;

//IF ELSE ELSE IF

/* Prebenjamines: Entre 5 y 7 años. Benjamines: Entre 8 y 9 años. Alevines: Entre 10 y 11 años. Infantiles: Entre 12 y 13 años. Cadetes: Entre 14 y 15 años. Juveniles: Entre 16 y 18 años. */

if (age >= 5 && age <= 7) {
  console.log("Prebenjamines");
} else if (age >= 8 && age <= 9) {
  console.log("Benjamines");
} else if (age >= 10 && age <= 11) {
  console.log("Alevines");
} else if (age >= 12 && age <= 13) {
  console.log("Infantiles");
} else {
  console.log("No tienes la edad para formar parte de la competición");
}

//SWITCH
//DETECTOR DE BOTONES DE CALCULADORA
const boton = "+";

switch (boton) {
  case "+":
    console.log("SUMAR");
    break;
  case "-":
    console.log("RESTAR");
    break;
  case "/":
    console.log("DIVIDIR");
    break;
  case "*":
    console.log("MULTIPLICAR");
    break;
  default:
    console.log("NO SE QUE BOTON ES");
    break;
}

//TERNARIOS
const x = 10;

x === 10 ? console.log("Es diez") : console.log("No es diez");

if (x === 10) {
  console.log("Es diez");
} else {
  console.log("No es diez");
}

//ESTRICTAMENTE IGUAL
console.log(1 == "1");
console.log(1 === "1");

console.log(0 == false);
console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);
