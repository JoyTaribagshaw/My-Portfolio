import { mobilePopupData } from "./data.js";

const navtext = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".menubar");
const closeBtn = document.querySelector(".closebtn");
const menuLists = document.querySelectorAll(".menu-list");
// const mobilePopup = document.querySelector("#mobile-popup");

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

function getPopupHtml() {
  let popHtml = ``;

  mobilePopupData.forEach(function (data) {
    popHtml += `
    <div class="mobile-project-title">
      <h3 class="project-title">Tonic</h3>
      <img src="${data.featuredImage}" alt="close" class="popup-close"/>
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
          src="background-svg\Snapshoot Portfolio.svg"
          class="popup-img" alt="image"/>
  </div>

  <div class="popup-text">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
  </div>

  <div class="popup-list">
    <ul class="tags-popup">
      <li class="html">HTML</li>
      <li class="css">CSS</li>
      <li class="js">JavaScript</li>
    </ul>
  </div>

  <hr>

  <div class="button-div">
    <a href="#" class="button-popup1">See Live <img src="Assets\Icon.png" alt="popup-image" class="btn-popup-img"/></a>
    <a href="#" class="button-popup2">See Source <img src="Assets\Vector2.png" alt="popup-image" class="btn-popup-img" /></a>
  </div>
  `
  })

  return popHtml;
}

function renderMobilePopup() {
  document.getElementById('mobile-popup').innerHTML = getPopupHtml();
}

renderMobilePopup();
