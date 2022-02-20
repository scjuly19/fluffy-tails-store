const openFilterBtn = document.getElementById("open-filter-menu");
const filterMenu = document.getElementById("filter-menu");
const closeFilterMenu = document.getElementById("close-filter-menu");

/* Open filters*/
const openFilter = () => {
  filterMenu.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

/*Close filters */
const closeFilter = () => {
  filterMenu.classList.add("hide");
  document.body.style.overflow = "unset";
};

openFilterBtn.addEventListener("click", openFilter);
closeFilterMenu.addEventListener("click", closeFilter);
