# Message Passing Example

## Description

This example demonstrates how to send a message from a web page to a Chrome or a Firefox browser extension.

## Set Up Extension, Load index.html and Open DevTools

### Chrome

* Open Chrome and go to the Extensions management page by typing the following in the address bar: `chrome://extensions/`

* Alternatively, you can navigate to it by clicking the three-dot menu in the top-right corner of Chrome, then going to More Tools > Extensions.

* In the top-right corner of the Extensions page, toggle the Developer mode switch to enable it. This will reveal additional options for loading and managing extensions.

* Click the Load unpacked button that appears after enabling Developer mode.

* A file dialog will open. Navigate to the folder where the extension files are located and select the folder.

* Click Select Folder (or Open on macOS).

* Message Passing Example extension will appear in All Extensions list.

* Click Inspect views service worker.

* DevTools for extension window will open.

* Select Console tab.

* Open index.html file in Chrome.

* Click the three-dot menu (⋮) in the top-right corner and go to More Tools -> Developer Tools to open DevTools for index.html.

* Or simply press `Ctrl + Shift + I` for Windows/Linux or `Cmd + Option + I` for Mac.

* Select Console tab.

### Firefox

* Load the Extension in Firefox.

* Open Firefox and go to `about:debugging`.

* Click on This Firefox in the sidebar.

* Click on Load Temporary Add-on.

* Select the manifest.json file from the extension directory.

* Message Passing Example extension will appear in Temporary Extensions list.

* Click Inspect to open Developer Tools for extension.

* Select Console tab.

* Open index.html file in Firefox.

* Right-click anywhere on the page and select Inspect (Q) from the context menu.

* Or simply press `Ctrl + Shift + I` for Windows/Linux or `Cmd + Option + I` for Mac.

* Select Console tab.

## Testing

* Click Send Message to Extension button.

* In Developer Tools for index.html two messages will appear:
1. `Received message from web page:  {type: 'FROM_PAGE', text: 'Hello from the web page!'}`
2. `Received response from background script: {status: 'Success', data: 'Message received!'}`

* In Developer Tools for extension one message will appear:

1. `Message received from web page: {type: 'FROM_PAGE', text: 'Hello from the web page!'}`
