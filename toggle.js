
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  mobileMenuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
