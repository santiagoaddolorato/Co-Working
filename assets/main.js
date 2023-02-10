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