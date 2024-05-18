import { displayWeather } from "./weather";
import { displayForm } from "./form";
const createDisplay = () => {
  displayForm();
  displayWeather();
};
export { createDisplay };
