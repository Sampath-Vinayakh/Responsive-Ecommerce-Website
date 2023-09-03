export default function handleProductClick() {
  document.querySelectorAll(".pro").forEach((div) => {
    div.addEventListener("click", () => {
      window.document.location =
        "sproduct.html" + "?productId=" + div.dataset.productId;
    });
  });
}
