const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

function renderCart() {
    if (cartItems.length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
        return;
    }

    cartContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        </div>
    `).join('');

    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = total.toFixed(2);
}

renderCart();