export default function getProducts(type) {
  let productsHTML = "";
  products.forEach((product) => {
    if (product.type === type) {
      productsHTML += `<div class="pro" data-product-id=${product.id}>
        <img src=${product.img} alt="">
        <div class="desc">
          <span>${product.companyName}</span>
          <h5>${product.productName}</h5>
          <div class="star">
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
          </div>
          <h4>$${product.price}</h4>
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>`;
    } else if (product.type === type) {
      productsHTML += `<div class="pro" data-product-id=${product.id}>
          <img src=${product.img} alt="">
          <div class="desc">
            <span>${product.companyName}</span>
            <h5>${product.productName}</h5>
            <div class="star">
              <i class="fa-solid fa-star" ></i>
              <i class="fa-solid fa-star" ></i>
              <i class="fa-solid fa-star" ></i>
              <i class="fa-solid fa-star" ></i>
              <i class="fa-solid fa-star" ></i>
            </div>
            <h4>$${product.price}</h4>
          </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        </div>`;
    } else if (type === "all") {
      productsHTML += `<div class="pro" data-product-id=${product.id}>
        <img src=${product.img} alt="">
        <div class="desc">
          <span>${product.companyName}</span>
          <h5>${product.productName}</h5>
          <div class="star">
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
          </div>
          <h4>$${product.price}</h4>
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>`;
    }
  });
  return productsHTML;
}
