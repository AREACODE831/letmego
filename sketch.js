//
// var video;
// var zoom = 1.00;
//
//
// function setup() {
//   createCanvas(320, 240);
//   background(50);
//   video = createCapture(VIDEO);
//   video.size(320, 240);
//   video.position(200,220);
//   video.hide();
//   rectMode(CENTER);
// }
//
// function draw() {
//   tint(255, 0, 0)
//   image(video, 0, 0)
// }
//
//
// function mousePressed() {
//
// }
//

var video;
var hold;
var zoom = 1.00;


function setup() {
  createCanvas(windowWidth,240);
   background(50);
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.position(200,220);
    video.hide();
    rectMode(CENTER);
    hold = createImage(320,220);

}

function draw() {
   tint(255, 0, 0)
   image(video, 0, 0);
   image(video, 0, 0, 320, 240);
   image(hold, 400,0);

//green lines to give technology effect
rect(0, mouseY, width*2, 0.3);
rect(0, mouseY+5, width*2, 0.3);
rect(0, mouseY-10, width*2, 0.3);
rect(0, mouseY+10, width*2, 0.3);
rect(0, mouseY-5, width*2, 0.3);
rect(0, mouseY+15, width*2, 0.3);
rect(0, mouseY-15, width*2, 0.3);
rect(0, mouseY+20, width*2, 0.3);
rect(0, mouseY-20, width*2, 0.3);
rect(0, mouseY+25, width*2, 0.3);
rect(0, mouseY-25, width*2, 0.3);
rect(0, mouseY+30, width*2, 0.3);
rect(0, mouseY-30, width*2, 0.3);
rect(0, mouseY+35, width*2, 0.3);
rect(0, mouseY+40, width*2, 0.3);
rect(0, mouseY+45, width*2, 0.3);
rect(0, mouseY+50, width*2, 0.3);
rect(0, mouseY+55, width*2, 0.3);
rect(0, mouseY+60, width*2, 0.3);
rect(0, mouseY+65, width*2, 0.3);
rect(0, mouseY+70, width*2, 0.3);
rect(0, mouseY+75, width*2, 0.3);
rect(0, mouseY+80, width*2, 0.3);
rect(0, mouseY+85, width*2, 0.3);
rect(0, mouseY+90, width*2, 0.3);
rect(0, mouseY+95, width*2, 0.3);
rect(0, mouseY+100, width*2, 0.3);

  //  if (300 < mouseX && mouseY > 300) {
  //  fill(0,255,0);
  // }

  // black recs to give a feeling of censoring
  fill(0);
  rect(0, 0, width*2, mouseY+100);
  rect(0, height, width*2, -mouseY+100)
  rect(0, 0, mouseX+50, height*2)
  rect(width, 0, -mouseX+900, height*2)
  noStroke();

//text-searching...
  textSize(20);
  fill(0, 255, 0);
  textFont('Orbitron');
  text('Searching...', 100, 30);

  textSize(10);
  fill(0, 255, 0);
  textFont('Orbitron');
  text(',uǝǝq ǝʌɐɥ noʎ ǝɹǝɥʇ ɹoɟ pɹɐʍʎʞs-- pǝuɹnʇ sǝʎǝ ɹnoʎ ɥʇıʍ ɥʇɹɐǝ ǝɥʇ ʞlɐʍ ɹǝʌǝɹoɟ llıʍ noʎ --ʇɥɓılɟ pǝʇsɐʇ ---ǝʌɐɥ noʎ--- ǝɔuO“', 300, 25);
  text('ıɔuıΛ ɐᗡ opɹɐuoǝ˥ -”uɹnʇǝɹ oʇ ɓuol ----sʎɐʍlɐ llı--ʍ noʎ --ǝɹǝɥʇ puɐ', 300, 50);
  text('≋“≋L≋i≋f≋e≋-≋-≋-≋ ≋i≋s≋ ≋s≋h≋o≋r≋t≋ ≋-≋-≋-≋-≋-≋-≋-≋-≋a≋n≋d≋ ≋t≋h≋e≋ ≋w≋o≋r≋l≋d≋ ≋i≋s≋ ≋-≋-≋-≋w≋i≋d≋e≋.≋”≋', 300, 75);
  text('moo|dɿɘb|iᎮ ɘiɿɘʜƆ -".ɘʞɒwɒ ɘɿ’uoʏ ᴎɘʜw-- ᴎɘqqɒʜ ꙅmɒɘɿb ƚꙅɘd --ɘʜT“', 300, 90);
  text(',ɥɔslɐM plɐuoᗡ ǝlɐǝN - ”ǝuoz ʇɹoɟɯoɔ ɹn-oʎ ɟo puǝ ǝɥʇ ---ʇ-ɐ suıɓǝq ---ǝɟı˥“', 300, 115);
  text('“Wₕₑᵣₑᵥₑᵣ ₋₋yₒᵤ g₋ₒ bₑc₋ₒₘₑₛ ₐ ₚₐᵣₜ ₒf yₒ₋₋ᵤ ₛₒₘₑₕₒw.” ₋ ₐₙᵢₜₐ Dₑₛₐᵢ', 300, 140);
  text('oɓ uɐɔ-- ǝuo ɹɐɟ--- ʍoɥ ʇno puıɟ ʎlqıssod ----uɐɔ ɹɐɟ ooʇ ɓuıoɓ --ʞsıɹ oɥʍ -ǝsoɥʇ ----ʎluO“” - ᖶ.S. ᘿᒪᓰᓍᖶ', 300, 165);
  text('≋“≋T≋h≋e≋ ≋-≋-≋-≋-≋j≋o≋u≋r≋n≋e≋y≋-≋-≋-≋-≋ ≋i≋t≋s≋e≋l≋f≋ ≋i≋s≋ ≋m≋y≋-≋-≋-≋ ≋h≋o≋m≋e≋.≋”≋ ≋-≋ ≋M≋a≋t≋s≋u≋o≋ ≋B≋a≋s≋h≋o≋', 300, 190);

}


