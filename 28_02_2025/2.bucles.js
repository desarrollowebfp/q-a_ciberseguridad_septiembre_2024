for (let i = 0; i < 5; i++) {
  console.log("Hola", i);
}

const alimentos = [
  "manzana",
  "banana",
  "pera",
  "naranja",
  "uva",
  "sandía",
  "melón",
  "kiwi",
  "piña",
  "fresa",
  "mango",
  "papaya",
  "cereza",
  "ciruela",
  "durazno",
  "granada",
  "higo",
  "mantequilla",
  "aceite de oliva",
  "miel",
];

for (let i = 0; i < alimentos.length; i++) {
  const alimento = alimentos[i];
  console.log(alimento);
}

for (const alimento of alimentos) {
  console.log(alimento);
}

const manzana = {
  nombre: "Manzana",
  color: "Rojo",
  pesoPromedioGramos: 180,
  tipo: "Fruta",
  esComestible: true,
  variedades: ["Fuji", "Gala", "Golden", "Granny Smith", "Red Delicious"],
  origen: "Asia Central",
};

for (const propiedad in manzana) {
  console.log(manzana[propiedad]);
}
