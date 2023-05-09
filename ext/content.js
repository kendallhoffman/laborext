// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "Hello from the background script!") {
    chrome.runtime.sendMessage({message: "openPopup"});
  }
});

// if (self.location.href.indexOf("https://www.amazon.com/") != -1) {

//   //receive message from background script to open popup
//   chrome.runtime.onMessage.addListener(function(message) {
//   if (message.type === 'pageLoaded') {
//       //chrome.browserAction.openPopup();
//       chrome.windows.create({
//         url: "popup.html",
//         type: "popup",
//         width: 400,
//         height: 600
//       });
//       console.log("Extension enabled");
//   }
//   });

  

// create popup element
const popup = document.querySelector("#popup")


  // //TIMER 
  // // get the progress and continue elements
  // const progress = document.querySelector('.progress');
  // const continueBtn = document.querySelector('#continue');

  // // set the timer length in seconds
  // const timerLength = 15;

  // // start the countdown timer
  // setTimeout(() => {
  //   // hide the progress bar and show the continue element
  //   progress.style.display = 'none';
  //   continueBtn.style.display = 'block';
  // }, timerLength * 1000); // setTimeout takes milliseconds, so multiply by 1000

  // function close(event) {
  //   document.body.removeChild(popup);
  //   console.log("continue clicked!");
  // }
  // //remove popup if continue button is selected
  // chrome.browserAction.onClicked.addListener(close);

  //make the leave button appear only after the timer ends

  // function showLeave() {
  //     document.getElementById("#continue").style.display = "inline-flex";
  // }

  // function myFunction() {
  //     window.location = "popup.html"
  // }

  // setTimeout(showLeave, 1000);
  
  // function close() {
  //   document.body.removeChild(popup);
  // } 

  // function showContinuebutton() {
  //   if ($("#continue").hasClass("hidden")) {
  //     $("#continue").removeClass("hidden");
  //     $(".progress").addClass("hidden");
  //     console.log("continue button clicked! Timer ended!");
  //   } else {
  //     $("#continue").addClass("hidden");
  //     $(".progress").removeClass("hidden");
  //     console.log("Timer in progress!");
  //   }
  // }
  // setTimeout("showContinueButton()", 1000); // after 1 secs

  // function showContinueButton() {
  //   document.getElementsByClassName("loading").classList.toggle("hidden");
  //   document.getElementById("continue").classList.toggle("show");
  //   console.log("Animation ended!");
  // }

  // function onAnimationEnd() {
  //   document.getElementsById("loading").classList.toggle("hidden");
  //   document.getElementById("continue").classList.toggle("show");
  //   console.log("Animation ended!");
  //   // Any additional code you want to execute
  // }

  // var element = document.getElementById("continue");
  // element.addEventListener("animationend", onAnimationEnd);
  const cont = document.querySelector("#continue");
  const timer = document.querySelector("#loading");

  // //make sure timer is starting out visible
  // if(timer && timer.className.indexOf(".hidden") !== -1){
  //   timer.classList.remove(".hidden");
  // }
  // }else{
  //   timer.classList.add(".hidden");
  // }
  // Start the loading timer
  if (cont !== null) {
    setTimeout(function() {
      // Timer has ended, show the button, hide the timer
      cont.classList.remove(".hidden");
      timer.classList.add(".hidden");
      console.log("timer ended, continue clicked!");
    }, 20000);
  }
  //close popup w eventlistener
  if (cont !== null) {
    cont.addEventListener("click", handleClick);
  }
  
  function handleClick(event) {
  // Handle the button click event
    document.body.removeChild(popup);
    console.log("popup removed!");
  }   
// }