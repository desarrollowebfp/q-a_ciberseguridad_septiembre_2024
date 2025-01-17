const cargador = {
  nombre: "Cargador de corriente para MacBook",
  price: 45,
  voltaje: "100-200v",
  marca: "Apple",
};

console.log(cargador.marca);
console.log(cargador["marca"]);

cargador.price = 75;

console.log(cargador);

cargador.color = "blanco";

console.log(cargador);

delete cargador.voltaje;

console.log(cargador);
