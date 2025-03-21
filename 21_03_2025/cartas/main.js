const photoForm = document.querySelector("#photoForm");
const main = document.querySelector("main");

photoForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const URL = document.querySelector("#photoInput").value;

  if (URL) {
    //Creamos el elemento principal
    const container = document.createElement("div");
    //Creamos la imagen y le damos la URL y un texto alternativo
    const img = document.createElement("img");
    img.src = URL;
    img.alt = "Hay que poner uno de verdad de alguna forma";
    //Creamos el contenedor de los dos botones
    const btnContainer = document.createElement("div");
    //Creamos el botón de borrar, le damos un texto y una funcionalidad, que será la de borrar el elemento principal container
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Borrar";
    deleteBtn.addEventListener("click", () => {
      container.remove();
    });
    //Creamos el botón de editar, le damos un texto y la funcion de editar la imagen
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.addEventListener("click", () => {
      editPhoto(img);
    });

    //Metemos los dos botones en el contenedor de botones
    btnContainer.appendChild(deleteBtn);
    btnContainer.appendChild(editBtn);
    //Metemos en el contenedor principal la imagen y después el contenedor de botones que tenemos listo
    container.appendChild(img);
    container.appendChild(btnContainer);
    //Metemos este elemento en el main para pintarlo en la aplicación
    main.appendChild(container);
  } else {
    alert("Introduce una URL");
  }
});

const editPhoto = (img) => {
  const newURL = prompt("Inserta una nueva URL", img.src);
  if (newURL !== img.src) {
    img.src = newURL;
  } else {
    alert("Introduce una nueva URL");
  }
};
