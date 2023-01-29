let MessageBox = document.getElementById("Messagebox");
let BorderGreen = document.getElementById("Bordergreen");

// Function for remove the messagesalert div
const Close = () => {
  MessageBox.remove();
};

// SetTimout for removing div after 5 sec's
let Time = setTimeout(() => {
  MessageBox.remove();
}, 5000);

// Mouseover event for stopping div and animation
MessageBox.addEventListener("mouseover", function () {
  clearTimeout(Time);
  BorderGreen.style.animationPlayState = "paused";
});

// Click event for stopping div and animation in responsive design
MessageBox.addEventListener("click", function () {
  clearTimeout(Time);
  BorderGreen.style.animationPlayState = "paused";
});
