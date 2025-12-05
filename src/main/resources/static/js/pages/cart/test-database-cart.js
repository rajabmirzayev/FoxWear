let cartItems = [
    {
        id: 1,
        name: "T-shirt FoxWear",
        price: 19.99,
        size: "L",
        color: "Gray",
        quantity: 2,
        image: "/images/products/category-men.jpg"
    },
    {
        id: 2,
        name: "T-shirt FoxWear",
        price: 14.99,
        size: "S",
        color: "Blue",
        quantity: 1,
        image: "/images/main/streetwear-2.jpg"
    },
    {
        id: 3,
        name: "T-shirt FoxWear",
        price: 9.99,
        size: "2XL",
        color: "Red",
        quantity: 5,
        image: "/images/main/streetwear-1.jpg"
    },
    {
        id: 4,
        name: "T-shirt FoxWear",
        price: 24.99,
        size: "XL",
        color: "White",
        quantity: 8,
        image: "/images/main/category-women.jpg"
    },
    {
        id: 5,
        name: "Hoodie FoxWear",
        price: 19.99,
        size: "M",
        color: "Black",
        quantity: 1,
        image: "/images/products/category-men.jpg"
    }
];

localStorage.setItem("cart", JSON.stringify(cartItems));