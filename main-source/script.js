const toggleBtn = document.querySelector(".bi-list");
const navItems = document.querySelector(".nav-items");
console.log(navItems);

const renderNavbar = function () {
  navItems.classList.toggle("active");
};

toggleBtn.addEventListener("click", function () {
  renderNavbar();
});
