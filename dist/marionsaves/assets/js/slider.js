let slidePosition = 0;
const slides = document.getElementsByClassName('slider');
const totalSlides = slides.lengh;

document.body.style.backgroundColor="yellow";

//Slider
document.
  getElementById('slider_button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });

document.
  getElementById('slider_button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('slide_image--actuel');
    slide.classList.add('slide_image--cache');
  }
  slides[slidePosition].classList.remove('slide_image--cache');
  slides[slidePosition].classList.add('slide_image--actuel');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}



//Routage
document.
  getElementById('slide_image--actuel')
  .addEventListener("click", function() {
    moveToContenuSlide();
  });

function moveToContenuSlide() {
}



  //Parallax
 document.
  getElementByClass('image')
  .addEventListener("mousemove", function() {
    parallax();
  });

function parallax() {
  var scene = document.getElementByClass('image');
  var parallaxInstance = new Parallax(scene,{
  relativeInput: true
});

}
