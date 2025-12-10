// Service Worker for PackageGuard Chrome Extension

let windowId: number | undefined = undefined;

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        console.log("PackageGuard extension installed");
    } else if (details.reason === "update") {
        console.log(
            "PackageGuard extension updated to version",
            chrome.runtime.getManifest().version
        );
    }
    chrome.contextMenus.create({
        id: "openSidePanel",
        title: "Open side panel",
        contexts: ["all"]
    });
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
    windowId = activeInfo.windowId;
});

// to receive messages from popup script
chrome.runtime.onMessage.addListener((message) => {
    (async () => {
        console.log("Message received in service worker:", message, {
            windowId
        });
        if (message.action === "OPEN_SIDE_PANEL" && windowId !== undefined) {
            chrome.sidePanel.open({ windowId: windowId });
        }
    })();
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "openSidePanel") {
        // This will open the panel in all the pages on the current window.
        chrome.sidePanel.open({ windowId: tab?.windowId || 0 });
    }
});
