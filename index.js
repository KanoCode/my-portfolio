// Menu-Mobile

// hamburger menu

const navBtn = document.querySelector(".nav-mobile > .btn");
const activeHeader = document.querySelector("header");

const barsBtn = document.querySelector(".btn > .fa-solid");

//event handler
function showHiddenMenu() {
  if (activeHeader.classList.contains("active-header")) {
    activeHeader.classList.toggle("active-header");
    barsBtn.classList.replace("fa-times","fa-bars")
  } else {
    activeHeader.classList.toggle("active-header");
    barsBtn.classList.replace("fa-bars","fa-times");
  }
}

//register event handler

navBtn.addEventListener("click", showHiddenMenu);
