// Menu-Mobile

// hamburger menu

const navBtn = document.querySelector('.nav-mobile > .btn');
const activeHeader = document.querySelector('header');
const navUl = document.querySelectorAll('.nav-desktop li');

const barsBtn = document.querySelector('.btn > .fa-solid');

// event handler
function showHiddenMenu() {
  if (activeHeader.classList.contains('active-header')) {
    activeHeader.classList.remove('active-header');
    barsBtn.classList.replace('fa-times', 'fa-bars');
  } else {
    activeHeader.classList.add('active-header');
    barsBtn.classList.replace('fa-bars', 'fa-times');
  }
}

// register event handler
navUl.forEach((a) => {
  a.addEventListener('click', () => {
    activeHeader.classList.remove('active-header');
    barsBtn.classList.replace('fa-times', 'fa-bars');
  });
});

navBtn.addEventListener('click', showHiddenMenu);


// Generate card content dynamically


const cardsObj = [

{
  title: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on rails", "CSS", "JavaSc0ript", "HTML"]
  ,projectBtn : "See Project",
}
,{
  title: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on rails", "CSS", "JavaSc0ript", "HTML"]
  ,projectBtn : "See Project",
},{
  title: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on rails", "CSS", "JavaSc0ript", "HTML"]
  ,projectBtn : "See Project",

},{
  title: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on rails", "CSS", "JavaSc0ript", "HTML"]
  ,projectBtn : "See Project",
},{
  title: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on rails", "CSS", "JavaSc0ript", "HTML"]
  ,projectBtn : "See Project",
},{
  title: "Multi-Post Stories Gain+Glory",
  technologies: ["Ruby on rails", "CSS", "JavaSc0ript", "HTML"]
  ,projectBtn : "See Project",
},
]

//get card container

const cardContainer = document.querySelector(".card-container");


//create card

const cardTemplate = cardsObj.forEach((obj)=>{
  let template = document.createElement('ul');
template.innerHTML = `<li class="card-work">
<div class="img-placeholder"></div>
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
</li>`
cardContainer.appendChild(template);


}) 

//create popup 
const cardButtons = document.querySelectorAll(".see-project") 
const activePopUp = document.querySelector(".pop-up");

// console.log(activePopUp.innerHTML)
cardButtons.forEach(btn => {
btn.addEventListener('click',function(){
activePopUp.classList.toggle("active")
})
}) 



