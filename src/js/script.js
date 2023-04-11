// ANCHOR name add pop up 
const btn = document.getElementById('enterName');
console.log(btn); //null

btn.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  btn.textContent = `Welcome to hell ${name}`;
  console.log("hello " + name);
}
// TODO Floating menu script
// ANCHOR Floating menu 

// Carosel 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
const options = {
  containerWidth: 700,
  itemWidth: 700,
  transform: '0.25s ease',
};