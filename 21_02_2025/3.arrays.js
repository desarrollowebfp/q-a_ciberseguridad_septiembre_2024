const animales = ["Perro", "Gato", "Loro"];
//POSICIONES        //0      //1     //2

console.log(animales[0]);
animales[0] = "Pato";
console.log(animales);

console.log(animales.length);

animales.push("Oso", "Zorro");
console.log(animales);
animales.pop();
console.log(animales);
animales.unshift("Elefante");
console.log(animales);
animales.shift();
console.log(animales);
animales.reverse();
console.log(animales);
animales.sort();
console.log(animales);
animales.splice(1, 2, "Cacatua")
console.log(animales);
