const displayWeather = (weatherData) => {
  const header = document.querySelector("#weather-location");
  header.textContent = `Weather in ${weatherData.location.name} in ${weatherData.location.region}, ${weatherData.location.country}`;

  const divToday = document.querySelector("#today");
  while (divToday.firstChild) {
    divToday.removeChild(divToday.firstChild);
  }

  const div1 = document.querySelector("#forecast1");
  while (div1.firstChild) {
    div1.removeChild(div1.firstChild);
  }
  const div2 = document.querySelector("#forecast2");
  while (div2.firstChild) {
    div2.removeChild(div2.firstChild);
  }
  const div3 = document.querySelector("#forecast3");
  while (div3.firstChild) {
    div3.removeChild(div3.firstChild);
  }
  const h2Today = document.createElement("h2");
  h2Today.textContent = "Today";

  const tempToday = document.createElement("h3");
  tempToday.textContent = `${weatherData.current.temp_c} cº`;

  divToday.appendChild(h2Today);
  divToday.appendChild(tempToday);

  const divForecast = [div1, div2, div3];

  for (let i = 0; i < 3; i++) {
    const date = document.createElement("h2");
    const fullDate = weatherData.forecast.forecastday[i + 1].date;
    const day = fullDate.slice(-2);
    const month = fullDate.slice(-5, -3);
    const year = fullDate.slice(0, 4);
    date.textContent = `${day}/${month}/${year}`;
    divForecast[i].appendChild(date);

    for (let k = 0; k < 24; k++) {
      const span = document.createElement("span");
      const hour = document.createElement("p");
      const time = weatherData.forecast.forecastday[i + 1].hour[k].time;
      const cleanTime = time.slice(-5);

      hour.textContent = `${cleanTime}`;
      span.appendChild(hour);

      const temp = document.createElement("p");
      temp.textContent = `${
        weatherData.forecast.forecastday[i + 1].hour[k].temp_c
      } cº`;

      span.appendChild(temp);

      divForecast[i].appendChild(span);
    }
  }
};

const getWeather = async (city) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a523d4c8792a4e5581d154759241805&q=${city}&days=4&aqi=no&alerts=no`
    );
    const weatherData = await response.json();
    console.log(weatherData);
    displayWeather(weatherData);
  } catch (error) {
    console.log(error);
    alert(`Couldn't find ${city}`);
  }
};

const getData = () => {
  const buttonSubmit = document.querySelector("#button-submit");
  buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const city = document.querySelector("#location");
    getWeather(city.value);
    city.value = "";
  });
};
const weather = () => {
  getData();
};

export { weather };
