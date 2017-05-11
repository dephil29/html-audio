var vijyaList;
loadVideos();
// document.querySelectorAll('.video-load-btn')
document.getElementById('videonames').addEventListener('click', videoPlayButtonHandler);
document.querySelector('video').addEventListener('ended', playNextVideo);
document.getElementById('slowDown').addEventListener('click', slowDown);
document.getElementById('speedUp').addEventListener('click', speedUp);
