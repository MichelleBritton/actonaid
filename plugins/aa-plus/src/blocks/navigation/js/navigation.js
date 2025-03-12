document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.getElementById("mobile-menu-button");
  const logo = document.getElementById("logo");

  if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener("click", () => {
      mobileMenuIcon.classList.toggle("open");
      logo.classList.toggle("opacity-0");
    });
  }

  const ddMenuItem = document.getElementById("dd-menu-item");
  if (ddMenuItem) {
    ddMenuItem.addEventListener("click", () => {
      ddMenuItem.classList.toggle("open");
    });
  }

  const ddMenuItemDesktop = document.getElementById("dd-menu-item-dt");
  if (ddMenuItemDesktop) {
    ddMenuItemDesktop.addEventListener("click", () => {
      ddMenuItemDesktop.classList.toggle("open");
    });
  }
});
