// Check if we are on Amazon.com
if (window.location.href.indexOf("https://www.amazon.com/") != -1) {

  // Send message to background script to enable popup
  chrome.runtime.sendMessage({enablePopup: true}, function(response) {
    console.log(response);
  });
  
  // Set the background color of the page to pink.
  document.body.style.backgroundColor = "pink";

// Create the popup element.
const popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
popup.style.zIndex = "999999";

// Create the message element.
const message = document.createElement("div");
message.style.position = "absolute";
message.style.top = "50%";
message.style.left = "50%";
message.style.transform = "translate(-50%, -50%)";
message.style.color = "white";
message.style.fontSize = "3em";
message.style.textAlign = "center";
message.innerHTML = "Amazon!";

// Create the timer element.
const timer = document.createElement("div");
timer.style.position = "absolute";
timer.style.bottom = "0";
timer.style.right = "0";
timer.style.padding = "5px";
timer.style.color = "white";
timer.style.fontSize = "1.5em";
timer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

// Add the timer to the popup.
popup.appendChild(timer);

// Add the message to the popup.
popup.appendChild(message);

// Add the popup to the page.
document.body.appendChild(popup);

// Set the popup timer.
let countdown = 15;
let interval = setInterval(() => {
  countdown--;
  timer.innerHTML = `Popup will close in ${countdown} seconds`;
  if (countdown === 0) {
    clearInterval(interval);
    document.body.removeChild(popup);
  }
}, 1000);

// Prevent the user from clicking out of the popup.
popup.addEventListener("mousedown", (event) => {
  event.stopPropagation();
});

// Remove the popup if the user clicks outside of it.
document.body.addEventListener("mousedown", () => {
  clearInterval(interval);
  document.body.removeChild(popup);
});
}
