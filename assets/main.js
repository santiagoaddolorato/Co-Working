const cardContainer = document.getElementById(`cards-container`);
const form = document.getElementById(`form`);

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

const sabeLocalStorage = () => {
    localStorage.setItem(`agenda`, JSON.stringify(agenda));
};

const saveDate = () => {
    agenda= [
        ...agenda,
        {
            id: agenda.length + 1,
            name: nameInput.value,
            surename: surenameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            date:  formatDate(dateInput.value),
            time: timeInput.value,
            quantity: getRadioValue(radioInput),
            extras: getCheckedOptions(checkBoxInputs),
            about: aboutInput.value
        }
    ]
}

const renderTurn = (turn)=> {
    const {id,name, surename, phone, email, date,time, quantity,  extras } = turn;
    return

`
<div class="card ${setCardBackground(quantity)} ">
        <div class="card__left">
          <h2 class="card__title">Orden: N1 ${id} - ${name}${surename}</h2>
          <p class="card__qty">${quantity}</p>
          <p class="card__extras">Extra: ${extras}</p>
          <div class="tags">
            <span class="card__hour ${setTimeBackground (quantity)}">${time} HS</span>
            <span class="card__date  ${setTimeBackground(quantity)}"> ${date}</span>
          </div>
        </div>
        <div class="card__right">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://api.whatsapp.com/send?phone=+549${phone}&text=Boenas" target="_blank"><i class="fa-solid fa-phone-flip"></i></a>
          <img src=${setCardImg(quantity)}  class="card__img ${setCardImgClass(
            quantity
          )}" alt="" />
        </div>
      </div>
      `;};

      const renderAgenda= () => {
        cardContainer.innerHTML = agenda.maps((turn) => renderTurn(turn)).join("");
      };

      const submitForm = (e) => {
        e.preventDefault();
        if(isValidForm()){
            saveDate();
            alert("El turno se ah cargado correctamente")
            console.log(agenda);
            form.reset();
            saveLocalStorage();
            renderAgenda();
            setDateIntervals();

        }

      };

      const init = () => {
        renderAgenda();

        window.addEventListener("DOMContentLoaded", setDateIntervals);
        form.addEventListener("submit", submitForm);
      }

      init();

      