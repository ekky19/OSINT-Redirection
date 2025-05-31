chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "osintSearch",
    title: "OSINT Dashboard",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "osintSearch") {
    const selectedText = encodeURIComponent(info.selectionText.trim());
    const osintUrl = `https://ekky19.github.io/osint/?q=${selectedText}`;
    chrome.tabs.create({ url: osintUrl });
  }
});