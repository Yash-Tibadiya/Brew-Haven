function checkOpenStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  // Define open time ranges in minutes
  const morningOpen = 7 * 60; // 7:00 AM
  const morningClose = 13 * 60; // 1:00 PM
  const eveningOpen = 14 * 60; // 2:00 PM
  const eveningClose = 20 * 60; // 8:00 PM

  const statusElement = document.getElementById("status");

  if (
    (totalMinutes >= morningOpen && totalMinutes < morningClose) ||
    (totalMinutes >= eveningOpen && totalMinutes < eveningClose)
  ) {
    statusElement.textContent = "Open";
  } else {
    statusElement.textContent = "Closed";
  }
}

// Run check on page load
checkOpenStatus();
// Refresh every minute
setInterval(checkOpenStatus, 60000);
// Load Lucide icons
lucide.createIcons();

// First FAQ (Open by Default)
document.addEventListener("DOMContentLoaded", function () {
  const faqButton = document.querySelector(".faq-button");
  const faqAnswer = document.querySelector(".faq-answer");

  // Ensure it's open by default
  faqAnswer.classList.add("active");

  faqButton.addEventListener("click", function () {
    faqAnswer.classList.toggle("active");
  });

  // Load Lucide icons
  lucide.createIcons();
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
const logoIcon = document.querySelector("#logo i");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY; // Use scrollY for modern browsers

  if (currentScroll > 20) {
    // Add styles for scrolling down
    navbar.classList.add("bg-white/95", "backdrop-blur-sm", "shadow-lg");
    navbar.classList.remove("bg-transparent");

    // Change span color to amber-500
    document.querySelector("#logo span").classList.remove("text-white");
    document.querySelector("#logo span").classList.add("text-amber-500");

    // Update nav-link colors
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("text-white");
      link.classList.add("text-gray-700");
    });
  } else {
    // Revert styles when at the top
    navbar.classList.remove("bg-white/95", "backdrop-blur-sm", "shadow-lg");
    navbar.classList.add("bg-transparent");

    // Revert span color to white
    document.querySelector("#logo span").classList.add("text-white");
    document.querySelector("#logo span").classList.remove("text-amber-500");

    // Revert nav-link colors
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.add("text-white");
      link.classList.remove("text-gray-700");
    });
  }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const mobileMenuButton = document.getElementById("mobile-menu-button");

// Toggle the mobile menu on button click
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  // Toggle the icon between "menu" and "x"
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenuButton.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
  } else {
    mobileMenuButton.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
  }
  // Reinitialize Lucide icons to update the new icon
  lucide.createIcons();
});

// Close the mobile menu when a link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    lucide.createIcons();
  });
});

// Add event listeners to each mobile menu link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hide the mobile menu
    mobileMenu.classList.add("hidden");
    // Reset the menu button icon to "menu"
    mobileMenuButton.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    // Reinitialize Lucide icons
    lucide.createIcons();
  });
});

// Contact Form Validation
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Reset errors
  document
    .querySelectorAll(".text-red-500")
    .forEach((error) => error.classList.add("hidden"));

  // Validate name
  const name = document.getElementById("name");
  if (!name.value.trim()) {
    document.getElementById("name-error").textContent = "Name is required";
    document.getElementById("name-error").classList.remove("hidden");
    isValid = false;
  }

  // Validate email
  const email = document.getElementById("email");
  if (!email.value.trim()) {
    document.getElementById("email-error").textContent = "Email is required";
    document.getElementById("email-error").classList.remove("hidden");
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    document.getElementById("email-error").textContent =
      "Please enter a valid email";
    document.getElementById("email-error").classList.remove("hidden");
    isValid = false;
  }

  // Validate message
  const message = document.getElementById("message");
  if (!message.value.trim()) {
    document.getElementById("message-error").textContent =
      "Message is required";
    document.getElementById("message-error").classList.remove("hidden");
    isValid = false;
  }

  if (isValid) {
    alert("Message sent successfully!");
    contactForm.reset();
  }
});
