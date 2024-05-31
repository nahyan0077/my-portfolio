"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {
//   testimonialsItem[i].addEventListener("click", function () {
//     modalImg.src = this.querySelector("#data-testimonials-avatar").src;
//     modalImg.alt = this.querySelector("#data-testimonials-avatar").alt;
//     modalTitle.innerHTML = this.querySelector(
//       "#data-testimonials-title"
//     ).innerHTML;
//     modalText.innerHTML = this.querySelector(
//       "#data-testimonials-text"
//     ).innerHTML;
//     modalDate.innerHTML = this.querySelector(
//       "#data-testimonials-date"
//     ).innerHTML;
//     modalCourse.innerHTML = this.querySelector(
//       "#data-testimonials-course"
//     ).innerHTML;

//     testimonialsModalFunc();
//   });
// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// contacts data
const contactsData = [
  {
    ionic: "mail-outline",
    title: "Email",
    link: "mailto:aufaikrimah@gmail.com",
    name: "aufaikrimah@gmail.com",
  },
  {
    ionic: "logo-github",
    title: "GitHub",
    link: "https://github.com/aufaikrimaa",
    name: "github.com/aufaikrimaa",
  },
  {
    ionic: "logo-linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aufa-ikrimah/",
    name: "linkedin.com/in/aufa-ikrimah/",
  },
  {
    ionic: "location-outline",
    title: "Location",
    link: "https://maps.app.goo.gl/octtXjW5Pgmh6Y4X8",
    name: "Central Java, Indonesia",
  },
];

const contactsContainer = document.querySelector(".contacts-list");

contactsData.forEach((data) => {
  const contactsHTML = `<div class="contact-item">
  <div class="icon-box">
    <ion-icon name="${data.ionic}"></ion-icon>
  </div>
  <div class="contact-info">
    <p class="contact-title">${data.title}</p>
    <a
      href="${data.link}"
      class="contact-link"
      target="_blank"
      >${data.name}</a
    >
  </div>
</div>`;

  contactsContainer.innerHTML += contactsHTML;
});

// tech stack data
const techData = [
  "./assets/images/node-js.svg",
  "./assets/images/reactjs.svg",
  "./assets/images/vite.svg",
  "./assets/images/expressjs.svg",
  "./assets/images/tailwind.svg",
  "./assets/images/bootstrap.svg",
  "./assets/images/mysql.svg",
  "./assets/images/mongodb.svg",
  "./assets/images/laravel.svg",
  "./assets/images/python.svg",
];

const techContainer = document.querySelector(".service-list");

techData.forEach((data) => {
  const techHTML = `<div class="service-item">
  <div class="service-icon-box">
    <img
      src="${data}"
      alt="design icon"
      width="48"
    />
  </div>
</div>`;

  techContainer.innerHTML += techHTML;
});

// course data

