
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2");
var button = document.querySelector("button");

button.style.background='linear-gradient('
  + 'to left' + ', ' + color1.value + ', ' + color2.value + ')';
document.body.style.background = 'linear-gradient('
  + 'to right' + ', ' + color1.value + ', ' + color2.value + ')';
css.textContent=document.body.style.background +";";

function addGradient () {
  document.body.style.background = 'linear-gradient('
    + 'to right' + ', ' + color1.value + ', ' + color2.value + ')';
  button.style.background='linear-gradient('
    + 'to left' + ', ' + color1.value + ', ' + color2.value + ')';
  css.textContent=document.body.style.background +";";
}

function getRandomColor() {
  var letters = '0123456789abcdef';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function twoRandomGenerator(){
  var random1 = getRandomColor();
  var random2 = getRandomColor();

  document.querySelector(".color1").value = random1;
  document.querySelector(".color2").value = random2;
  addGradient();
}
color1.addEventListener("input", addGradient);
color2.addEventListener("input", addGradient);
button.addEventListener("click", twoRandomGenerator);
