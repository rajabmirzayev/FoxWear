const terms = document.querySelector(".content-register .right-content .register-form #terms");
const submit = document.querySelector(".content-register .right-content .register-form .submit input");

terms.addEventListener("change", () => {
   if (terms.checked) {
       submit.style.opacity = "1";
       submit.style.pointerEvents = "auto";
   } else {
       submit.style.opacity = "0.3";
       submit.style.pointerEvents = "none";
   }
});