// Countdown for 10 minutes from page load
function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  const interval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = 'Offer expired!';
    }
  }, 1000);
}

window.onload = () => {
  const countdownTime = 60 * 10; // 10 minutes
  const display = document.getElementById('countdown');
  startCountdown(countdownTime, display);
};
