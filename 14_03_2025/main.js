const btn = document.querySelector("#btn");

/* const Hola = () => {
  console.log("Hola");
}; */

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const random = document.querySelector("#random");

random.addEventListener("input", (e) => {
  const h2 = document.querySelector("h2");
  h2.textContent = e.target.value
});

window.addEventListener("resize", (e) => {
  console.log(e)
  const h3 = document.querySelector("h3");
  h3.textContent = e.target.innerHeight + " x " + e.target.innerWidth
})