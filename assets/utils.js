const getNextDay = () => {
    let tomorrow = new Date ();
    tomorrow.setDate(tomorrow.getDate() +1);
};


const padTo2Digits = (num) =>{
    return num.toString().padStart(2,"0");

};

const getTomorrowDate = () => {
    let year = getNextDay().getFullYear();
    let day = getNextDay().getDate();
    let month = getNextDay().getMonth() + 1;

    return `${year}-${padTo2Digits(month)}- ${padTo2Digits(day)}`;
};

 const getDateInvervals = () => {
    dateInput.value = getTomorrowDate();
    dateInput.min = getTomorrowDate();
    dateInput.max = getNextDay().getFullYear() + "-12-31"
 }

 const isEmpty = (value)=> {
    !value.length;
 };

 const isEmailValid = (email)=> {
    const re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(email);
 };

 const isPhoneValid = (phone) =>{
  const re =/^[0-9]{10}$/;
  return re.test(phone);
 };

 const isValidDate = (date) => {
    const currentDate = new Date ();
    const turnDate= new Date (date);

    turnDate.setHours(currentDate.getHours());
    turnDate.setMinutes(currentDate.getMinutes());
    turnDate.setSeconds(currentDate.getSeconds());
    turnDate.setDate(turnDate.getDate() +1);

    return date.length && currentDate < turnDate;
 };

 const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = message;
 };


 const clearError =(input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    const error =formField.querySelector("small");
    error.textContent= "";
 };

 const getRadioValue = (input) => {
    const checkedInput = [...inputs].find((input) => input.checked);
    return checkedInput.value;
 };

 const getCheckedOptions =(input) => {
    const checkedOptions = [...input].filter((input) => input.checked).map((opt)=> opt.value);
 };

 const formatDate = (date) => {
    const spliteDate = date.split ("-").reverse().join("/")
 };