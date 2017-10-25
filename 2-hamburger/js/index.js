var topBar = document.querySelector('.bars__first');
var midBar = document.querySelector('.bars__second');
var thirdBar = document.querySelector('.bars__third');
var fourthBar = document.querySelector('.bars__fourth');
var bars = document.querySelector('.bars');

var removeClass = function(elem, className) {
  var regex = new RegExp("\\s?"+className);
  elem.className = elem.className.replace(regex,"");
}

var addClass = function(elem, className) {
    elem.className += " " + className;
}

var toggleActiveClass = function(elem) {
  if(elem.className.indexOf("active") > -1) {
    removeClass(elem,"active");
  } else {
    addClass(elem,"active");
  }
}

bars.addEventListener('click',function(){
  console.log("hey");
  toggleActiveClass(topBar);
  toggleActiveClass(midBar);
  toggleActiveClass(thirdBar);
  toggleActiveClass(fourthBar)
  removeClass(topBar,"no-anim");
  removeClass(midBar,"no-anim");
  removeClass(thirdBar,"no-anim");
  removeClass(fourthBar,"no-anim");
 
});

