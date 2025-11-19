async function loadPartials() {
    const header = await fetch("/page/partials/header.html").then(r => r.text());
    const footer = await fetch("/page/partials/footer.html").then(r => r.text());

    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
}

loadPartials().then();