let names = [{
  name: "Incheon",

}, {
  name: "Orly",

}, {
  name: "Milan",

}, {
  name: "Sapporo",

}, {
  name: "Lisbon",

}, {
  name: "Dubai",

}, {
  name: "Lima",

}, {
  name: "Taipei",

}, {
  name: "Amsterdam",

}, {
  name: "Athens",

}, {
  name: "Vancouver",

}, {
  name: "Da Nang",

}, {
}, {
  name: "Shanghai",

}, {
  name: "Kuala Lumpur",

}];

let randomIndex;

function setup() {
  var canvas = createCanvas(300, 100);
  canvas.parent('sketchbook');
  background(199, 203, 215);
}

function draw() {
  textSize(20);
  fill(0, 0, 0);
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);
  textFont('Fjalla One');
  text('type "t"', 35, 30);
}

function keyTyped() {
  if (key === 't') {
    randomiz();
  }
}

function randomiz() {
  background(199, 203, 215);
  randomIndex = int(random(names.length));
  textStyle(NORMAL);
  textFont('Major Mono Display');
  textAlign(CENTER, CENTER);
  text(names[randomIndex].name, 150, 60);
  names.splice(randomIndex, 1);
}


// var video;
// var hold;
// var zoom = 1.00;
//
//
// function setup() {
//   createCanvas(windowWidth,240);
//    background(50);
//     video = createCapture(VIDEO);
//     video.size(320, 240);
//     video.position(200,220);
//     video.hide();
//     rectMode(CENTER);
//     hold = createImage(320,220);
//
// }
//
// function draw() {
//    tint(255, 0, 0)
//    image(video, 0, 0);
//
//    image(video, 0, 0, 320, 240);
//    image(hold, 400,0);
//
// //green lines to give technology effect
// rect(0, mouseY, width*2, 0.3);
// rect(0, mouseY+5, width*2, 0.3);
// rect(0, mouseY-10, width*2, 0.3);
// rect(0, mouseY+10, width*2, 0.3);
// rect(0, mouseY-5, width*2, 0.3);
// rect(0, mouseY+15, width*2, 0.3);
// rect(0, mouseY-15, width*2, 0.3);
// rect(0, mouseY+20, width*2, 0.3);
// rect(0, mouseY-20, width*2, 0.3);
// rect(0, mouseY+25, width*2, 0.3);
// rect(0, mouseY-25, width*2, 0.3);
// rect(0, mouseY+30, width*2, 0.3);
// rect(0, mouseY-30, width*2, 0.3);
// rect(0, mouseY+35, width*2, 0.3);
// rect(0, mouseY+40, width*2, 0.3);
// rect(0, mouseY+45, width*2, 0.3);
// rect(0, mouseY+50, width*2, 0.3);
// rect(0, mouseY+55, width*2, 0.3);
// rect(0, mouseY+60, width*2, 0.3);
// rect(0, mouseY+65, width*2, 0.3);
// rect(0, mouseY+70, width*2, 0.3);
// rect(0, mouseY+75, width*2, 0.3);
// rect(0, mouseY+80, width*2, 0.3);
// rect(0, mouseY+85, width*2, 0.3);
// rect(0, mouseY+90, width*2, 0.3);
// rect(0, mouseY+95, width*2, 0.3);
// rect(0, mouseY+100, width*2, 0.3);
//
//   //  if (300 < mouseX && mouseY > 300) {
//   //  fill(0,255,0);
//   // }
//
//   // black recs to give a feeling of censoring
//   fill(0);
//   rect(0, 0, width*2, mouseY+100);
//   rect(0, height, width*2, -mouseY+100)
//   rect(0, 0, mouseX+50, height*2)
//   rect(width, 0, -mouseX+900, height*2)
//   noStroke();
//
// //text-searching...
//   textSize(20);
//   fill(0, 255, 0);
//   textFont('Orbitron');
//   text('Searching...', 100, 30);
//
//
//   textSize(10);
//   fill(0, 255, 0);
//   textFont('Orbitron');
//   text('Please place your mouse cursor on Searching Scanner,', 300, 25);
//   text('and try to match your face on the scanner.', 300, 50);
//   text('When you are ready, double click the canvas to capture and continue', 300, 75);
// }
//
//
// function act(){
//    rect(400,400, 400, 400);
//    fill(0,255,0);
//    noStroke();
//     }
//
// function mousePressed() {
//   event();
//  }
//
// function event(){
//   hold = video.get(320,240);
//
//   rect(0, mouseY, width*2, 0.3);
//   rect(0, mouseY+5, width*2, 0.3);
//   rect(0, mouseY-10, width*2, 0.3);
//   rect(0, mouseY+10, width*2, 0.3);
//   rect(0, mouseY-5, width*2, 0.3);
//   rect(0, mouseY+15, width*2, 0.3);
//   rect(0, mouseY-15, width*2, 0.3);
//   rect(0, mouseY+20, width*2, 0.3);
//   rect(0, mouseY-20, width*2, 0.3);
//   rect(0, mouseY+25, width*2, 0.3);
//   rect(0, mouseY-25, width*2, 0.3);
//   rect(0, mouseY+30, width*2, 0.3);
//   rect(0, mouseY-30, width*2, 0.3);
//   rect(0, mouseY+35, width*2, 0.3);
//   rect(0, mouseY+40, width*2, 0.3);
//   rect(0, mouseY+45, width*2, 0.3);
//   rect(0, mouseY+50, width*2, 0.3);
//   rect(0, mouseY+55, width*2, 0.3);
//   rect(0, mouseY+60, width*2, 0.3);
//   rect(0, mouseY+65, width*2, 0.3);
//   rect(0, mouseY+70, width*2, 0.3);
//   rect(0, mouseY+75, width*2, 0.3);
//   rect(0, mouseY+80, width*2, 0.3);
//   rect(0, mouseY+85, width*2, 0.3);
//   rect(0, mouseY+90, width*2, 0.3);
//   rect(0, mouseY+95, width*2, 0.3);
//   rect(0, mouseY+100, width*2, 0.3);
//
//   //  if (300 < mouseX && mouseY > 300) {
//   //  fill(0,255,0);
//   // }
//
//
//   // black recs to give a feeling of censoring
//   fill(0);
//   rect(0, 0, width*2, mouseY+50);
//   rect(0, height, width*2, -mouseY+50)
//   rect(0, 0, mouseX+50, height*2)
//   rect(width, 0, -mouseX+50, height*2)
//   noStroke();
//
//   //text-searching...
//   textSize(20);
//   fill(0, 255, 0);
//   textFont('Orbitron');
//   text('Searching...', 100, 30);
//
//
// }
