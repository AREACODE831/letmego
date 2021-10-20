console.log("This is first.js");



var video;
var zoom = 1.00;


function setup() {
  createCanvas(320, 240);
  background(50);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.position(200,220);
  video.hide();
  rectMode(CENTER);
}

function draw() {
  tint(255, 0, 0)
  image(video, 0, 0)
}


function mousePressed() {

}
