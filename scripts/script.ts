function handleMenuSize() {
    const menu = document.querySelector("#menu") as HTMLElement
    const logo = document.querySelector("#logo") as HTMLElement

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        menu.style.padding = "0"
        logo.style.width = "65px"
    } else {
        menu.style.padding = "8px 0"
        logo.style.width = "100px"
    }
}

window.onscroll = () => { handleMenuSize() }

const cardButtonPhone = document.querySelector(".card-button-2-phone") as HTMLButtonElement
const cardButtonEmail = document.querySelector(".card-button-2-email") as HTMLButtonElement

cardButtonPhone.addEventListener("mouseover", () => {
    cardButtonPhone.innerHTML = "(11) 91122-4309"
})

cardButtonPhone.addEventListener("mouseout", () => {
    cardButtonPhone.innerHTML = "NOSSO WHATSAPP"
})

cardButtonEmail.addEventListener("mouseover", () => {
    cardButtonEmail.innerHTML = "groomingpet.oficial@gmail.com"
})

cardButtonEmail.addEventListener("mouseout", () => {
    cardButtonEmail.innerHTML = "NOSSO EMAIL"
})
