import { 
  mobilePopupData
 } from "./data.js";

const navtext = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".menubar");
const closeBtn = document.querySelector(".closebtn");
const menuLists = document.querySelectorAll(".menu-list");


hamburger.addEventListener("click", () => {
  navtext.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navtext.style.display = "none";
});

for (let i = 0; i < menuLists.length; i += 1) {
  menuLists[i].addEventListener("click", () => {
    navtext.style.display = "none";
  });
}

document.getElementById('seeProjectButton').addEventListener('click', function (event) {
  event.preventDefault();
  let button = event.target;
  let mobilePopup = document.getElementById('mobile-popup');
  let buttonRect = button.getBoundingClientRect();
  let buttonCenterX = buttonRect.left + buttonRect.width + 1;
  mobilePopup.style.left = buttonCenterX + 'px';
  mobilePopup.style.top = (buttonRect.top - mobilePopup.offsetHeight) + 'px';
  mobilePopup.style.display = 'block';
});
document.getElementById('mobile-popup').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('popup-close')) {
    document.getElementById('mobile-popup').style.display = 'none';
  }
});

function getPopupHtml() {
  let popHtml = ``;

  mobilePopupData.forEach(function (data) {
    popHtml += `
    <div class="mobile-project-title">
      <h3 class="project-title">${data.name}</h3>
      <img src="./Assets/close.png" alt="close" class="popup-close"/>
    </div>

    <div class="texts">
      <h3 class="bold-text">CANOPY</h3>
      <div class="dot"></div>
      <p class="text-1">Back End Dev</p>
      <div class="dot"></div>
      <p class="text-2">2015</p>
    </div>

  <div>
    <img
          src="${data.featuredImage}"
          class="popup-img" alt="image"/>
  </div>

  <div class="popup-text">
    <p>${data.description}</p>
  </div>

  <div class="popup-list">
    <ul class="tags-popup">
    
      ${data.technologies.map((tech) => `<li class="${tech.class}">${tech.title.toLowerCase()}</li>`).join("")}
    </ul>
  </div>

  <hr>

  <div class="button-div">
    <a href="#" class="button-popup1">See Live <img src="./Assets/icon.png" alt="popup-image" class="btn-popup-img"/></a>
    <a href="#" class="button-popup2">See Source <img src="./Assets/vector2.png" alt="popup-image" class="btn-popup-img" /></a>
  </div>
  `
  })

  return popHtml;
}

function renderMobilePopup() {
  document.getElementById('mobile-popup').innerHTML = getPopupHtml();
}

renderMobilePopup();
