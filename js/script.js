/*javascript kod för nedscrollning av boxarna*/
const boxes = document.querySelectorAll('.box'); /*Difenierar vad som ska döljas/visas (Klassen box) */

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4; 

  boxes.forEach((box) => { /* Om box är över en viss höjd kommer den dyka upp, annars är den placerad vid sidan*/
    const boxTop = box.getBoundingClientRect().top;
     
      if (boxTop < triggerBottom){
        box.classList.add('show');
      } else{
        box.classList.remove('show');
      }
   });
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("dropmeny").style.top = "0";
  } else {
    document.getElementById("dropmeny").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
/*Javascript kod för slideshow*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
} /*Difenierar vilken slide som ska flyttas eller vilken man ska bytta till*/

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
