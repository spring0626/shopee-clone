// Modal
const showSignUp = document.querySelector(".js-show-sign-up");
const showLogin = document.querySelector(".js-show-login");
const modalSignUp = document.querySelector(".js-modal-sign-up");
const modalLogin = document.querySelector(".js-modal-login");
const modalContainers = document.querySelectorAll(".js-modal__container");
const modalCloses = document.querySelectorAll(".js-close-modal-btn");
const switchSignUp = document.querySelector(".js-modal__switch-sign-up");
const switchLogin = document.querySelector(".js-modal__switch-login");

function showModalSignUp() {
    modalSignUp.classList.add("sign-up");
}
function showModalLogin() {
    modalLogin.classList.add("login");
}
function hideModal() {
    modalSignUp.classList.remove("sign-up");
    modalLogin.classList.remove("login");
}
function switchModalSignUp() {
    modalSignUp.classList.add("sign-up");
    modalLogin.classList.remove("login");
}
function switchModalLogin() {
    modalLogin.classList.add("login");
    modalSignUp.classList.remove("sign-up");
}

showSignUp.addEventListener("click", showModalSignUp);
showLogin.addEventListener("click", showModalLogin);
modalSignUp.addEventListener("click", hideModal);
modalLogin.addEventListener("click", hideModal);
switchSignUp.addEventListener("click", switchModalSignUp);
switchLogin.addEventListener("click", switchModalLogin);

for (const modalClose of modalCloses) {
    modalClose.addEventListener("click", hideModal);
}
for (const modalContainer of modalContainers) {
    modalContainer.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

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
