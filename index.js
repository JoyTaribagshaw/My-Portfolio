import { mobilePopupData } from './data.js';

const navtext = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.menubar');
const closeBtn = document.querySelector('.closebtn');
const menuLists = document.querySelectorAll('.menu-list');

hamburger.addEventListener('click', () => {
  navtext.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navtext.style.display = 'none';
});

for (let i = 0; i < menuLists.length; i += 1) {
  menuLists[i].addEventListener('click', () => {
    navtext.style.display = 'none';
  });
}

// document.getElementById('seeProjectButton').addEventListener('click', (event) => {
//   event.preventDefault();
//   const mobilePopup = document.getElementById('mobile-popup');
//   mobilePopup.style.display = 'block';
// });
// document.getElementById('mobile-popup').addEventListener('click', (e) => {
//   e.preventDefault();
//   if (e.target.classList.contains('popup-close')) {
//     document.getElementById('mobile-popup').style.display = 'none';
//   }
// });

// function getPopupHtml() {
//   let popHtml = '';

//   mobilePopupData.forEach((data) => {
//     popHtml += `
//     <div class="overlay">
//     <div class="mobile-project-title">
//       <h3 class="popup-title">${data.name}</h3>
//       <img src="./Assets/close.png" alt="close" class="popup-close"/>
//     </div>

//     <div class="popup-texts">
//       <h3 class="popup-bold-text">CANOPY</h3>
//       <div class="dot"></div>
//       <p class="popup-text-1">Back End Dev</p>
//       <div class="dot"></div>
//       <p class="popup-text-2">2015</p>
//     </div>

//   <div class="pop-img">
//     <img
//           src="${data.featuredImage}"
//           class="popup-img" alt="image"/>
//   </div>

//   <div class="popup-flex">
//   <div class="popup-text">
//     <p>${data.description}</p>
//   </div>

//   <div class="pop">
//   <div class="popup-list">
//     <ul class="tags-popup">
    
//       ${data.technologies.map((tech) => `<li class="${tech.class}">${tech.title.toLowerCase()}</li>`).join('')}
//     </ul>
//   </div>

//   <hr>

//   <div class="button-div">
//     <a href="#" class="button-popup1">
//     <button class="button-popup">
//     <span>See Live</span> <img src="./Assets/icon.png" alt="popup-image" class="btn-popup-img"/>
//     </button>
//     </a>
//     <a href="#" class="button-popup1">
//     <button class="button-popup"><span>See Source</span> <img src="./Assets/vector2.png" alt="popup-image" class="btn-popup-img" />
//     </button></a>
//   </div>
//   </div>
//   </div>
//   <div>
//   `;
//   });

//   return popHtml;
// }

// function renderMobilePopup() {
//   document.getElementById('mobile-popup').innerHTML = getPopupHtml();
// }

// renderMobilePopup();

// Form validation

const form = document.querySelector('.form-valid');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const checkInputCase = emailInput.value.toLowerCase();

  if (emailInput.value !== checkInputCase) {
    const errorMessage = document.querySelector('.error');
    errorMessage.style.display = 'block';
  } else {
    document.querySelector('.error').style.display = 'none';
    e.target.submit();
  }
});

// local storage
const email = document.querySelector('input[name="form_email"]');
const username = document.querySelector('input[name="form_name"]');
const message = document.querySelector('textarea[name="form_message"]');

if (localStorage.getItem('contact-data') !== null) {
  const data = JSON.parse(localStorage.getItem('contact-data'));
  email.value = data.email;
  username.value = data.username;
  message.value = data.message;
}

const contactData = {
  email: email.value,
  username: username.value,
  message: message.value,
};

email.addEventListener('change', (e) => {
  contactData.email = e.target.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

username.addEventListener('change', (e) => {
  contactData.username = e.target.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

message.addEventListener('change', (e) => {
  contactData.message = e.target.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});