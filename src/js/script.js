// Slideshow

var slidePosition = 0;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {
    slidePosition = 1;
  }
  slides[slidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 3500); // Change image every 7 seconds
}

let userName = "Michael and Michelle";
let userPref = "waterbaording";

userName
  ? console.log(
      `Hello, ${userName} would you like to do these activities ${userPref}?`
    )
  : console.log("Hello");

let userQuestion = "will i get over my fear soon";
console.log(`${userName} has asked -${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

function fun() {
  document.getElementById("result").innerHTML =
    "The function fun() is triggered !";
}

// switch (randomNumber) {
//   case 0:
//     eightBall = "It is certain";
//     break;
//   case 1:
//     eightBall = "It is decidedly so";
//     break;
//   case 3:
//     eightBall = "Reply hazy try again";
//     break;
//   case 4:
//     eightBall = "Cannot predict now";
//     break;
//   case 5:
//     eightBall = "My sources say no";
//     break;
//   case 6:
//     eightBall = "Outlook not so good";
//     break;
//   case 7:
//     eightBall = "Signs point to yes";
//     break;
//   case 8:
//     eightBall = "Signs point to yes but a maybe!";
//     break;
// }
// console.log(`The Magic 8 Ball says ${eightBall}.`);

switch (randomNumber) {
  case 0:
    eightBallName = "Mike";
    break;
  case 1:
    eightBallName = "Leana";
    break;
  case 3:
    eightBallName = "Hellfire";
    break;
  case 4:
    eightBallName = "Alu";
    break;
  case 5:
    eightBallName = "Tammy";
    break;
  case 6:
    eightBallName = "Bainca";
    break;
  case 7:
    eightBallName = "luke";
    break;
  case 8:
    eightBallName = "Diana";
    break;
}
switch (randomNumber) {
  case 0:
    childGender = "male";
    break;
  case 1:
    childGender = "female";
    break;
}
console.log(`Random name for a child ${eightBallName}.`);
console.log(`and sex of the child is ${childGender}` );

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 19;

if (registeredEarly && age > 19) {
  raceNumber += 1000;
}

if (registeredEarly && age > 18) {
  console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
} else if (!registeredEarly && age > 18) {
  // in java script means not
  console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
} else {
  console.log(`Please apprach the registration desk, thanks!`);
}

 // working on name and surname form submission
function myFunction() {
  document.getElementById("frm1").submit();
}
