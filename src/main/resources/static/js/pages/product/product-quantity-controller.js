const increaseButton = document.getElementById("qty-btn-increase");
const decreaseButton = document.getElementById("qty-btn-decrease");
const quantity = document.getElementById("qty-value");
const valueQuantity = document.getElementById("qty-value").textContent;


let number = Number(valueQuantity);

increaseButton.addEventListener("click", () => {
    number++;
    quantity.innerHTML = number.toString();
})

decreaseButton.addEventListener("click", () => {
    if (number > 1) {
        number--;
    }
    quantity.innerHTML = number.toString();
})