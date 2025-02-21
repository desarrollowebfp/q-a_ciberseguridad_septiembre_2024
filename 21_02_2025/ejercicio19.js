/* **Mixed For...of e includes**: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función *.includes()* para comprobar la palabra.

Puedes usar este array: */

const toys = [
  {id: 5, name: 'Transformers'}, //0
  {id: 11, name: 'LEGO'},  //1
  {id: 23, name: 'Hot Wheels'},  //2
  {id: 40, name: 'Rascador de gato'}, //3
  {id: 40, name: 'FurReal Friends gato interactivo'}, //4
  {id: 60, name: 'Nerf Blaster'}, //5
  {id: 71, name: 'Sylvanian Families - Familia gato'} //6
];

for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.includes('gato')) {
    toys.splice(i, 1);
    i--; // Reducimos el índice para verificar correctamente el siguiente elemento
  }
  console.log(i);
}
console.log(toys);