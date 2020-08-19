(function() {
    "use strict"
const navBarButtonRef = document.querySelector('[data-navbar-collapse]');

navBarButtonRef.addEventListener('mouseover',function (){
    const getListElement = document.querySelector('[data-navbar-list]');
    console.log(getListElement);
    getListElement.classList.replace("navbar-nav-list","navbar-nav-list__visible");
    navBarButtonRef.style.backgroundColor="orange";

});
navBarButtonRef.addEventListener('mouseout',function(){
    const getListElement = document.querySelector('[data-navbar-list]');
    getListElement.classList.replace("navbar-nav-list__visible","navbar-nav-list");
    navBarButtonRef.style.backgroundColor="black";
});

const list = document.querySelector('.navbar-nav-list');
// This handler will be executed every time the cursor
// is moved over a different list item
list.addEventListener("mouseover", function( event) {   
  // highlight the mouseover target
  event.target.style.color = "orange";
  const widthElem = event.target.innerHTML.length * 8;
  const elem = event.target.nextElementSibling;

  if(elem.classList[0] === 'wrapper'){
  move(elem, widthElem);
   // reset the color after a short delay
  setTimeout(function() {
    elem.style.backgroundColor = "";
    event.target.style.color = "#ebe7c2";
  }, 1000);
}}, false);

var i = 0;
function move(elem, widthElem) {
  if (i == 0) {
    i = 1;

    var width = 0;
    var id = setInterval(frame, 1);
    function frame() {
      if (width >= widthElem) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        console.log(elem);
        elem.style.width = width + "px";
        elem.style.backgroundColor="orange";
      }
    }
  }
}
}());

