// Trigger coin flip on button click
document.getElementById("random-btn").addEventListener("click", flipCoin);

// Trigger coin flip when clicking the coin image
document.getElementById("coin-img").addEventListener("click", flipCoin);

function flipCoin() {
  // Randomly select "Heads" or "Tails"
  const result = Math.random() < 0.5 ? "Heads" : "Tails";

  const coinImg = document.getElementById("coin-img");

  // Start flip animation by adding CSS class
  coinImg.classList.add("flip-animation");

  // Remove animation class when animation completes to allow re-triggering
  // The listener runs once per animation to avoid buildup
  coinImg.addEventListener("animationend", () => {
    coinImg.classList.remove("flip-animation");
  }, { once: true });

  // Update coin image and alt text for accessibility
  if (result === "Heads") {
    coinImg.src = "assets/heads.svg";
    coinImg.alt = "Coin showing Heads";
  } else {
    coinImg.src = "assets/tails.svg";
    coinImg.alt = "Coin showing Tails";
  }

  // Display result text
  document.getElementById("coin-result").textContent = result;
}

// Enable keyboard interaction for accessibility: Enter and Space keys trigger flip
document.getElementById("coin-img").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    flipCoin();
  }
});

// Set current year dynamically in footer
document.getElementById("year").textContent = new Date().getFullYear();