const courseData = [
  {
    image: "./assets/images/logo-pi.svg",
    track: "Perempuan Inovasi",
    date: "October, 2023 - present",
    name: "Full Stack Web Development",
    content:
      "Front-end : ReactJs, Tailwind, Bootstrap, Redux. Back-end: ExpressJS, MySQL, MongoDB",
    link: "https://drive.google.com/file/d/1Z_yzOpTfeV7IA5hoC3XCx4nFxkpfFvQV/view",
    credentials: "see credentials &gt&gt",
  },
  {
    image: "./assets/images/skilvul.svg",
    track: "Skilvul",
    date: "June - September, 2023",
    name: "Web Development",
    content: "Learning web development with HTML, CSS, and Vanilla Javascript",
    link: "https://skilvul.com/paths/web-development-pemula-challenge-based/student/clliuhbqq1ivq01qk3t6ccvi1",
    credentials: "see credentials &gt&gt",
  },
  {
    image: "./assets/images/myskill.svg",
    track: "MySkill",
    date: "September, 2023",
    name: "CSS language",
    content: "",
    link: "https://drive.google.com/file/d/1Wb9P-oJU865Q87xbKDUUO_mgSiZyi4Pn/view?usp=drive_link",
    credentials: "see credentials &gt&gt",
  },
  {
    image: "./assets/images/logo-bnsp.svg",
    track: "BNSP",
    date: "August 02, 2023",
    name: "Software Development",
    content: "Certificate of Competence in the area of Software Development",
    link: "https://drive.google.com/file/d/1PHlPkjjhlYmRcfBzlcRkCyglpLw3XPg7/view?usp=drive_link",
    credentials: "see credentials &gt&gt",
  },
  {
    image: "./assets/images/myskill.svg",
    track: "MySkill",
    date: "May, 2023",
    name: "HTML language",
    content: "",
    link: "https://drive.google.com/file/d/13O7evdLokkKLdPpWny6wbbBnZ777l5qP/view?usp=drive_link",
    credentials: "see credentials &gt&gt",
  },
  {
    image: "./assets/images/code.svg",
    track: "Self learning",
    date: "January - June, 2023",
    name: "Framework Laravel & Library ReactJS",
    content:
      "I built the TourGo App using the Laravel Framework and the ReactJS Library, learning them on my own through the internet",
    link: "",
    credentials: "",
  },
  {
    image: "./assets/images/logo-bsi.svg",
    track: "UBSI University",
    date: "Sept - Dec, 2022",
    name: "Mobile Programming",
    content: "Learning mobile app development with flutter",
    link: "",
    credentials: "",
  },
  {
    image: "./assets/images/logo-bsi.svg",
    track: "UBSI University",
    date: "Sept, 2021 - June, 2022",
    name: "Web Programming",
    content: "Learning web development with CodeIgniter 3",
    link: "",
    credentials: "",
  },
  {
    image: "./assets/images/cisco.svg",
    track: "Cisco Net Academy",
    date: "August, 2021",
    name: "PCAP: Programming Essentials in Python",
    content: "",
    link: "https://drive.google.com/file/d/1fmOyFe1XobPqQRxoas6k1FDxfYQ13hwc/view?usp=drive_link",
    credentials: "see credentials &gt&gt",
  },
  {
    image: "./assets/images/logo-bsi.svg",
    track: "UBSI University",
    date: "March - June, 2021",
    name: "Database System",
    content: "Learning SQL language for database management",
    link: "",
    credentials: "",
  },
  {
    image: "./assets/images/logo-bsi.svg",
    track: "UBSI University",
    date: "August, 2020 - Jan 2021",
    name: "Fundamentals of Python Programming",
    content: "Learning to build programs with the Python language",
    link: "",
    credentials: "",
  },
];

