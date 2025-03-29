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
  
  document.addEventListener("DOMContentLoaded", () => {
  const data = {
    companies: [
      {
        name: "Autodex Nigeria Limited",
        address: "9 Acme Road, Ogba, Ikeja, Lagos, Nigeria",
        phonenumber: "+234 812 9970 483",
        websiteURL: "https://www.autodexnigeria.com/",
        imageurl: "https://www.autodexnigeria.com/wp-content/uploads/2018/04/Autodex-Logo.png",
        membershiplevel: "Platinum",
      },
      {
        name: "Seed and Tuber Agrovac (STA)",
        address: "20 Usman Sarki Crescent, Utako, FCT, Abuja, Nigeria",
        phonenumber: "+234 706 281 8284",
        websiteURL: "https://stagrovac.biz/",
        imageurl: "https://stagrovac.biz/wp-content/uploads/2024/04/300x100Logo.jpg",
        membershiplevel: "Platinum",
      },
                    {
                "name": "United Healthcare International LTD",
                "address": "7, Jaba close, opp. FCDA Ministers’ gate, Area 11, Garki, Abuja.",
                "phonenumber": "+234 803 693 4220",
                "websiteURL": "https://unitedhealthcare-ng.com/",
                "imageurl": "https://unitedhealthcare-ng.com/wp-content/uploads/2022/12/logo-blue.svg",
                "membershiplevel": "Platinum"
              },
              {
                "name": "Ubacle Group",
                "address": "House CA8, Lavender Close, D' Mayors Estate APO Legislative, Abuja.",
                "phonenumber": "+234 913 600 0052",
                "websiteURL": "https://ubaclegroup.com/",
                "imageurl": "https://ubaclegroup.com/wp-content/uploads/2022/10/Ubacle-logo.png",
                "membershiplevel": "Platinum"
              },
              {
                "name": "SOWFOODS Nigeria",
                "address": "ZEIN GULF GARDEN AND PARK, PLOT 1196B Und St. Jabi, Abuja",
                "phonenumber": "+234 911 302 1354",
                "websiteURL": "https://sowfoods.ng/",
                "imageurl": "https://sowfoods.ng/wp-content/uploads/elementor/thumbs/Sow-logo-nigeria-1-pyu08an4k1ls8dhu8hzx4mwga2f5b741ix8gi9aeo6.png",
                "membershiplevel": "Gold"
              },
              {
                "name": "Multi-net Group Ltd",
                "address": "10B Ona Crescent, Lake Chad, Maitama, Abuja.",
                "phonenumber": "+234-803-203-8215",
                "websiteURL": "https://www.multinetnigeria.com/",
                "imageurl": "https://www.businesslist.com.ng/img/ng/g/_1716796094-99-multi-net-group-ltd.png",
                "membershiplevel": "Gold"
              },
              {
                "name": "TONGSTON ENTREPRENEURSHIP GROUP",
                "address": "4th Floor, Tower C, Churchgate, Central Business District, Abuja, Nigeria",
                "phonenumber": "+234 290 700 3084",
                "websiteURL": "https://tongston.com/",
                "imageurl": "https://tongston.com/_next/image?url=%2Fassets%2Fimages%2Flogos%2Ftlogo.png&w=256&q=75",
                "membershiplevel": "Gold"
              }

    ],
  };

  // Render both Card View and List View
  const renderCompanies = () => {
    const cardContainer = document.getElementById("company-directory");
    const listContainer = document.getElementById("company-list");

data.companies.forEach((company) => {
  // Card View
  const card = document.createElement("div");
  card.className = "company-card";
  card.innerHTML = `
    <img src="${company.imageurl}" alt="${company.name} Logo">
    <h2>${company.name}</h2>
    <p><strong>Address:</strong> ${company.address}</p>
    <p><strong>Phone:</strong> ${company.phonenumber}</p>
    <p><strong>Membership Level:</strong> ${company.membershiplevel}</p>
    <p><a href="${company.websiteURL}" target="_blank">Visit Website</a></p>
  `;
  cardContainer.appendChild(card);

  // List View (One-line format)
  const listItem = document.createElement("div");
  listItem.className = "list-item";
  listItem.innerHTML = `
    <img src="${company.imageurl}" alt="${company.name} Logo">
    <h2>${company.name}</h2>
    <p>${company.address} | ${company.phonenumber} | ${company.membershiplevel}</p>
    <a href="${company.websiteURL}" target="_blank">Visit Website</a>
  `;
  listContainer.appendChild(listItem);
});

  };

  // Show Card View
  const showCardView = () => {
    document.getElementById("company-directory").style.display = "grid";
    document.getElementById("company-list").style.display = "none";
  };

  // Show List View
  const showListView = () => {
    document.getElementById("company-directory").style.display = "none";
    document.getElementById("company-list").style.display = "block";
  };

  // Render the directory data
  renderCompanies();

  // Assign functions globally for buttons
  window.showCardView = showCardView;
  window.showListView = showListView;
});

