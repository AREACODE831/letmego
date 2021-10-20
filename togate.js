var animation = anime.timeline({
    autoplay: true
});

animation
.add({
    targets: '#rt',
    top: '1500px',
    duration: 1000,
    easing: 'easeInOutSine'
})

document.querySelector('#rt').onclick = animation.play;
