
var video;



function setup() {
  createCanvas(320, 240);
  background(50);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
}

function draw() {
  tint(255, 0, 0)
  image(video, 0, 0)
}
