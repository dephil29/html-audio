function playNextVideo(){
  var videoElement = document.querySelector("video");
  var videoSrc = videoElement.src;
  var videoFileName = videoSrc.split('/');
  videoFileName = videoFileName[videoFileName.length-1];
  var currentIndex = vijyaList.indexOf(videoFileName);
  var nextIndex = (currentIndex+1) % vijyaList.length;
  videoElement.src = 'videos/' + vijyaList[nextIndex];
  videoElement.addEventListener('loadeddata', function() {
    videoElement.play();
})
}
