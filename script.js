let clickMenu = document.querySelector('#header');
let toggle = document.querySelector('.toggle');
let mask = document.querySelector('#mask');
let clickContents = document.querySelector('#open-contents');

toggle.onclick = () => {
  clickMenu.classList.toggle('open');
}

mask.onclick = () => {
  clickMenu.classList.toggle('open');
}

clickContents.onclick = () => {
  clickMenu.classList.toggle('open');
}