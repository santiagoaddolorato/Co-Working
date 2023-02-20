const cardsContainer = document.getElementById("cards-container");
const form = document.getElementById("form");

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

const saveLocalStorage = () => {
  localStorage.setItem("agenda", JSON.stringify(agenda));
};

// Nos va a devovler la agenda con su estado actual sumando el nuevo turno que carguemos.
// Vamos a usar las funciones formatDate, getRadioValue y getCheckedOptiosn que estan en el archivito utils

const saveDate = () => {
  agenda = [
    ...agenda,
    {
      id: agenda.length + 1,
      name: nameInput.value,
      surname: surnameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      date: formatDate(dateInput.value),
      time: hourInput.value,
      quantity: getRadioValue(radioInputs),
      extras: getCheckedOptions(checkboxInputs),
      about: aboutInput.value,
    },
  ];
};

// Funcion para crear una card de turno.
// recibe un turno y devuelve una card html con los valores correspondientes.

const renderTurn = (turn) => {
  const { id, name, surname, phone, email, date, time, quantity, extras } =
    turn;
  console.log(extras);
  return `
  <div class="card ${setCardBackground(quantity)}">
        <div class="card__left">
          <h2 class="card__title">Orden: N°${id} - ${name} ${surname}</h2>
          <p class="card__qty">${quantity}</p>
          <p class="card__extras">Extra: ${
            extras && extras.length
              ? extras.join(", ")
              : "No requiere herramientas extras."
          }</p>
          <div class="tags">
            <span class="card__hour ${setTimeBackground(
              quantity
            )}">${time} HS</span>
            <span class="card__date ${setDateBackground(
              quantity
            )}">${date}</span>
          </div>
        </div>
        <div class="card__right">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://api.whatsapp.com/send?phone=+549${phone}&text=Boenas" target="_blank"><i class="fa-solid fa-phone-flip"></i></a>
          <img src=${setCardImg(quantity)} class="card__img ${setCardImgClass(
    quantity
  )}" alt="" />
        </div>
      </div>
    `;
};

// Función nos va a servier para renderizar la agenda, misma logica que aplicamos en el todo list
const renderAgenda = () => {
  cardsContainer.innerHTML = agenda.map((turn) => renderTurn(turn)).join("");
};

// Funcion va a recibir el evento submit del formulario

const submitForm = (e) => {
  e.preventDefault();
  if (isValidForm()) {
    saveDate();
    alert("El turno se ha cargado correctamente");
    console.log(agenda);
    form.reset();
    saveLocalStorage();
    renderAgenda();
    setDateIntervals();
  }
};

const init = () => {
  // Renderizamos la agenda en caso de que ya haya algo en el localstorage
  renderAgenda();

  window.addEventListener("DOMContentLoaded", setDateIntervals);
  form.addEventListener("submit", submitForm);
};

init();
      