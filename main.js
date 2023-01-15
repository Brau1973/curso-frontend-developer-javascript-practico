// ----------------- MENU DESKTOP -----------------
//Selecciono email del navbar y menu desktop
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//Agrego evento para mostrar o ocultar menu desktop
navbarEmail.addEventListener("click",toogleDesktopMenu);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");

    asideShoppingCartMenu.classList.add("inactive");
}

// ----------------- MENU MOBILE -----------------
//Selecciono burgerIcon del navbar y menu mobile
const burgerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//Agrego evento para mostrar o ocultar menu mobile
burgerMenuIcon.addEventListener("click",toogleMobileMenu);

function toogleMobileMenu(){
    mobileMenu.classList.toggle("inactive");

    asideShoppingCartMenu.classList.add("inactive");
}

// ----------------- CARRITO DE COMPRAS ASIDE -----------------
//Selecciono burgerIcon del navbar y menu mobile
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const asideShoppingCartMenu = document.querySelector(".product-detail");

//Agrego evento para mostrar o ocultar menu mobile
shoppingCartIcon.addEventListener("click",toogleAsideShoppingCartMenu);

function toogleAsideShoppingCartMenu(){
    asideShoppingCartMenu.classList.toggle("inactive");

    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}