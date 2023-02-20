// Manejo de fechas

// Función para obtener el día siguiente al día actual
const getNextDay = () => {
   let tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   return tomorrow;
 };
 
 // Función para formatear el número de fecha.
 // 25/01/1999
 // DD/MM/AAAA
 const padTo2Digits = (num) => {
   return num.toString().padStart(2, "0");
 };
 
 // Función para que en base a una fecha, obtengamos año, día y
 // mes y retornemos la fecha en el formato que necesitamos para guardarla.
 
 const getTomorrowDate = () => {
   let year = getNextDay().getFullYear();
   let day = getNextDay().getDate();
   let month = getNextDay().getMonth() + 1;
 
   return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`;
 };
 
 // Función para setear el valor inicial del input de tipo date y el
 // valor mínimo y máximo que puede tomar.
 // 1. Seteamos el valor inicial en la fecha de mañana usando getTomorrowDate()
 // 2. El mínimo será tambien el día de mañana, para no poder ir a una fecha anterior a esa
 // 3. El maximo, como dijimos, esta seteado en el último día del año actual.
 // Le sacamos el año a la fecha actual y lo concatenamos con "-12-31" para que nos tome la fecha del 31 de diciembre del año actual
 
 const setDateIntervals = () => {
   dateInput.value = getTomorrowDate();
   dateInput.min = getTomorrowDate();
   dateInput.max = getNextDay().getFullYear() + "-12-31";
 };
 
 // ----------------------------------------------------
 // ------------ Checkeo de validaciones ---------------
 // ----------------------------------------------------
 
 const isEmpty = (value) => {
   return !value.length;
 };
 
 const isEmailValid = (email) => {
   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
   return re.test(email);
 };
 
 const isPhoneValid = (phone) => {
   const re = /^[0-9]{10}$/;
   return re.test(phone);
 };
 // Checkeamos si la fecha dada por el input es valida.
 const isValidDate = (date) => {
   const currentDate = new Date();
   const turnDate = new Date(date);
 
   turnDate.setHours(currentDate.getHours());
   turnDate.setMinutes(currentDate.getMinutes());
   turnDate.setSeconds(currentDate.getSeconds());
   turnDate.setDate(turnDate.getDate() + 1);
 
   //   console.log("Date =>", currentDate);
   //   console.log("Date =>", currentDate < turnDate);
   //   console.log("Datenew =>", turnDate);
   //   console.log("Datenew =>", currentDate > turnDate);
   return date.length && currentDate < turnDate;
 };
 
 // manejo de errores
 
 // funcion para mostrar error
 const showError = (input, message) => {
   const formField = input.parentElement;
   formField.classList.add("error");
   const error = formField.querySelector("small");
   // innerText
   error.textContent = message;
 };
 
 // Funcion para borrar el error
 const clearError = (input) => {
   const formField = input.parentElement;
   formField.classList.remove("error");
   const error = formField.querySelector("small");
   // innerText
   error.textContent = "";
 };
 
 // utils para propiedad del objeto que va a la agenda
 
 const getRadioValue = (inputs) => {
   const checkedInput = [...inputs].find((input) => input.checked);
   return checkedInput.value;
 };
 // Función para obtener los values de los inputs de tipo checkbox que esten seleccionados(extras)
 // Recibe un HTMLCollection de inputs( que serán todos los de tipo CHECKBOX cuando la llamemos).
 // Devuelve un array con los values de los elementos seleccionados.
 const getCheckedOptions = (inputs) => {
   console.log("HTMLCOLLECTION", inputs, typeof inputs);
   console.log("ARRAY DE ELEMENTOS", [...inputs], typeof [...inputs]);
 
   const checkedOptions = [...inputs]
     .filter((input) => input.checked)
     .map((opt) => opt.value);
   return checkedOptions;
 };
 
 // Funcion para formatear la fecha que nos devuelve el input date, para asi despues mostrar
 
 // recibe "2022-08-25"
 // splitDate ["2022", "08", "25"]
 // ["25","08","2022"]
 // splitDate = 25/08/2022
 const formatDate = (date) => {
   const splitDate = date.split("-").reverse().join("/");
   return splitDate;
 };
 
 // Formato de las Cards
 
 // Funcion que setea el color de fondo de la card
 
 const setCardBackground = (quantity) => {
   return quantity === "Más de 10"
     ? "violet-card"
     : quantity === "Entre 5 y 10"
     ? "red-card"
     : "black-card";
 };
 
 // Funcion para setear el color del span de horario segun la cantidad de personas
 const setTimeBackground = (quantity) => {
   return quantity === "Menos de 5" ? "red-card" : "black-card";
 };
 
 // Funcion para setear el color del span de fecha segun la cantidad de personas
 
 const setDateBackground = (quantity) => {
   return quantity === "Más de 10" ? "red-card" : "violet-card";
 };
 
 // Funcion para setear la imagen que acompáñar las cards segun la cantidad de personas
 
 const setCardImg = (quantity) => {
   return quantity === "Más de 10"
     ? "./assets/img/server.png"
     : quantity === "Entre 5 y 10"
     ? "./assets/img/laptop.png"
     : "./assets/img/lupa.png";
 };
 
 // Funcion para setear la clase de la imagen que acompañar a alas cards de cantidad de personas
 
 const setCardImgClass = (quantity) => {
   return quantity === "Más de 10"
     ? "server-img"
     : quantity === "Entre 5 y 10"
     ? "laptop-img"
     : "lupa-img";
 };