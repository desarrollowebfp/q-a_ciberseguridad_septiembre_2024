//LEER
const title = document.querySelector("#title");

//EDITAR
title.textContent = "Nuevo titulo";

//CREAR
const h2 = document.createElement("h2");
h2.id = "subtitle";
h2.className = "rojo principal";
h2.textContent = "Subtitulo";

document.body.appendChild(h2)

//BORRAR
h2.remove();

//CLASES
title.classList.add("red");
title.classList.add("primary")
title.classList.remove("primary")
title.classList.toggle("red");
title.classList.toggle("red");
title.classList.toggle("red");
title.classList.toggle("red");

title.style.fontSize = "40px";
title.style.color = "blue"


//EVENTOS
let size = 20;

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  size *= 2;
  title.style.fontSize = size + "px";
})