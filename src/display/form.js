const displayForm = () => {
  const body = document.querySelector("body");

  const divForm = document.createElement("div");
  divForm.classList.add("div-form");

  const form = document.createElement("form");

  const labelCity = document.createElement("label");
  labelCity.setAttribute("for", "city");
  labelCity.textContent = "City: ";

  const inputCity = document.createElement("input");
  inputCity.id = "input-city";

  const buttonSubmit = document.createElement("button");
  buttonSubmit.setAttribute("type", "submit");
  buttonSubmit.classList.add("button-submit");
  buttonSubmit.textContent = "Submit";

  form.appendChild(labelCity);
  form.appendChild(inputCity);
  form.appendChild(buttonSubmit);

  divForm.appendChild(form);

  body.appendChild(divForm);
};

export { displayForm };
