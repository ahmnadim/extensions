console.log("Background running");
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParams = tab.url.split("?")[1];
    const videoId = new URLSearchParams(queryParams).get("v");
    chrome.tabs.sendMessage(tabId, { type: "NEW", videoId: videoId });
    console.log("Tab updated: ", tab, queryParams);
  }
});
