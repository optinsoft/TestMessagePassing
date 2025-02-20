window.addEventListener("message", (event) => {
    if (event.source !== window) return;
  
    if (event.data && event.data.type === "FROM_PAGE") {    
        console.log("Received message from web page: ", event.data);
        browser.runtime.sendMessage(event.data, (response) => {
            console.log("Received response from background script:", response);
        });
    }
  });