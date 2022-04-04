// Menu-Mobile

// hamburger menu

const navBtn = document.querySelector(".nav-mobile > .btn");
const activeHeader = document.querySelector("header");
const navUl = document.querySelectorAll(".nav-desktop li");


const barsBtn = document.querySelector(".btn > .fa-solid");

//event handler
function showHiddenMenu() {
  if (activeHeader.classList.contains("active-header")) {
    activeHeader.classList.remove("active-header");
    barsBtn.classList.replace("fa-times","fa-bars")
  } else {
    activeHeader.classList.add("active-header");
    barsBtn.classList.replace("fa-bars","fa-times");
  }
}

//register event handler
navUl.forEach(a => { a.addEventListener('click',function(){
    activeHeader.classList.remove('active-header');
    barsBtn.classList.replace("fa-times","fa-bars");
    })})

navBtn.addEventListener("click", showHiddenMenu);
