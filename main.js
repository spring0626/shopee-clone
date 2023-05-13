// Modal
const showSignUp = document.querySelector(".js-show-sign-up");
const showLogin = document.querySelector(".js-show-login");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal__container");
const modalCloses = document.querySelectorAll(".js-close-modal-btn");
const switchSignUp = document.querySelector(".js-modal__switch-sign-up");
const switchLogin = document.querySelector(".js-modal__switch-login");

showSignUp.addEventListener("click", () => {
    modal.classList.add("sign-up");
});

showLogin.addEventListener("click", () => {
    modal.classList.add("login");
});

for (const modalClose of modalCloses) {
    modalClose.addEventListener("click", () => {
        modal.classList.remove("login");
        modal.classList.remove("sign-up");
    });
}

modal.addEventListener("click", () => {
    modal.classList.remove("login");
    modal.classList.remove("sign-up");
});

modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});

switchSignUp.addEventListener("click", () => {
    modal.classList.remove("login");
    modal.classList.add("sign-up");
});

switchLogin.addEventListener("click", () => {
    modal.classList.remove("sign-up");
    modal.classList.add("login");
});

// Switch login, logout
const notify = document.querySelector(".js-navbar__notify");
const cart = document.querySelector(".js-search__cart-list");
const loginBtn = document.querySelector(".js-login");
const logOutBtn = document.querySelector(".js-log-out");
const loginLogOutBtns = document.querySelectorAll(".js-display-not-login");
const userInfo = document.querySelector(".js-display-login");
const numberBadges = document.querySelectorAll(".js-number-badge");

function displayLogin() {
    notify.classList.remove("navbar__notify--not-login");
    cart.classList.remove("search__cart-list--no-cart");
    for (const loginLogOutBtn of loginLogOutBtns) {
        loginLogOutBtn.classList.remove("log-out");
    }
    userInfo.classList.add("login");
    for (const numberBadge of numberBadges) {
        numberBadge.classList.add("show");
    }
}
function displayNotLogin() {
    notify.classList.add("navbar__notify--not-login");
    cart.classList.add("search__cart-list--no-cart");
    for (const loginLogOutBtn of loginLogOutBtns) {
        loginLogOutBtn.classList.add("log-out");
    }
    userInfo.classList.remove("login");
    for (const numberBadge of numberBadges) {
        numberBadge.classList.remove("show");
    }
}

loginBtn.addEventListener("click", displayLogin);
logOutBtn.addEventListener("click", displayNotLogin);
