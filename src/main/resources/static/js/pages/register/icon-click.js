const icon = document.querySelector(".content-register .site-icon .icon img");
const iconText = document.querySelector(".content-register .text");

icon.style.cursor = "pointer";
iconText.style.cursor = "pointer";

icon.addEventListener("click", () => {
    location.href = "/";
});

iconText.addEventListener("click", () => {
    location.href = "/";
});