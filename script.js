  const cartItems = [];
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));

      cartItems.push({ name, price });
      renderCart();
    });
  });

  function renderCart() {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} — $${item.price.toFixed(2)}`;
      cartList.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
  }
