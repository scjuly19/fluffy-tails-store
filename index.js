const openFilterBtn = document.getElementById("open-filter-menu");
const filterMenu = document.getElementById("filter-menu");
const closeFilterMenu = document.getElementById("close-filter-menu");
const cartMenu=document.getElementById("cart-drawer-container");
const openCartBtn=document.getElementById("open-cart");
const closeCartBtn=document.getElementById("close-cart");

/* Open filters*/
const openFilter = () => {
  filterMenu.classList.remove("hide");
  document.body.style.overflow = 'hidden';
};

/*Close filters */
const closeFilter=()=>{
  filterMenu.classList.add("hide");
  document.body.style.overflow = 'unset';
}

/*Open cart*/
const openCart=(e)=>{
  e.preventDefault()
  cartMenu.classList.remove("hide");
  document.body.style.overflow = 'hidden';
}
/*Close cart */
const closeCart=(e)=>{
  e.preventDefault()
  cartMenu.classList.add("hide");
  document.body.style.overflow = 'unset';
}

openFilterBtn.addEventListener("click", openFilter);
closeFilterMenu.addEventListener("click", closeFilter);
openCartBtn.addEventListener("click",openCart);
closeCartBtn.addEventListener("click",closeCart);
