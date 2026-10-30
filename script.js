const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");

if (siteHeader && menuToggle && mainNavigation) {
  function closeMenu() {
    siteHeader.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}
function getLocalDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const reservationForm = document.querySelector("#reservation-form");
const reservationStatus = document.querySelector("#reservation-status");
const reservationDate = reservationForm?.querySelector('input[name="date"]');

if (reservationForm && reservationStatus) {
  if (reservationDate) {
    reservationDate.min = getLocalDateString();
  }

  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const guestName = formData.get("name");

    reservationStatus.textContent = `Thank you, ${guestName}. This is a demonstration only. No reservation has been submitted.`;
    reservationForm.reset();

    if (reservationDate) {
      reservationDate.min = getLocalDateString();
    }
  });
}