function act(){
   rect(400,400, 400, 400);
   fill(0,255,0);
   noStroke();
    }

function mousePressed() {
  event();
 }

function event(){
  hold = video.get(320,240);

  rect(0, mouseY, width*2, 0.3);
  rect(0, mouseY+5, width*2, 0.3);
  rect(0, mouseY-10, width*2, 0.3);
  rect(0, mouseY+10, width*2, 0.3);
  rect(0, mouseY-5, width*2, 0.3);
  rect(0, mouseY+15, width*2, 0.3);
  rect(0, mouseY-15, width*2, 0.3);
  rect(0, mouseY+20, width*2, 0.3);
  rect(0, mouseY-20, width*2, 0.3);
  rect(0, mouseY+25, width*2, 0.3);
  rect(0, mouseY-25, width*2, 0.3);
  rect(0, mouseY+30, width*2, 0.3);
  rect(0, mouseY-30, width*2, 0.3);
  rect(0, mouseY+35, width*2, 0.3);
  rect(0, mouseY+40, width*2, 0.3);
  rect(0, mouseY+45, width*2, 0.3);
  rect(0, mouseY+50, width*2, 0.3);
  rect(0, mouseY+55, width*2, 0.3);
  rect(0, mouseY+60, width*2, 0.3);
  rect(0, mouseY+65, width*2, 0.3);
  rect(0, mouseY+70, width*2, 0.3);
  rect(0, mouseY+75, width*2, 0.3);
  rect(0, mouseY+80, width*2, 0.3);
  rect(0, mouseY+85, width*2, 0.3);
  rect(0, mouseY+90, width*2, 0.3);
  rect(0, mouseY+95, width*2, 0.3);
  rect(0, mouseY+100, width*2, 0.3);

  //  if (300 < mouseX && mouseY > 300) {
  //  fill(0,255,0);
  // }


  // black recs to give a feeling of censoring
  fill(0);
  rect(0, 0, width*2, mouseY+50);
  rect(0, height, width*2, -mouseY+50)
  rect(0, 0, mouseX+50, height*2)
  rect(width, 0, -mouseX+50, height*2)
  noStroke();

  //text-searching...
  textSize(20);
  fill(0, 255, 0);
  textFont('Orbitron');
  text('Searching...', 100, 30);


}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');
    // value = 0;
  } else if (key === 'c') {

    clear();


  }

  return false;

}
