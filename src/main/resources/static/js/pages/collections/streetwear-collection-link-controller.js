const picMen = document.querySelector(".content-streetwear-collections .collection-body .pic-1");
const picWomen = document.querySelector(".content-streetwear-collections .collection-body .pic-2");

picMen.addEventListener("click", () => {
    location.href = "../../../page/collection/streetwear/men.html";
});

picWomen.addEventListener("click", () => {
    location.href = "../../../page/collection/streetwear/women.html";
});