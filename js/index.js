let featuredProductsHTML = "";
let newArrivalsHTML = "";

import handleProductClick from "./handleProductClick.js";
import getProducts from "./getProducts.js";
// products.forEach((product) => {
//   if (product.type === "Featured") {
//     featuredProductsHTML += `<div class="pro" data-product-id=${product.id}>
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
//   } else {
//     newArrivalsHTML += `<div class="pro" data-product-id=${product.id}>
//       <img src=${product.img} alt="">
//       <div class="desc">
//         <span>${product.companyName}</span>
//         <h5>${product.productName}</h5>
//         <div class="star">
//           <i class="fa-solid fa-star" ></i>
//           <i class="fa-solid fa-star" ></i>
//           <i class="fa-solid fa-star" ></i>
//           <i class="fa-solid fa-star" ></i>
//           <i class="fa-solid fa-star" ></i>
//         </div>
//         <h4>$${product.price}</h4>
//       </div>
//       <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
//     </div>`;
//   }
// });

document.querySelector(".js-featured-products").innerHTML =
  getProducts("Featured");

document.querySelector(".js-new-arrivals").innerHTML =
  getProducts("new-arrivals");

handleProductClick();
