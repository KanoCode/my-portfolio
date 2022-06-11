// Menu-Mobile

// hamburger menu

const navBtn = document.querySelector(".nav-mobile > .btn");
const activeHeader = document.querySelector("header");
const navUl = document.querySelectorAll(".nav-desktop li");

const barsBtn = document.querySelector(".btn > .fa-solid");

// event handler
function showHiddenMenu() {
  if (activeHeader.classList.contains("active-header")) {
    activeHeader.classList.remove("active-header");
    barsBtn.classList.replace("fa-times", "fa-bars");
  } else {
    activeHeader.classList.add("active-header");
    barsBtn.classList.replace("fa-bars", "fa-times");
  }
}

// register event handler
navUl.forEach((a) => {
  a.addEventListener("click", () => {
    activeHeader.classList.remove("active-header");
    barsBtn.classList.replace("fa-times", "fa-bars");
  });
});

navBtn.addEventListener("click", showHiddenMenu);

// Generate card content dynamically

const cardsObj = [
  {
    title: "Linux Tech conference",
    projectImg:
      '<img src="./assets/capstone-screenshot.png" alt= "project image">',
    technologies: ["Bootstrap", "SCSS", "JavaScript", "HTML"],
    projectBtn: "See Project",
  },
  {
    title: "To-do list application",
    projectImg: `<img src="./assets/kanocode.github.io_todo-list-app_.png" alt="project image" >`,
    technologies: ["Webpack", "CSS", "JavaSc0ript", "HTML"],
    projectBtn: "See Project",
  },
  {
    title: "Math magicians ",
    projectImg: `<img src="./assets/all-devices-black.png" alt="project image" >`,
    technologies: ["React.js", "CSS", "JavaScript", "HTML"],
    projectBtn: "See Project",
  },
  {
    title: "Track your favorite movies ",
    projectImg: `<img src="./assets/Kano-Tah-Movies_dist_.png" alt="project image" >`,
    technologies: ["Webpack", "CSS", "JavaScript", "HTML"],
    projectBtn: "See Project",
  },
  {
    title: "Are you an avid reader",
    projectImg: `<img src="./assets/book-store-app.png" alt="project image" >`,
    technologies: ["React", "CSS", "JavaScript", "HTML"],
    projectBtn: "See Project",
  },
  {
    title: "Track game progress and scores",
    projectImg: `<img src="./assets/Leaderboard.png" alt="project image" >`,
    technologies: ["Ruby on rails", "CSS", "JavaSc0ript", "HTML"],
    projectBtn: "See Project",
  },
];

const popupData = [
  {
    postTitle: "Keeping track of hundreds ofcomponents",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popupImageUrlDesktop: "./assets/capstone-screenshot.png",
    technologiesPopup: [
      "Ruby on rails",
      "CSS",
      "html",
      "Github",
      "Bootstrap",
      "terminal",
      "Codepen",
    ],
    linkLive: "https://kanocode.github.io/Annual-Tech-conference-webpage/",
    linkSource: "https://github.com/KanoCode/Annual-Tech-conference-webpage",
  },
  {
    postTitle: "To-do list application to stay pro-active",
    description:
      "This is a simple webapp that allows a user to keep track of things to do within a day, mark activities that have been done, it also allows a user to delete an activity.",
    popupImageUrlDesktop: "./assets/kanocode.github.io_todo-list-app_.png",
    technologiesPopup: [
      "Webpack",
      "CSS",
      "html",
      "Github",
      "Bootstrap",
      "terminal",
      "Codepen",
    ],
    linkLive: "https://kanocode.github.io/todo-list-app/",
    linkSource: "https://github.com/KanoCode/todo-list-app/",
  },
  {
    postTitle: "Let's do some math with math magicians",
    description:
      "This is a simple webapp that allows a user to keep track of things to do within a day, mark activities that have been done, it also allows a user to delete an activity.",
    popupImageUrlDesktop: "./assets/all-devices-black.png",
    technologiesPopup: [
      "Webpack",
      "CSS",
      "html",
      "Github",
      "Bootstrap",
      "terminal",
      "Codepen",
    ],
    linkLive: "https://boisterous-chimera-2fdfd3.netlify.app/",
    linkSource: "https://github.com/KanoCode/Annual-Tech-conference-webpage",
  },
  {
    postTitle: "All your favorite movies in one place ",
    description:
      "This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 user interfaces",
    popupImageUrlDesktop: "./assets/Kano-Tah-Movies_dist_.png",
    technologiesPopup: [
      "React",
      "CSS",
      "html",
      "Github",
      "Styled-components",
      "terminal",
      "Codepen",
    ],
    linkLive: "https://kanocode.github.io/Kano-Tah-Movies/dist/",
    linkSource: "https://github.com/KanoCode/Kano-Tah-Movies",
  },
  {
    postTitle: "Are you an avid reader? Glad you're here",
    description: `The Bookstore is a web application that allows you to: Display a list of books. Add a book. Remove a selected book. Kindly give it a <i class="fa-solid fa-star"></i> on github it helps me a lot`,
    popupImageUrlDesktop: "./assets/book-store-app.png",
    technologiesPopup: [
      "React",
      "CSS",
      "html",
      "Github",
      "Font-awesome",
      "Netlify",
      "Codepen",
    ],
    linkLive: "https://book-store-appl.herokuapp.com/",
    linkSource: "https://github.com/KanoCode/book-store-app",
  },
  {
    postTitle: "Keep track of the scores on your game, checkout leaderboard",
    description: `The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.. Kindly give it a <i class="fa-solid fa-star"></i> on github it helps me a lot`,
    popupImageUrlDesktop: "./assets/Leaderboard.png",
    technologiesPopup: [
      "Webpack",
      "CSS",
      "html",
      "Github",
      "Font-awesome",
      "Bootstrap",
      "Codepen",
    ],
    linkLive: "https://kanocode.github.io/Leaderboard/",
    linkSource: "https://github.com/KanoCode/Leaderboard",
  },
];

