document.addEventListener("DOMContentLoaded", () => {
  // Update Footer
  function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").innerHTML = `&copy; ${currentYear} ✿ Daniel Oyeniyi ✿ Nigeria`;
    document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;
  }

  updateFooter();

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');

});

  // Courses Array
  const courses = [
    {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: ['Python'],
      completed: true
    },
    {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
      technology: ['HTML', 'CSS'],
      completed: true
    },
    {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions.',
      technology: ['Python'],
      completed: true
    },
    {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects, encapsulation, inheritance, and polymorphism.',
      technology: ['C#'],
      completed: false
    },
    {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'Students will learn to create dynamic websites that use JavaScript to respond to events.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      completed: true
    },
    {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'Focus on user experience, accessibility, compliance, and performance optimization.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      completed: false
    }
  ];

  // Function to Display Course Buttons
  function displayCourseButtons(category) {
    const buttonContainer = document.getElementById("certificate-section");
    buttonContainer.innerHTML = ""; // Clear previous buttons

    const filteredCourses = category === "all"
      ? courses
      : courses.filter(course => course.subject === category);

    filteredCourses.forEach((course, index) => {
      const button = document.createElement("button");
      button.textContent = `${course.subject} ${course.number}`;
      button.className = course.completed ? "completed-button" : "not-completed-button"; // Dynamic class based on completion status
      button.addEventListener("click", () => displayCourseDetails(index));
      buttonContainer.appendChild(button);
    });
  }

  // Function to Display Course Details
  function displayCourseDetails(index) {
    const course = courses[index];
    const detailSection = document.getElementById("course-details");
    detailSection.innerHTML = `
      <h3>${course.title}</h3>
      <p><strong>Subject:</strong> ${course.subject}</p>
      <p><strong>Number:</strong> ${course.number}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Certificate:</strong> ${course.certificate}</p>
      <p><strong>Description:</strong> ${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
      <p><strong>Status:</strong> ${
        course.completed ? "Completed" : "Not Completed"
      }</p>
    `;
  }

  // Event Listener for Category Buttons
  const buttons = document.querySelectorAll(".course-button .button");
  buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      const category = event.target.getAttribute("data-category");
      displayCourseButtons(category);
    });
  });

  // Initial Display
  displayCourseButtons("all");
});
