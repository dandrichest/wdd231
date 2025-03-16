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
  
    // Data for Companies
    const data = {
            "companies": [
              {
                "name": "Autodex Nigeria Limited",
                "address": "9 Acme Road, Ogba, Ikeja, Lagos, Nigeria",
                "phonenumber": "+234 812 9970 483",
                "websiteURL": "https://www.autodexnigeria.com/",
                "imageurl": "https://www.autodexnigeria.com/wp-content/uploads/2018/04/Autodex-Logo.png",
                "membershiplevel": "Platinum"
              },
              {
                "name": "Seed and Tuber Agrovac (STA)",
                "address": "20 Usman Sarki Crescent, Utako, FCT, Abuja, Nigeria",
                "phonenumber": "+234 706 281 8284",
                "websiteURL": "https://stagrovac.biz/",
                "imageurl": "https://stagrovac.biz/wp-content/uploads/2024/04/300x100Logo.jpg",
                "membershiplevel": "Platinum"
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
                "membershiplevel": "Platinum"
              },
              {
                "name": "Multi-net Group Ltd",
                "address": "10B Ona Crescent, Lake Chad, Maitama, Abuja.",
                "phonenumber": "+234-803-203-8215",
                "websiteURL": "https://www.multinetnigeria.com/",
                "imageurl": "https://www.businesslist.com.ng/img/ng/g/_1716796094-99-multi-net-group-ltd.png",
                "membershiplevel": "Platinum"
              },
              {
                "name": "TONGSTON ENTREPRENEURSHIP GROUP",
                "address": "4th Floor, Tower C, Churchgate, Central Business District, Abuja, Nigeria",
                "phonenumber": "+234 290 700 3084",
                "websiteURL": "https://tongston.com/",
                "imageurl": "https://tongston.com/_next/image?url=%2Fassets%2Fimages%2Flogos%2Ftlogo.png&w=256&q=75",
                "membershiplevel": "Platinum"
              }
            ]
          
    };
  
    // Render the company directory
    const renderCompanies = () => {
      const container = document.getElementById("company-directory");
      data.companies.forEach(company => {
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
        container.appendChild(card);
      });
    };
  
    renderCompanies();
  });
  