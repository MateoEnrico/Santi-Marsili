const audio = document.getElementById('audio');
const audioButton = document.getElementById('audioButton');

audioButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        audioButton.classList.remove('play');
        audioButton.classList.add('pause');
    } else {
        audio.pause();
        audioButton.classList.remove('pause');
        audioButton.classList.add('play');
    }
});