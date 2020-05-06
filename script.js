// elements
const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)

// functions

function toggleVideoStatus() {
  return true
}

function updatePlayIcon(){
  return true
}
function updateProgress() {
  return true
}

function setVideoProgress(){
  return true
}

function stopVideo(){
  return true
}