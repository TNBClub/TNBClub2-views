
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // document.getElementById("main-header").style.fontSize = "30px";
    document.getElementById("main-header").classList.add("scrolled");


  } else {
    // document.getElementById("main-hedear").style.fontSize = "90px";
    document.getElementById("main-header").classList.remove("scrolled");


  }
}