document.addEventListener("DOMContentLoaded", () => {
      const data = {
        companies: [
          {
            name: "Autodex Nigeria Limited",
            address: "9 Acme Road, Ogba, Ikeja, Lagos, Nigeria",
            phonenumber: "+234 812 9970 483",
            websiteURL: "https://www.autodexnigeria.com/",
            imageurl: "https://www.autodexnigeria.com/wp-content/uploads/2018/04/Autodex-Logo.png",
            membershiplevel: "Platinum",
          },
          {
            name: "Seed and Tuber Agrovac (STA)",
            address: "20 Usman Sarki Crescent, Utako, FCT, Abuja, Nigeria",
            phonenumber: "+234 706 281 8284",
            websiteURL: "https://stagrovac.biz/",
            imageurl: "https://stagrovac.biz/wp-content/uploads/2024/04/300x100Logo.jpg",
            membershiplevel: "Platinum",
          },
          {
            name: "United Healthcare International LTD",
            address: "7, Jaba close, opp. FCDA Ministers’ gate, Area 11, Garki, Abuja.",
            phonenumber: "+234 803 693 4220",
            websiteURL: "https://unitedhealthcare-ng.com/",
            imageurl: "https://unitedhealthcare-ng.com/wp-content/uploads/2022/12/logo-blue.svg",
            membershiplevel: "Platinum",
          },
          {
            name: "SOWFOODS Nigeria",
            address: "ZEIN GULF GARDEN AND PARK, PLOT 1196B Und St. Jabi, Abuja",
            phonenumber: "+234 911 302 1354",
            websiteURL: "https://sowfoods.ng/",
            imageurl: "https://sowfoods.ng/wp-content/uploads/elementor/thumbs/Sow-logo-nigeria-1-pyu08an4k1ls8dhu8hzx4mwga2f5b741ix8gi9aeo6.png",
            membershiplevel: "Gold",
          },
          {
            name: "Multi-net Group Ltd",
            address: "10B Ona Crescent, Lake Chad, Maitama, Abuja.",
            phonenumber: "+234-803-203-8215",
            websiteURL: "https://www.multinetnigeria.com/",
            imageurl: "https://www.businesslist.com.ng/img/ng/g/_1716796094-99-multi-net-group-ltd.png",
            membershiplevel: "Gold",
          },
          {
            name: "TONGSTON ENTREPRENEURSHIP GROUP",
            address: "4th Floor, Tower C, Churchgate, Central Business District, Abuja, Nigeria",
            phonenumber: "+234 290 700 3084",
            websiteURL: "https://tongston.com/",
            imageurl: "https://tongston.com/_next/image?url=%2Fassets%2Fimages%2Flogos%2Ftlogo.png&w=256&q=75",
            membershiplevel: "Gold",
          }
        ],
      };

      const renderHomePageCompanies = () => {
        const container = document.getElementById("home-company-cards");
        container.innerHTML = ""; // Clear any existing cards

        // Shuffle the companies array
        const shuffledCompanies = data.companies.sort(() => Math.random() - 0.5);

        // Pick the first three companies from the shuffled array
        shuffledCompanies.slice(0, 3).forEach((company) => {
          const card = document.createElement("div");
          card.className = "home-company-card";
          card.innerHTML = `
            <img src="${company.imageurl}" alt="${company.name} Logo">
            <h2>${company.name}</h2>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phonenumber}</p>
            <p><strong>Membership Level:</strong> ${company.membershiplevel}</p>
            <p><a href="${company.websiteURL}" target="_blank">Visit Website</a></p>
          `;
          container.appendChild(card);
        });
      };

      renderHomePageCompanies();
    });
// Weather 
const apiKey = 'f90935b0f1119ccbdabfb84ede33aaf6';
const city = 'Abuja';

// API Endpoints
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

// Fetch and display current weather
async function fetchCurrentWeather() {
  try {
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();

    // Update current weather details
    document.getElementById('current-temp').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('current-condition').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('current-details').textContent = `Humidity: ${data.main.humidity}%,`;
    document.getElementById('current-details-2').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    // Add weather icon
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    document.getElementById('current-temp').textContent = 'Unable to fetch weather data.';
    document.getElementById('current-condition').textContent = '';
    document.getElementById('current-details').textContent = '';
    document.getElementById('current-details-2').textContent = '';
    document.getElementById('weather-icon').src = '';
  }
}

// Fetch and display 3-day weather forecast
async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();
    const forecastList = document.getElementById('forecast-list');

    // Generate labels for today, tomorrow, and the day after
    const labels = [
      'Today',
      'Tomorrow',
      new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long' })
    ];

    // Populate forecast data
    forecastList.innerHTML = labels.map((label, index) => {
      const forecast = data.list[index * 8]; // Roughly 8 data points per day (3-hour intervals)
      return `<li><span class="day">${label}</span>: <strong>${forecast.main.temp}°C</strong></li>`;
    }).join('');
  } catch (error) {
    console.error('Error fetching forecast:', error);
    document.getElementById('forecast-list').innerHTML = '<li>Unable to fetch forecast data.</li>';
  }
}



// Fetch all data
fetchCurrentWeather();
fetchForecast();
fetchWeatherEvents();

