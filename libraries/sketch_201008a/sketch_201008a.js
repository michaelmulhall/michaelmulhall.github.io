function setup() {
  createCanvas(300, 300);
}
function draw() {
  background('#FEFBF9');
  textFont('fantasy');
  textAlign(CENTER, CENTER);
  textSize(32);
  if (mouseX > width/2 - 72 && mouseY > height/2 - 10 
  && mouseX < width/2 - 50 && mouseY < height/2 + 10) {
    fill('#99928E');
    noStroke();
    rect(70, 130, 170, 46);
    fill('#FEFBF9');
    text("mulh.com", width/2 + 17.5, height/2);
  } else {
    fill('#99928E');   
  }
    text("m", width/2 - 60, height/2);
}
