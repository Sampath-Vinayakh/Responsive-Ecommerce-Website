let orderListHTML = "";

function OrderList() {
  products.forEach((product) => {
    cart.forEach((cartProduct) => {
      if (product.id === Number(cartProduct.productId)) {
        console.log("pass");
        orderListHTML += `<tr>
        <td>
         <i class="fa-regular fa-times-circle" onclick="deleteItem(${
           product.id
         })"></i>
         <td><img src="${product.img}" alt=""></td>
         <td>${product.productName}</td>
         <td>$${product.price}</td>
         <td>${cartProduct.quantity}</td>
         <td>$${product.price * cartProduct.quantity}</td>
        </td>
      </tr>`;
      }
    });
  });
}

OrderList();

document.querySelector(".js-table-body").innerHTML = orderListHTML;

function deleteItem(product) {
  cart.forEach((cartProduct, i) => {
    if (Number(cartProduct.productId) === product) {
      cart.splice(i, 1);
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(localStorage.getItem("cart"));
      document.querySelector(".js-table-body").innerHTML = "";
      orderListHTML = "";
      OrderList();
      document.querySelector(".js-table-body").innerHTML = orderListHTML;
      cartValueHTML = "";
      cartValue();
      document.querySelector(".js-cart-value").innerHTML = cartValueHTML;
    }
  });
}

let cartValueHTML = "";

function cartValue() {
  if(orderListHTML) {
    let orderValue = 0;
    products.forEach((product)=>{
      cart.forEach((cartProduct)=>{
        if (product.id === Number(cartProduct.productId)){
            orderValue += product.price*cartProduct.quantity;
        }
      })
    });
    cartValueHTML = ` <div id="coupon">
    <h3>Apply Coupon</h3>
    <div>
      <input type="text" placeholder="Enter Your Coupon">
      <button class="normal">Apply</button>
    </div>
  </div>
  <div id="subtotal">
    <h3>Cart Totals</h3>
    <table>
      <tr>
        <td>Cart Subtotal</td>
        <td>$ ${orderValue}</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>Free</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>$ ${orderValue}</strong></td>
      </tr>
    </table>
    <button class="normal">Proceed to checkout</button>
  </div>`
}

document.querySelector(".js-cart-value").innerHTML = cartValueHTML;
}

cartValue();