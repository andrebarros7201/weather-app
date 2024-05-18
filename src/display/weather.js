const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a523d4c8792a4e5581d154759241805&q=${city}&days=3&aqi=no&alerts=no`
    );
    const weatherData = await response.json();
    createDisplayWeather(weatherData);
  } catch (error) {
    console.log(error);
    alert(`Couldn't find ${city}`);
  }
};

const createDisplayWeather = (weatherData) => {
  const body = document.querySelector("body");

  const divWeather = document.createElement("div");
  divWeather.classList.add("div-weather");

  const h1City = document.createElement("h1");
  h1City.classList.add("h1-city");
  h1City.textContent = `Weather Forecast for ${weatherData.location.name} in ${weatherData.location.region}, ${weatherData.location.country}`;
  divWeather.appendChild(h1City);

  const divToday = document.createElement("div");
  divToday.classList.add("div-forecast");

  const currentDate = document.createElement("h2");
  currentDate.classList.add("date");
  currentDate.textContent = "Today";
  divToday.appendChild(currentDate);

  const tempC = document.createElement("h3");
  tempC.classList.add("h3-temp");
  tempC.textContent = `Current temperature is ${weatherData.current.temp_c} Cº`;
  divToday.appendChild(tempC);

  divWeather.appendChild(divToday);
  body.appendChild(divWeather);

  console.log(weatherData.current);
};

const getData = () => {
  const buttonSubmit = document.querySelector(".button-submit");
  buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const city = document.querySelector("#input-city");
    getWeather(city.value);
    city.value = "";
  });
};
const displayWeather = () => {
  getData();
};

export { displayWeather };
