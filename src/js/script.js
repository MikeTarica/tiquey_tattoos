// ANCHOR name add pop up 
const btn = document.getElementById('enterName');
console.log(btn); //null

btn.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  btn.textContent = `Welcome to hell ${name}`;
  console.log("hello " + name);
}

const options = {
  containerWidth: 700,
  itemWidth: 700,
  transform: '0.25s ease',
};