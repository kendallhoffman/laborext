// Check if we are on Amazon.com
if (window.location.href.indexOf("https://www.amazon.com/") != -1) {

  // Send message to background script to enable popup
  chrome.runtime.sendMessage({enablePopup: true}, function(response) {
    console.log(response);
  });
  

  // // Create the popup element.
  // const popup = document.createElement("div");

  // // Create the message element.
  // const message = document.createElement("div");


  // // Create the timer element.
  // const timer = document.createElement("div");

  // Add the timer to the popup.
  popup.appendChild(timer);

  // Add the message to the popup.
  popup.appendChild(message);

  // Create the "Continue" button element.
  // const continueButton = document.createElement("button");

  // Close the popup if the button is clicked
  continueButton.addEventListener("click", () => {
    clearInterval(interval);
    document.body.removeChild(popup);
  });




// Set the size of the popup to be the same as the browser window
window.onload = function() {
  window.resizeTo(screen.width, screen.height);
}



// Prevent the user from closing the popup before the time limit expires
window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = "Are you sure you want to leave?";
});



}
