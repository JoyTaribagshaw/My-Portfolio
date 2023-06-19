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