const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a523d4c8792a4e5581d154759241805&q=${city}`
    );
    const weatherData = await response.json();
    createDisplayWeather(weatherData);
  } catch (error) {
    console.log(error);
  }
};

const createDisplayWeather = () => {};

const getData = () => {
  const buttonSubmit = document.querySelector(".button-submit");
  buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const city = document.querySelector("#input-city");
    console.log(city.value);
    getWeather(city.value);
  });
};
const displayWeather = () => {
  getData();
};

export { displayWeather };
