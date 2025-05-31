
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "launchFavorites") {
    const input = document.getElementById('search');
    if (input && message.query) {
      input.value = message.query;
    }

    const tryClickArrow = () => {
      const arrow = document.querySelector('.favorites-launch');
      if (arrow) {
        arrow.click();
      } else {
        setTimeout(tryClickArrow, 300);
      }
    };

    setTimeout(tryClickArrow, 500);
  }
});
