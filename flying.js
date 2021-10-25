console.log("This is airport.js");

var animation = anime.timeline({
    autoplay: true
});

animation
// .add({
//     targets: '#btn',
//     top: '1500px',
//     duration: 500,
//     easing: 'easeInOutSine'
// })
// .add({
//   targets: '#btn',
//   top: '50%',
//   duration: 1000,
//   easing: 'easeInOutBack'
//        })


.add({
  targets: '#artist',
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
    targets: '#btn6',
    marginRight: -300,
    duration: 1000,
    easing: 'easeInOutBack'
})


 document.querySelector('#btn').onclick = animation.play;
