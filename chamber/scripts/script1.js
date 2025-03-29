document.addEventListener("DOMContentLoaded", () => {
    // Footer Dynamic Updates
    const updateFooter = () => {
      const currentYear = new Date().getFullYear();
      const lastModifiedDate = document.lastModified;
  
      const currentYearElement = document.getElementById("current-year");
      const lastModifiedElement = document.getElementById("lastModified");
  
      if (currentYearElement) {
        currentYearElement.innerHTML = `&copy; ${currentYear} ✿ Abuja Chamber of Commerce`;
      }
  
      if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Updated: ${lastModifiedDate}`;
      }
    };
  
    updateFooter();
  
    // Hamburger menu toggle
    const hambutton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");
  
    hambutton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      hambutton.classList.toggle("open");
    });
  
  
  });

// Open dialogs on link click
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const modalId = link.getAttribute("href").replace("#", ""); // Extract modal ID
    const dialog = document.getElementById(modalId); // Find the corresponding dialog
    if (dialog) {
      dialog.showModal(); // Open the dialog
    } else {
      console.error(`Dialog with ID "${modalId}" not found.`);
    }
  });
});

// Close dialogs on button click
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.querySelector("button").addEventListener("click", () => dialog.close());
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // Select the form element
  const timestampField = document.getElementById("timestamp"); // Select the hidden timestamp field

  if (form && timestampField) {
    // Ensure the timestamp is set just before the form is submitted
    form.addEventListener("submit", () => {
      timestampField.value = new Date().toISOString();
    });
  }
});

// Extract form data from the URL query string
const urlParams = new URLSearchParams(window.location.search);

// Dynamically display user-provided inputs
document.getElementById("displayFirstName").textContent = urlParams.get("firstName") || "N/A";
document.getElementById("displayLastName").textContent = urlParams.get("lastName") || "N/A";
document.getElementById("displayEmail").textContent = urlParams.get("email") || "N/A";
document.getElementById("displayMobile").textContent = urlParams.get("mobile") || "N/A";
document.getElementById("displayOrganizationTitle").textContent = urlParams.get("orgTitle") || "N/A";
document.getElementById("displayOrganizationName").textContent = urlParams.get("organization") || "N/A";
document.getElementById("displayMembershipLevel").textContent = urlParams.get("membershipLevel") || "N/A";
document.getElementById("displayOrganizationDescription").textContent = urlParams.get("orgDescription") || "N/A";
document.getElementById("displayTimestamp").textContent = urlParams.get("timestamp") || "N/A";




// Animate Membership Cards on Page Load
const cards = document.querySelectorAll(".card");

// Loop through each card and apply staggered animation
cards.forEach((card, index) => {
  // Set initial styles for animation
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";

  // Use a timeout to stagger the animations
  setTimeout(() => {
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease"; // Smooth animation
    card.style.opacity = "1"; // Make the card visible
    card.style.transform = "translateY(0)"; // Reset transform
  }, index * 300); // Add a delay for staggered effect
});
