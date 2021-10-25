function next(){
    if(document.getElementById('next').checked){
        window.location='checkin2.html';
        return false;

    }
    return true;
}
function nextt(){
    if(document.getElementById('nextt').checked){
        window.location='checkin3.html';
        return false;

    }
    return true;
}


// checkin3 questions

var animation = anime.timeline({
    autoplay: false
});

animation
.add({
    targets: '#text1',
    marginRight: 0,
    duration: 1000,
    easing: 'easeInOutBack'
})

.add({
  targets: '#airplane',
  top: '0px',
  duration: 2000,
  easing: 'easeInOutSine'
})
.add({
  targets: '#text2',
  marginRight: 0,
  duration: 1000,
  easing: 'easeInOutSine'
})
.add({
  targets: '#btn2',
  marginRight: -140,
  duration: 3000,
  easing: 'easeInOutSine'
})



 document.querySelector('#btn').onclick = animation.play;
