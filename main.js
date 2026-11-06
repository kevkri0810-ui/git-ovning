// main.js – ändring för Git-övningen

document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js fungerar!");

  // Visar ett meddelande på sidan om det finns ett element med id="message".
  const message = document.querySelector("#message");

  if (message) {
    message.textContent = "JavaScript fungerar som det ska!";
  }
});
