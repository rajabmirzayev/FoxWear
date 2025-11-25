const productsBar = document.querySelector(
    ".products-bar"
);

const productWidth = document.querySelector(".product").offsetWidth + 50;

function moveLeft() {
    productsBar.scrollBy({left: -productWidth, behavior: "smooth"})
}

function moveRight() {
    productsBar.scrollBy({left: productWidth, behavior: "smooth"})
}