let cnv;

function setup() {
  createCanvas(400, 400);
}



function draw() {
  background(0, 0, 0);
  rect(0, mouseY, 400, 10);
  fill(255,0,0);
   if (300 < mouseX && mouseY > 300) {
    fill(0,255,0);
  }


  noStroke();
}

function act(){
  rect(400,400, 400, 400);
  fill(0,255,0);
  noStroke();

}
