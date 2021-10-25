let cnv;
let img;

function preload(){
  img = loadImage('img/shamz.png');
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketchbook2');

  image(img, 0,0);
}



function draw() {
  background(0, 0, 0);
  image(img, 150, 175, 150, 220);
  rect(0, mouseY, 400, 10);
  fill(255,0,0);
   if (0 < mouseX && mouseY > 250) {
    fill(0,255,0);
    textSize(20);
    fill(0, 255, 0);
    textFont('Orbitron');
    text('PASS', 170, 80);
  }


  noStroke();
}

function act(){
  rect(400,400, 400, 400);
  fill(0,255,0);
  noStroke();

}
