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
  targets: '#airplane',
  top: '0px',
  duration: 1000,
  easing: 'easeInOutSine'
})

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
    targets: '#lug',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutBack'
})

.add({
    targets: '#security',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})
.add({
    targets: '#boarding',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#text',
    marginRight: 0,
    duration: 1000,
    easing: 'easeInOutBack'
})

.add({
    targets: '#btn6',
    marginRight: -200,
    duration: 1000,
    easing: 'easeInOutBack'
})


 document.querySelector('#btn').onclick = animation.play;
