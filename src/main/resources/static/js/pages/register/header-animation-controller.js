const header = document.querySelectorAll(".content-register .text-content");

header.forEach((el) => {
    const text = el.textContent.trim();
    el.textContent = "";

    [...text].forEach((ch, i) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = ch === " " ? "\u00A0" : ch;
        span.style.animationDelay = `${i * 0.13 + 0.3}s`;
        el.appendChild(span);
    });
});