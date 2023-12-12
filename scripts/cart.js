import products from './products.js';

document.addEventListener('DOMContentLoaded', function () {

let cartItems = [];
let total = 0;
let cartCount = 0;

function generateProductHTML(product, index) {
    return `
        <div class="product" id="product-${index + 1}">
            <img src="${product.image}" alt="${product.name} Image">
            <h2 class="product-name">${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${index + 1})">Add to Cart</button>
        </div>
    `;
}

function renderProducts() {
    const productContainer = document.getElementById('product-container');
    
    const productsHTML = products.map((product, index) => generateProductHTML(product, index));

    productContainer.innerHTML = productsHTML.join('');
}

renderProducts();

function addToCart(productIndex) {
    // const productName = document.querySelector(`#product-${productIndex} .product-name`).textContent;
    // const productPrice = getProductPrice(productIndex);
    const selectedProduct = products[productIndex];

    if (selectedProduct) {
        const productName = selectedProduct.name;
        const productPrice = selectedProduct.price;

        // Add item to cart
        cartItems.push({ name: productName, price: productPrice });
        cartCount++;
        updateCart();
        updateCartCount();
    } else {
        console.error(`Product with index ${productIndex} not found.`);
    }
}


// function getProductPrice(productIndex) {
//     return productPrices[productIndex - 1] || 0;
// }

function removeItem(index) {
    // Remove item from cart
    cartItems.splice(index, 1);
    cartCount--;
    updateCart();
    updateCartCount();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Clear previous cart items
    cartList.innerHTML = "";

    // Update cart items
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("cart-item");
        listItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartList.appendChild(listItem);
    });

    // Update total price
    total = cartItems.reduce((acc, item) => acc + item.price, 0);
    totalPriceElement.textContent = total.toFixed(2);
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cartCount;
}
})
