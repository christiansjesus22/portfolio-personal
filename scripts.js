


var text = ["FRONT / END", "DESING GRAPHICS", "VÍDEO EDITION"];
var counter = 0;
var inst = setInterval(change, 4000);

function change() {
    document.getElementById("changeText").innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}