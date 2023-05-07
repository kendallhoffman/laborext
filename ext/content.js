document.addEventListener('DOMContentLoaded', function() {

  // Check if we are on Amazon.com
  if (window.location.href.indexOf("https://www.amazon.com/") != -1) {

    // Send message to background script to enable popup
    chrome.runtime.sendMessage({enablePopup: true}, function(response) {
      console.log(response);
    });
    // create popup element
    const popup = document.querySelector("#popup")


    //TIMER 
    // get the progress and continue elements
    const progress = document.querySelector('.progress');
    const continueBtn = document.querySelector('#continue');

    // set the timer length in seconds
    const timerLength = 15;

    // start the countdown timer
    setTimeout(() => {
      // hide the progress bar and show the continue element
      progress.style.display = 'none';
      continueBtn.style.display = 'block';
    }, timerLength * 1000); // setTimeout takes milliseconds, so multiply by 1000

    //remove popup if continue button is selected
    continueBtn.addEventListener("click", () => {
      document.body.removeChild(popup);
    });

}
});
