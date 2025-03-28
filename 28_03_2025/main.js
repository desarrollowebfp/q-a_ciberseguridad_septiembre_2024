const getInfo = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=69902c6c30a342d6b7e163258241906&q=${city}&aqi=no`
  );
  const data = await res.json();
  printData(data);
};

const printData = (data) => {
  const main = document.querySelector("main");
  main.innerHTML = `
  <h2>${data.location.name}, ${data.location.country}</h2>
  <h3>${data.current.temp_c}º</h3>
  <h4>${data.current.condition.text}</h4>
  <img src="${data.current.condition.icon}" alt="${data.current.condition.text} icon"/>
  `;
};

document.querySelector("#searchBtn").addEventListener("click", () => {
    const city = document.querySelector("#cityInput").value;
    getInfo(city);
    document.querySelector("#cityInput").value = "";
})

getInfo("Madrid");
