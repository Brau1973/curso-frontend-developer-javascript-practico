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

// ---------------------------------- LOAD PRODUCTS ----------------------------------
const producList = [];
producList.push({
    name: "Mouse",
    price: 200,
    image: "https://images.pexels.com/photos/12795364/pexels-photo-12795364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
producList.push({
    name: "Keyboard",
    price: 180,
    image: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
producList.push({
    name: "Laptop",
    price: 500,
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
producList.push({
    name: "Car",
    price: 5000,
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
producList.push({
    name: "Bike",
    price: 500,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
producList.push({
    name: "MotorBike",
    price: 500,
    image: "https://images.pexels.com/photos/5803611/pexels-photo-5803611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
producList.push({
    name: "Shoes",
    price: 85,
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
producList.push({
    name: "Bag",
    price: 50,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

loadProductsGrid(producList);

function loadProductsGrid(productList){

    const cardsContainer = document.querySelector(".cards-container");

    for (product of producList) {
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");

        const img = document.createElement('img');
        img.setAttribute("src",product.image);
        productCard.appendChild(img);

        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");

        const productInfoInnerDiv = document.createElement('div');
        const productInfoPPrice = document.createElement('p');
        const productInfoPName = document.createElement('p');

        productInfoPPrice.innerText = "$"+product.price;
        productInfoPName.innerText = product.name;

        productInfoInnerDiv.append(productInfoPPrice,productInfoPName);
        productInfo.appendChild(productInfoInnerDiv);

        const figure = document.createElement("figure");
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute("src","./icons/bt_add_to_cart.svg");
        figure.appendChild(imgFigure);
        productInfo.appendChild(figure);

        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard);
    }
}