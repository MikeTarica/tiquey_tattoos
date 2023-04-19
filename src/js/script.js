// Slideshow

var slidePosition = 0;
SlideShow(slidePosition);

  // forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

  //  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 3500); // Change image every 7 seconds
} 

