let progress = document.getElementById('progress');
let song = document.getElementById('song');
let controlIcon = document.getElementById('controlIcon');

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if(controlIcon.classList.contains('fa-pause')){
        song.pause();
        console.log('song paused');
        controlIcon.classList.remove('fa-pause');
        controlIcon.classList.add('fa-play');
    }
    else{
        song.play();
        console.log('song played');
        controlIcon.classList.add('fa-pause');
        controlIcon.classList.remove('fa-play');
    }
}