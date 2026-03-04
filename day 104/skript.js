function showMessage() {
  const input = document.getElementById("userInput").value;
  const messageBox = document.getElementById("messageBox");

  if(input.trim() === "") return;

  messageBox.textContent = input;
  messageBox.style.display = "block";

  setTimeout(() => {
    messageBox.style.display = "none";
  }, 3000);
}