const template = document.createElement("template");

document.body.appendChild(template.content);

const popUp = document.querySelector(".popUp");

// //get card container

const cardContainer = document.querySelector(".card-container");
//create popup
function createPopUp(i) {
  let techStack = "";
  popupData[i].technologiesPopup.forEach((li) => {
    techStack += `<li>${li}</li>`;
  });

  const popupContainer = document.createElement("div");
  popupContainer.className = "popUp active";
  popupContainer.innerHTML = `
 <div class="popup-container">
 <div class="icon"> <i class="fa-solid fa-times"></i> </div>
   <div class="imgPlaceholder">
     <img
       src="${popupData[i].popupImageUrlDesktop}"
       alt=""
       srcset=""
     />
   </div>
   <h3>${popupData[i].postTitle}</h3>
   <ul class="languages">
     ${techStack}
   </ul>
   <p>
   ${popupData[i].description}
   </p>
   <div class="project-btns">
     <button class="see-live">
       <a href="${popupData[i].linkLive}" target="blank">See Live</a>
       <img
         src="./assets/social-media/see-live-icon.svg"
         alt=""
         srcset=""
       />
     </button>
     <button class="see-source">
       <a href="${popupData[i].linkSource}" target="blank">See Source</a>
       <img src="./assets/social-media/Vector.png" alt="" srcset="" />
     </button>
   </div>
 </div>
`;
  cardContainer.append(popupContainer);
}

// create card

cardsObj.forEach((obj) => {
  const template = document.createElement("ul");
  template.innerHTML = `<li class="card-work">
<div class="img-placeholder">
${obj.projectImg.length === 0 ? "" : obj.projectImg}
</div>
<div class="card-details">
  <div class="card-description">
    <h2>${obj.title}</h2>
  </div>
  <ul class="languages">
    <li><h3>${obj.technologies[0]}</h3></li>
    <li><h3>${obj.technologies[1]}</h3></li>
    <li><h3>${obj.technologies[2]}</h3></li>
    <li><h3>${obj.technologies[3]}</h3></li>
  </ul>
  <button type="button" class="see-project">${obj.projectBtn}</button>
</div>
</li>`;
  cardContainer.appendChild(template);
});

const cardButtons = document.querySelectorAll(".see-project");

cardButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    createPopUp(i);
    const closeModal = document.querySelector(".icon > i");
    closeModal.addEventListener("click", () => {
      //remove modal
      cardContainer.removeChild(cardContainer.childNodes[6]);
    });
  });
});

// form validation

const email = document.getElementById("mail");
const error = document.querySelector(".error");
const form = document.querySelector("form");

let checkUppercase;
let regX;

// event listeners

form.addEventListener("submit", (event) => {
  regX = /[A-Z]/g;
  checkUppercase = regX.test(email.value);
  if (checkUppercase) {
    error.textContent = "please use lowercase letters only for email field ";
    event.preventDefault();
  }
});

// Data storage

form.addEventListener("input", () => {
  const formDataObj = {
    firstName: document.querySelector(".first-name").value,
    lastName: document.querySelector(".second-name-input").value,
    email: document.querySelector(".email").value,
    message: document.querySelector(".message").value,
  };
  localStorage.setItem("formData", JSON.stringify(formDataObj));
});

function getItems() {
  const { firstName } = JSON.parse(localStorage.getItem("formData"));

  const { lastName } = JSON.parse(localStorage.getItem("formData"));
  const { email } = JSON.parse(localStorage.getItem("formData"));
  const { message } = JSON.parse(localStorage.getItem("formData"));

  document.querySelector(".first-name").value = firstName;
  document.querySelector(".second-name-input").value = lastName;
  document.querySelector(".email").value = email;
  document.querySelector(".message").value = message;
}

window.addEventListener("load", getItems);

