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
    const hambutton = document.querySelector("#button");
    const navigation = document.querySelector(".navigation");
  
    hambutton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      hambutton.classList.toggle("open");
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
           
            // Add more companies if needed...
          ],
        };
      
        const renderHomePageCompanies = () => {
          const container = document.getElementById("home-company-cards");
      
          // Limit to only the first three companies
          data.companies.slice(0, 3).forEach((company) => {
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
      
  
  
  });

