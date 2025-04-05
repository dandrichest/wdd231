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

const abujafun = [
  {
    "name": "Central Park Abuja",
    "address": "Kur Mohammed Avenue, Plot 174, Abuja, Federal Capital Territory, 9001",
    "description": "A vibrant theme park offering activities like go-karting, paintball, mini-golf, archery, and more. Perfect for families and friends looking for adventure and relaxation.",
    "image": "images/centralparkabuja.webp"
  },
  {
    "name": "Nike Art Gallery Abuja",
    "address": "Kilometre 7.5 Abuja International Airport Road, Piwoyi Village, Abuja, Federal Capital Territory, 905102",
    "description": "A cultural hub showcasing traditional and contemporary Nigerian art, including paintings, sculptures, and crafts. Visitors can also participate in workshops and art tours.",
    "image": "images/nikert-gallery.webp"
  },
  {
    "name": "Millennium Park",
    "address": "Maitama District, Abuja",
    "description": "A serene green space ideal for picnics, leisurely walks, and sightseeing. The park features sculptures, art installations, and beautiful landscapes.",
    "image": "images/millennium-park.webp"
  },
  {
    "name": "Jabi Lake",
    "address": "Jabi District, Abuja",
    "description": "A picturesque lake offering activities like boat rides, fishing, and picnics. Surrounded by restaurants and cafes, making it a great spot for relaxation.",
    "image": "images/jabi-lake.webp"
  },
  {
    "name": "Magicland Amusement Park",
    "address": "Constitution Avenue, Abuja",
    "description": "A family-friendly amusement park with rides, games, and activities for all ages. A great spot for kids and adults alike.",
    "image": "images/magicland-amusement.webp"
  },
  {
    "name": "Aso Rock",
    "address": "Near the Presidential Villa, Abuja",
    "description": "A massive rock formation symbolizing Nigeria’s political power. Visitors can take guided tours to learn about its history and significance.",
    "image": "images/aso-rock.webp"
  },
  {
    "name": "Abuja Arts and Crafts Village",
    "address": "Central Business District, Abuja",
    "description": "A vibrant market showcasing Nigerian crafts, textiles, and souvenirs. A great place to shop for unique items and experience local culture.",
    "image": "images/abujaartsandcrafts.webp"
  },

  {
    "name": "Thought Pyramid Art Centre",
    "address": "18 Libreville Crescent, Wuse II, Abuja",
    "description": "A contemporary art gallery showcasing a wide range of Nigerian and African art. A must-visit for art enthusiasts.",
    "image": "images/thought_pyramid.webp"
  }
]

// Dynamically Render Cards
const container = document.querySelector('.card-container');

abujafun.forEach((card) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = `
    <h2 class="card-title">${card.name}</h2>
    <img src="${card.image}" alt="${card.name}" class="card-image">
    <address class="card-address"><strong>Address:</strong> ${card.address}</address>
    <p class="card-description"><strong>Description:</strong> ${card.description}</p>
  
  `;
  container.appendChild(cardElement);
});

// Sidebar Visit Message
const visitMessageElement = document.getElementById('visit-message');

// Helper function to calculate the number of days between two dates
function calculateDaysBetweenDates(lastVisitDate, currentDate) {
  const msPerDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
  const timeDifference = currentDate - lastVisitDate;
  return Math.floor(timeDifference / msPerDay);
}

// Check and Update Last Visit in localStorage
function displayVisitMessage() {
  const lastVisit = localStorage.getItem('lastVisitDate');
  const currentDate = new Date();

  if (!lastVisit) {
    // First visit
    visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    // Parse the last visit date from localStorage
    const lastVisitDate = new Date(lastVisit);
    const daysBetweenVisits = calculateDaysBetweenDates(lastVisitDate, currentDate);

    if (daysBetweenVisits < 1) {
      visitMessageElement.textContent = "Back so soon! Awesome!";
    } else if (daysBetweenVisits === 1) {
      visitMessageElement.textContent = "You last visited 1 day ago.";
    } else {
      visitMessageElement.textContent = `You last visited ${daysBetweenVisits} days ago.`;
    }
  }

  // Update the last visit date in localStorage
  localStorage.setItem('lastVisitDate', currentDate.toISOString());
}

// Initialize the Visit Message
displayVisitMessage();

