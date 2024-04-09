"use strict";
function handleMenuSize() {
    const menu = document.querySelector("#menu");
    const logo = document.querySelector("#logo");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        menu.style.padding = "0";
        logo.style.width = "65px";
    }
    else {
        menu.style.padding = "8px 0";
        logo.style.width = "100px";
    }
}
window.onscroll = () => { handleMenuSize(); };
const cardButtonPhone = document.querySelector(".card-button-2-phone");
const cardButtonEmail = document.querySelector(".card-button-2-email");
cardButtonPhone.addEventListener("mouseover", () => {
    cardButtonPhone.innerHTML = "(11) 91122-4309";
});
cardButtonPhone.addEventListener("mouseout", () => {
    cardButtonPhone.innerHTML = "NOSSO WHATSAPP";
});
cardButtonEmail.addEventListener("mouseover", () => {
    cardButtonEmail.innerHTML = "groomingpet.oficial@gmail.com";
});
cardButtonEmail.addEventListener("mouseout", () => {
    cardButtonEmail.innerHTML = "NOSSO EMAIL";
});
document.addEventListener('DOMContentLoaded', () => {
    const timeSelect = document.querySelector("#time");
    const dateInput = document.querySelector("#datetime");
    function updateTimes() {
        timeSelect.innerHTML = '';
        const dateSelected = new Date(dateInput.value + 'T00:00:00-03:00');
        const atualTime = new Date();
        let month = atualTime.getMonth() + 1;
        let day = atualTime.getDate(); // Correção aqui
        const year = atualTime.getFullYear();
        if (month < 10) {
            month = '0' + month.toString();
        }
        if (day < 10) {
            day = '0' + day.toString();
        }
        const maxDate = year + '-' + month + '-' + day;
        dateInput.setAttribute('min', maxDate);
        let initialTime = new Date(dateSelected);
        initialTime.setHours(8);
        initialTime.setMinutes(0);
        const finalTime = new Date(dateSelected);
        finalTime.setHours(18);
        finalTime.setMinutes(0);
        const interval = 1;
        let time = new Date(initialTime);
        while (time <= finalTime) {
            if (!(dateSelected.toDateString() === atualTime.toDateString() && time <= atualTime)) {
                const option = document.createElement('option');
                option.value = time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
                option.textContent = option.value;
                timeSelect.appendChild(option);
            }
            time.setHours(time.getHours() + interval);
        }
    }
    dateInput.addEventListener('change', updateTimes);
    updateTimes();
});
