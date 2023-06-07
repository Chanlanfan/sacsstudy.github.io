const cursorFun = document.querySelector('#cursorFun');

function setProperty(duration) {
  cursorFun.style.setProperty('--animation-time', duration +'s');
}

function changeAnimationTime() {
  const animationDuration =  10;
  setProperty(animationDuration);
}
var chanceTime = Math.random() * 5000;
setInterval(changeAnimationTime, chanceTime);
