changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: willify,
  });
});

const willPick = document.getElementById("willPic");

function willify() {
  const images = document.getElementsByTagName("img");

  for (let i = 0; i < images.length; i++) {
    images[i].src =
      "https://static.frontendmasters.com/assets/teachers/sentance/thumb.webp";
  }
}