// testimonials variables
const testimonialsItem = document.querySelectorAll("#data-testimonials-item");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");
const modalCourse = document.querySelector("[data-modal-course]");
const modalLink = document.querySelector("[data-modal-link]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

const courseContainer = document.querySelector(".testimonials-list");

function addEventListenersToTestimonialsItems() {
  const testimonialsItems = document.querySelectorAll(
    "#data-testimonials-item"
  );
  testimonialsItems.forEach(function (testimonialsItem) {
    testimonialsItem.addEventListener("click", function () {
      modalImg.src = this.querySelector("#data-testimonials-avatar").src;
      modalImg.alt = this.querySelector("#data-testimonials-avatar").alt;
      modalTitle.innerHTML = this.querySelector(
        "#data-testimonials-title"
      ).innerHTML;
      modalText.innerHTML = this.querySelector(
        "#data-testimonials-text"
      ).innerHTML;
      modalDate.innerHTML = this.querySelector(
        "#data-testimonials-date"
      ).innerHTML;
      modalCourse.innerHTML = this.querySelector(
        "#data-testimonials-course"
      ).innerHTML;
      modalLink.href = this.querySelector("#data-testimonials-link").href;

      testimonialsModalFunc();
    });
  });
}

// Add event listeners to existing testimonials items
addEventListenersToTestimonialsItems();

// Function to add testimonials items and event listeners
function addTestimonialAndEventListener(data) {
  const courseHTML = `<div class="testimonials-item">
    <div class="content-card" id="data-testimonials-item">
      <figure class="testimonials-avatar-box">
        <img src="${data.image}" alt="${data.track}" id="data-testimonials-avatar" />
      </figure>
      <h4 class="h4 testimonials-item-title" id="data-testimonials-title">${data.track}</h4>
      <h5 class="h5" id="data-testimonials-course">${data.name}</h5>
      <time id="data-testimonials-date">${data.date}</time>
      <div class="testimonials-text" id="data-testimonials-text">
        <p>${data.content}</p>
      </div>
      <a href="${data.link}" target="_blank" id="data-testimonials-link" class="course-testimonials-link">${data.credentials}</a>
    </div>
  </div>`;

  courseContainer.innerHTML += courseHTML;
  addEventListenersToTestimonialsItems(); // Add event listener to the newly added testimonial
}

// Add testimonials and event listeners
courseData.forEach(addTestimonialAndEventListener);

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// projects data

const projectsData = [
  {
    id: 1,
    title: "auLibz",
    photo: "./assets/images/auLibz.png",
    lang: "ReactJs, Redux, Tailwind, Google Books API",
    desc: "Online library with over 200 ebooks sourced from Google Books.",
    link: "https://library-app-by-aufa.vercel.app/",
    github: "https://github.com/aufaikrimaa/library-app.git",
    category: "web development",
  },
  {
    id: 2,
    title: "KJTG Company Profile",
    photo: "./assets/images/kjtg.png",
    lang: "ReactJs, Tailwind",
    desc: "Web Profile of Jeep Tour Galunggung Community.",
    link: "https://kjtg0421.netlify.app/",
    github: "https://github.com/aufaikrimaa/kjtg-company-profile.git",
    category: "web development",
  },
  {
    id: 3,
    title: "She Talk",
    photo: "./assets/images/SheTalk.png",
    lang: "ReactJs, Redux, ExpressJS, Bootstrap, MySQL",
    desc: "Discussion forum focusing on sexual and reproductive health.",
    link: "https://shetalk-app.netlify.app/",
    github: "https://github.com/aufaikrimaa/shetalk-app.git",
    category: "web development",
  },
  {
    id: 6,
    title: "Tour Go",
    photo: "./assets/images/tourgo.png",
    lang: "ReactJs, Laravel 8, Bootstrap, MySQL",
    desc: "Platform that connects tour guides and travelers.",
    link: "https://github.com/aufaikrimaa/Aplikasi-TourGo.git",
    github: "https://github.com/aufaikrimaa/Aplikasi-TourGo.git",
    category: "web development",
  },
  {
    id: 4,
    title: "To Do List App",
    photo: "./assets/images/todolist.png",
    lang: "ReactJs, Tailwind, Redux",
    desc: "A simple website for To Do List management.",
    link: "https://todo-list-byaufaa.netlify.app/",
    github: "https://github.com/aufaikrimaa/todolist-fe.git",
    category: "web development",
  },
  {
    id: 5,
    title: "Agtsha",
    photo: "./assets/images/agtsha.png",
    lang: "ReactJs, Tailwind",
    desc: "A website to showcasing the products and links.",
    link: "https://agtsha-id.netlify.app/",
    github: "https://github.com/aufaikrimaa/agtsha.id.git",
    category: "web development",
  },
];

const projectsContainer = document.querySelector(".project-list");

projectsData.forEach((data) => {
  const projectsHTML = `   <div
  class="project-item active"
  data-filter-item
  data-category="${data.category}"
>
  <a
    href="${data.link}"
    target="_blank"
  >
    <figure class="project-img">
      <div class="project-item-icon-box">
        <ion-icon name="open-outline"></ion-icon>
      </div>

      <img
        src="${data.photo}"
        alt="cover"
        loading="lazy"
      />
    </figure>

    <h3 class="project-title">${data.title}</h3>

    <p class="project-category">${data.lang}</p>
  </a>
</div>`;
  projectsContainer.innerHTML += projectsHTML;
});
