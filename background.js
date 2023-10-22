
//(async function() {

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "getURL") {
      chrome.tabs.query({active: true}, async function(tabs) {
        const tabUrl = tabs[0].url;
        console.log(tabUrl)
        chrome.runtime.sendMessage({type: "url", url: tabUrl});
      });
    }
  });

 // })();
