// Set the background color of the popup
document.body.style.backgroundColor = "pink";

// Set the size of the popup to be the same as the browser window
window.onload = function() {
  window.resizeTo(screen.width, screen.height);
}

// Set the time limit for the popup to be open (in seconds)
var timeLimit = 15;

// Display the time limit in the popup
var timeLeft = timeLimit;
var timerDiv = document.createElement("div");
timerDiv.style.position = "fixed";
timerDiv.style.bottom = "0";
timerDiv.style.right = "0";
timerDiv.style.backgroundColor = "white";
timerDiv.style.padding = "10px";
document.body.appendChild(timerDiv);

var timerInterval = setInterval(function() {
  timerDiv.innerHTML = "Time left: " + timeLeft + " seconds";
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    window.close();
  }
}, 1000);

// Prevent the user from closing the popup before the time limit expires
window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = "Are you sure you want to leave?";
});

