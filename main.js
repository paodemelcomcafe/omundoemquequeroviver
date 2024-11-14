document.addEventListener("DOMContentLoaded", () => {
  const flowersContainer = document.getElementById("flowers");
  const flowerEmojis = ["🌸", "🌷", "💐", "🌺"];

  flowerEmojis.forEach((emoji, index) => {
    const flower = document.createElement("span");
    flower.classList.add("flower");
    flower.textContent = emoji;

    // Adiciona os emojis no container de flores
    flowersContainer.appendChild(flower);
  });
});
