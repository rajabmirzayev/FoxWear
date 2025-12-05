let cart = JSON.parse(localStorage.getItem("cart")) || [];

const wrapper = document.querySelector(".content-cart .product-wrapper");

function renderCart() {
    wrapper.innerHTML = "";

    cart.forEach(item => {
        const row = document.createElement("div");
        row.className = "product-cart flex-row-gap-0";
        row.dataset.id = item.id;

        row.innerHTML = `
                    <div class="product-picture">
                        <div class="picture">
                            <img src="${item.image}" alt="Product Image">
                        </div>
                        <div class="product-quantity">
                            <p class="quantity-product">${item.quantity}</p>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-name">
                            <p class="product-name" style="font-size: 20px">${item.name}</p>
                        </div>
                        <div class="product-size">Size: <span class="product-size">${item.size}</span></div>
                        <div class="product-color">Color: <span class="product-color">${item.color}</span></div>
                    </div>
                    <div class="quantity-controller flex-row-gap-0">
                        <button class="qty-btn qty-btn-decrease">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn qty-btn-increase">+</button>
                    </div>
                    <div class="product-price">
                        <p style="font-size: 20px">$${item.price}</p>
                    </div>
                    <button class="btn-product-delete">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </button>
        `;
        wrapper.appendChild(row);
    });
    // updateStorage();
    updateTotals();
}

renderCart();


wrapper.addEventListener("click", e => {
    const btn = e.target;

    const incBtn = btn.closest(".qty-btn-increase");
    const delBtn = btn.closest(".btn-product-delete");
    const decBtn = btn.closest(".qty-btn-decrease");

    if (!incBtn && !delBtn && !decBtn) return;

    const row = btn.closest(".product-cart");
    const id = Number(row.dataset.id);

    const item = cart.find(p => p.id === id);
    if (!item) return;

    if (incBtn) {
        item.quantity++;
    } else if (delBtn) {
        cart = cart.filter(p => p.id !== id);
    }
    else {
        if (item.quantity > 1) {
            item.quantity--;
        }
    }
    renderCart();
});

function updateTotals() {
    const summary = document.querySelector(".content-order-summary");

    let sum = 0.0;
    cart.forEach(item => {
       sum += item.price * item.quantity;
    });
    sum = Number(sum.toFixed(2));

    let shipping = 2.0;

    let discount = 10.2;

    let total = Number((sum + shipping - discount).toFixed(2));

    summary.innerHTML = `
<div class="header">
    <h2>Order Summary</h2>
</div>
<hr>
<div class="subtotal flex-row-gap-0">
    <p>Subtotal</p>
    <p class="price">$<span>${sum}</span></p>
</div>
<hr>
<div class="shipping flex-row-gap-0">
    <p>Shipping</p>
    <p class="price">$<span class="shipping">${shipping}</span></p>
</div>
<hr>
<div class="discount flex-row-gap-0">
    <p>Discount</p>
    <p class="price">-$<span class="discount">${discount}</span></p>
</div>
<div class="bottom">
    <hr>
    <div class="total flex-row-gap-0">
        <p class="title">Total</p>
        <p class="price">$<span>${total}</span></p>
    </div>
    <button id="btn-checkout">Proceed to checkout</button>
</div>
    `;
}


// function updateStorage() {
//     localStorage.setItem("cart", JSON.stringify(cart));
// }