// Set the size of the popup to be the same as the browser window
window.onload = function () {
  window.resizeTo(screen.width, screen.height);
}

// Set the time limit for the popup to be open (in seconds)
var timeLimit = 15;

// Display the time limit in the popup
var timeLeft = timeLimit;

var timerInterval = setInterval(function () {
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    hidePopup()
  }
}, 1000);

// Function to hide the popup after the time limit has expired
function hidePopup() {
  // Get a reference to the popup.html element
  var popup = document.getElementById('popup');

  // Hide the popup
  popup.style.display = 'none';
}