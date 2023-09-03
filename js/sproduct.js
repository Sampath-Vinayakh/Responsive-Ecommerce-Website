let productId = document.location.search.replace(/^.*?\=/, "");

let prodetailsHTML = "";
let flag = false;
products.forEach((product) => {
  if (!flag) {
    if (Number(productId) == product.id) {
      prodetailsHTML = `<div class="single-pro-image">
            <img src="${product.img}" width="100%" id="MainImg" />
          </div>
          <div class="single-pro-details">
            <h6>Home / T-Shirt</h6>
            <h4>Men's Fashion T Shirt</h4>
            <h2>$${product.price}</h2>
            <select class="js-size-${product.id}">
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="Small">Small</option>
              <option value="Large">Large</option>
            </select>
            <input type="number" value="1" min="1" class="js-quantity-selector-${productId}"/>
            <button class="normal js-add-to-cart" data-product-id=${product.id}>Add to Cart</button>
            <span class="added-to-cart js-added-to-cart-${product.id}">Added to cart!</span>
            <h4>Product Details</h4>
            <span>${product.desc}</span
            >
          </div>`;
      flag = true;
    }
  }
});

document.querySelector(".js-prodetails").innerHTML = prodetailsHTML;

const button = document.querySelector(".js-add-to-cart");

button.addEventListener("click", () => {
  const { productId } = button.dataset;
  let matchedItem;
  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(quantitySelector.value);

  if (cart) {
    cart.forEach((product) => {
      if (product?.productId === productId) {
        matchedItem = product;
      }
    });
  }
  if (matchedItem) {
    matchedItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  document
    .querySelector(`.js-added-to-cart-${productId}`)
    .setAttribute("style", "opacity: 1");
  setTimeout(() => {
    document
      .querySelector(`.js-added-to-cart-${productId}`)
      .setAttribute("style", "opacity: 0");
  }, 2000);
});

if (productId) {
  let featuredProduc = "";
  let count = 0;
  for (i = 0; i < products.length; i++) {
    if (count <= 3) {
      if (products[i].id !== Number(productId)) {
        featuredProduc += `<div class="pro" data-product-id=${products[i].id}>
        <img src="${products[i].img}" alt="" />
        <div class="desc">
          <span>${products[i].companyName}</span>
          <h5>${products[i].productName}</h5>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>`;
        count++;
      }
    }
  }
  document.querySelector(".pro-container").innerHTML = featuredProduc;
  document.querySelectorAll(".pro").forEach((div) =>
    div.addEventListener("click", () => {
      window.document.location =
        "sproduct.html" + "?productId=" + div.dataset.productId;
    })
  );
}
