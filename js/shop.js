let allProducts = "";

import getProducts from "./getProducts.js";
import handleProductClick from "./handleProductClick.js";
// products.forEach((product) => {
//   allProducts += `<div class="pro" data-product-id=${product.id}>
//     <img src=${product.img} alt="">
//     <div class="desc">
//       <span>${product.companyName}</span>
//       <h5>${product.productName}</h5>
//       <div class="star">
//         <i class="fa-solid fa-star" ></i>
//         <i class="fa-solid fa-star" ></i>
//         <i class="fa-solid fa-star" ></i>
//         <i class="fa-solid fa-star" ></i>
//         <i class="fa-solid fa-star" ></i>
//       </div>
//       <h4>$${product.price}</h4>
//     </div>
//     <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
//   </div>`;
// });

document.querySelector(".js-products").innerHTML = getProducts("all");

handleProductClick();
