chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "FROM_PAGE") {
      console.log("Message received from web page:", message);
      sendResponse({ status: "Success", data: "Message received!" });
    }
  });