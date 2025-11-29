const categoryMen = document.querySelector(".content-collections .content-collections .collections-wrapper .men");
const categoryWomen = document.querySelector(".content-collections .content-collections .collections-wrapper .women");
const categorySummer = document.querySelector(".content-collections .content-collections .collections-wrapper .summer");
const categoryWinter = document.querySelector(".content-collections .content-collections .collections-wrapper .winter");
const categoryAccessories = document.querySelector(".content-collections .content-collections .collections-wrapper .accessories");
const categorySport = document.querySelector(".content-collections .content-collections .collections-wrapper .sport");

categoryMen.addEventListener("click", () => {
   location.href = "../../../page/collection/men.html";
});

categoryWomen.addEventListener("click", () => {
    location.href = "../../../page/collection/women.html";
});

categorySummer.addEventListener("click", () => {
    location.href = "../../../page/collection/summer.html";
});

categoryWinter.addEventListener("click", () => {
    location.href = "../../../page/collection/winter.html";
});

categoryAccessories.addEventListener("click", () => {
    location.href = "../../../page/collection/accessories.html";
});

categorySport.addEventListener("click", () => {
    location.href = "../../../page/collection/sport.html";
});
