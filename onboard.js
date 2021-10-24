console.log("This is onboard.js");

var animation = anime.timeline({
    autoplay: false
});

animation
.add({
    targets: '#btn',
    top: '1500px',
    duration: 500,
    easing: 'easeInOutSine'
})


.add({
  targets: '#ticket',
  top: '0px',
  duration: 1000,
  easing: 'easeInOutSine'
})


.add({
    targets: '#security',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})


.add({
  targets: '#btnn',
  duration: 1000,
  easing: 'easeInOutBack'
       })



 document.querySelector('#btn').onclick = animation.play;
