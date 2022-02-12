const cartMenu = document.getElementById("cart-drawer-container");
const openCartBtn = document.getElementById("open-cart");
const closeCartBtn = document.getElementById("close-cart");

/*Open cart*/
const openCart = (e) => {
  e.preventDefault();
  cartMenu.classList.remove("hide");
  document.body.style.overflow = "hidden";
};
/*Close cart */
const closeCart = (e) => {
  e.preventDefault();
  cartMenu.classList.add("hide");
  document.body.style.overflow = "unset";
};

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
