const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
    message.textContent = "Det fungerar! Nu kan jag öva Git.";
});
