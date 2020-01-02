$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

let addedTransparent = false
let addedShadow = false

function scrollFunction() {
  if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
    document.getElementsByTagName("nav")[0].classList.remove("transparent")
    document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(255, 255, 255, 0.9)"
    document.getElementsByTagName("nav")[0].classList.remove("z-depth-0")
    if (!addedShadow) {
      document.getElementsByTagName("nav")[0].classList.add("z-depth-1")
      addedShadow = true
    }
    addedTransparent = false
  } else {
    if (!addedTransparent) {
      document.getElementsByTagName("nav")[0].classList.add("transparent")
      document.getElementsByTagName("nav")[0].classList.add("z-depth-0")
      document.getElementsByTagName("nav")[0].classList.remove("z-depth-1")
      addedTransparent = true
      addedShadow = false
    }
  }
}

window.onscroll = function() {scrollFunction()};

