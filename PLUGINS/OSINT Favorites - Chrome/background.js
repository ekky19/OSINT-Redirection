
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-in-site-favorites",
    title: "OSINT Favorites Trigger",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-in-site-favorites" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    const site = `https://ekky19.github.io/osint/?q=${query}`;

    chrome.tabs.create({ url: site }, (newTab) => {
      setTimeout(() => {
        chrome.tabs.sendMessage(newTab.id, {
          action: "launchFavorites",
          query: info.selectionText.trim()
        });
      }, 1000);
    });
  }
});
