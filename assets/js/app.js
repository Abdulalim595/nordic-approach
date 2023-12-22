$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
  });
  
  $(".morten__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 22,
    dots: false,
    nav: true,
    navText: [
      '<span><i class="fa-regular fa-angle-left"></i></span>',
      '<span><i class="fa-regular fa-angle-right"></i></span>',
    ],
    
  });

});





let search = document.querySelector(".search");
let close =document.querySelector(".close");
let searchArea =document.querySelector(".search__area");
let main =document.querySelector(".main");
let notification =document.querySelector(".notification");
let notificationArea =document.querySelector(".notification__area");
let bodyOverlay =document.querySelector(".body__overlay");
let findFilter =document.querySelector(".find__filter");
let fCount =document.querySelector(".f_count");
let offerDisplay =document.querySelector(".offer__display");
let offerFilter =document.querySelector(".offer__filter");


const minus1 =document.querySelector(".minus1"),
   num1 =document.querySelector(".num1"),
   plus1 =document.querySelector(".plus1"),
   minus2 =document.querySelector(".minus2"),
   num2 =document.querySelector(".num2"),
   plus2 =document.querySelector(".plus2")

    let a = 1;

    plus1.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? + a : a;
  num1.innerText = a;
})

minus1.addEventListener("click", ()=>{
  if (a > 1){
    a--;
  a = (a < 10) ? + a : a;
  num1.innerText = a;
  }
});


plus2.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? + a : a;
  num2.innerText = a;
})

minus2.addEventListener("click", ()=>{
  if (a > 1){
    a--;
  a = (a < 10) ? + a : a;
  num2.innerText = a;
  }
})



search.addEventListener("click", function() {
  close.classList.toggle("active")
});
search.addEventListener("click", function() {
  search.classList.toggle("active")
});
close.addEventListener("click", function() {
  search.classList.toggle("active")
});

close.addEventListener("click", function() {
  close.classList.toggle("active")
});
search.addEventListener("click", function() {
  searchArea.classList.toggle("active")
});
close.addEventListener("click", function() {
  searchArea.classList.toggle("active")
});
search.addEventListener("click", function() {
  main.classList.toggle("active")
});
close.addEventListener("click", function() {
  main.classList.toggle("active")
});

notification.addEventListener("click", function() {
  notificationArea.classList.toggle("active")
});
notification.addEventListener("click", function() {
  bodyOverlay.classList.toggle("active")
});
bodyOverlay.addEventListener("click", function() {
  notificationArea.classList.toggle("active")
});
bodyOverlay.addEventListener("click", function() {
  bodyOverlay.classList.toggle("active")
});

findFilter.addEventListener("click", function() {
  fCount.classList.toggle("active")
});

findFilter.addEventListener("click", function() {
  offerDisplay.classList.toggle("active")
});

findFilter.addEventListener("click", function() {
  offerFilter.classList.toggle("active")
});




