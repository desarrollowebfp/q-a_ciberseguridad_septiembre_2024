//SCOPE GLOBAL
const x = 10;
let y = 10;
y = 5;

//Scope
if (true) {
  //SCOPE LOCAL
  const z = 2;
}
console.log(y);

//GLOBAL - GLOBAL ✅
//GLOBAL - LOCAL ✅
//LOCAL - LOCAL ✅
//LOCAL - GLOBAL ❌

const string = "Esto es un string";
const string2 = 'Esto es un string "también"';
const string3 = `Esto también es un string`;
const numeros = 12423523.5;
const arrays = [1, 2, 3, 4, "Primero", "Segundo", "Tercero"];
const objeto = {
  titulo: "Este es el titulo",
  precio: 500,
  color: "rojo",
  propiedades: ["Primero", "Segundo", "Tercero"]
}

const booleanos = false;
const nulo = null;
const noDefinido = undefined;