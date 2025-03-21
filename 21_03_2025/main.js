const userForm = document.querySelector("#userForm");
const main = document.querySelector("main");

userForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const nickname = document.querySelector("#nickname").value;
  const email = document.querySelector("#email").value;
  const terms = document.querySelector("#terms");

  if (nickname === "" || email === "") {
    alert("Tienes que completar los campos del formulario");
    return; //Salimos de la función principal -> () => {}
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Tienes que insertar un email válido");
    return;
  }

  if (!terms.checked) {
    alert("Tienes que aceptar los términos y condiciones");
    return;
  }

  const user = {
    nickname: nickname,
    email: email,
    terms: true,
  };

  printUser(user);

  userForm.reset()
});

const printUser = (user) => {
  main.innerHTML += `
  <div>
    <h2>👤 ${user.nickname}</h2>
    <h3>✉️ ${user.email}</h3>
  </div>
  `;
};
