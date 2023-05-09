chrome.runtime.onInstalled.addListener(function(details) {
    console.log('Extension installed or updated');
    // Get the active tab in the current window
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Send a message to the content script in the active tab
    chrome.tabs.sendMessage(tabs[0].id, {message: "Hello from the background script!"});
    });
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "openPopup") {
        if (window.location.href.indexOf("https://www.amazon.com/") != -1) {
            console.log("site is on amazon");
            chrome.windows.create({
                url: 'popup.html',
                type: 'popup',
                width: screen.width,
                height: screen.height
            });
        };
        console.log("Extension enabled");
    }
});
// chrome.runtime.onMessage.addListener(function(message) {
//     if (message.type === "site is on amazon") {
        
//     }
// });    


// // Get the width and height of the user's screen
// const width = screen.availWidth;
// const height = screen.availHeight;

// // Set the size of the window to fill the user's screen
// const createData = {
//     url: "popup.html",
//     left: 0,
//     top: 0,
//     width: width,
//     height: height,
//     type: "popup"
// };

// // Create the window using the createData object
// chrome.windows.create(createData, (window) => {
//     console.log(`Created window with ID ${window.id}`);
// });
// chrome.windows.create({
//     url: "popup.html",
//     type: "popup",
//     width: screen.width,
//     height: screen.height
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.status === "complete" && tab.url.includes("https://www.amazon.com")) {
//         chrome.tabs.sendMessage(tabId, {action: "open_popup"});
//         // Send message to content script to enable popup
//         chrome.runtime.sendMessage({type: 'pageLoaded'});
//     }
// });




// chrome.runtime.onMessage.addListener(function(details) {
//     console.log('Extension enabled');
// });

// chrome.browserAction.onClicked.addListener(function(details) {
//     console.log('Extension installed or updated');
//   });
//   chrome.webRequest.onBeforeRequest
//   chrome.storage.onChanged