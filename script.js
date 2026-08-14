// Cart Array
let cart = [];

// Add Product to Cart
function addToCart(name, price) {

    let product = {
        name: name,
        price: price
    };

    cart.push(product);

    updateCart();

    alert(name + " added to cart!");
}

// Update Cart Count
function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

}

// Display Cart Items
function showCart() {

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

// Remove Item
function removeItem(index) {

    cart.splice(index, 1);

    showCart();

    updateCart();
}
