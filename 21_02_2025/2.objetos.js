const mando = {
  marca: "Xbox",
  price: 17,
  color: "negro",
  cargado: true,
};

console.log(mando.marca);
console.log(mando["marca"])

mando.bateria = "500vw"
console.log(mando)

mando.marca = "HP";


delete mando.marca
console.log(mando)