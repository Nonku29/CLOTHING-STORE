let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function changeImage(element) {
  const mainImg = document.querySelector(".main-img");
  mainImg.src = element.src;
}

let cart = {};

function addToCart(product, price) {
  if (!cart[product]) {
    cart[product] = { quantity: 1, price: price };
  } else {
    cart[product].quantity += 1;
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;

  for (let item in cart) {
    let product = cart[item];
    total += product.quantity * product.price;

    cartItems.innerHTML += `
      <div>
        <span>${item}</span>
        <button onclick="changeQty('${item}', -1)">-</button>
        <span>${product.quantity}</span>
        <button onclick="changeQty('${item}', 1)">+</button>
        <span>R${product.quantity * product.price}</span>
      </div>
    `;
  }

  cartTotal.innerText = total;
}

function changeQty(product, change) {
  cart[product].quantity += change;
  if (cart[product].quantity <= 0) {
    delete cart[product];
  }
  updateCart();
}
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const title = product.querySelector("h2").innerText.toLowerCase();
    if (title.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
