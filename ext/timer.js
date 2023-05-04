 // Set the popup timer.
 let countdown = 15;
 let interval = setInterval(() => {
   countdown--;
   timer.innerHTML = `Popup will close in ${countdown} seconds`;
   if (countdown === 0) {
     clearInterval(interval);
     timer.innerHTML = "";
     continueButton.style.display = "block";
   }
 }, 1000);

 // Set the time limit for the popup to be open (in seconds)
var timeLimit = 15;

// Display the time limit in the popup
var timeLeft = timeLimit;
// var timerDiv = document.createElement("div");
timer.style.position = "fixed";
timer.style.bottom = "0";
timer.style.right = "0";
timer.style.backgroundColor = "red";
timer.style.padding = "10px";
document.body.appendChild(timer);

// var timerInterval = setInterval(function() {
  timerDiv.innerHTML = "Time left: " + timeLeft + " seconds";
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    window.close();
  }
// }, 1000);

