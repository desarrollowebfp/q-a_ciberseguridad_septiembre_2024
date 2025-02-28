function diHola() {
  console.log("Hola");
}

diHola();

//

function diHolaConNombre(nombre) {
  console.log("Hola " + nombre);
}

diHolaConNombre("Pepe");
diHolaConNombre("Luis");

//

function sumarDosNumeros(numeroA, numeroB) {
  const total = numeroA + numeroB;
  console.log("El total es: " + total);
}

sumarDosNumeros(5, 2);

//

const usuarioAntonio = {
  nombre: "Antonio",
  apellidos: "Rosales",
  nacimiento: 1990,
  ciudad: "Málaga",
};

function calcularEdad(usuario) {
  const actual = new Date().getFullYear();
  const edad = actual - usuario.nacimiento;
  console.log(
    usuario.nombre +
      " " +
      usuario.apellidos +
      " vive en " +
      usuario.ciudad +
      " y tiene " +
      edad +
      " años."
  );
}

calcularEdad(usuarioAntonio);
calcularEdad({
  nombre: "Aragorn",
  apellidos: "II",
  nacimiento: 2931,
  ciudad: "Rivendel",
});
