console.log("This is airport.js");

var animation = anime.timeline({
    autoplay: true
});

animation


.add({
  targets: '#ticket',
  top: '0px',
  duration: 1000,
  easing: 'easeInOutSine'
})

.add({
    targets: '#att',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})


.add({
    targets: '#btn5',
    marginRight: -400,
    duration: 1000,
    easing: 'easeInOutBack'
})



 document.querySelector('#btn').onclick = animation.play;
