/**
 * CSS to hide everything on the page,
 * except for elements that have the "beastify-image" class.
 */
const hidePage = `body > :not(.beastify-image) {
  display: none;
}`;


function listenForClicks() {
document.addEventListener("click", (e) => {

function songToURL(song) {
switch (song) {
case "Audio":
return;
}
}

function reportError(error) {
console.error(`Could not play: ${error}`);
}

var audio = new Audio('onedance.mp3');

if (e.target.classList.contains("reset")) {
audio.play();
browser.tabs.query({active: true, currentWindow: true})
.then(reset)
.catch(reportError);
}
});
}

browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);





