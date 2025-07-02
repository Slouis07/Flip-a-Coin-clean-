// When the button (linked to its ID) is clicked, trigger the flipCoin function
document.getElementById("random-btn").addEventListener("click", flipCoin);

// Get the coin image and make it trigger flipCoin when clicked (like a button)
document.getElementById("coin-img").addEventListener("click", flipCoin);

function flipCoin() {
  // Generate a random number from 0 to just under 1 (never 1)
  // If the number is less than 0.5, show "Heads", else show "Tails"
  const result = Math.random() < 0.5 ? "Heads" : "Tails";

  // Get the coin image element by its ID
  const coinImg = document.getElementById("coin-img");

  // Add the 'flip-animation' class to trigger the CSS flip animation
  coinImg.classList.add("flip-animation");

  // "animationend" is a built-in JS event that fires when a CSS animation completes
  // Here's what happens step-by-step:
  // 1. We add the 'flip-animation' class, starting the flip animation from @keyframes in CSS
  // 2. When the animation finishes, this event fires and removes the class
  // 3. Removing the class resets the image so the animation can run again on the next click
  // 4. { once: true } makes sure the listener runs only once per flip,
  //    preventing multiple listeners from stacking up and causing bugs
  coinImg.addEventListener("animationend", () => {
    coinImg.classList.remove("flip-animation");
  }, { once: true });

  // Without { once: true }, every button click would add a new event listener,
  // causing the 'flip-animation' class to be removed multiple times,
  // which wastes memory and slows down the browser over time.
  // So if you clicked 5 times, you'd have 5 listeners running after the animation ends,
  // all removing the class repeatedly (which is unnecessary and messy).
  // With { once: true }, the listener removes itself after running once,
  // so no buildup happens.

  if (result === "Heads") {
    coinImg.src = "assets/heads.svg";
    coinImg.alt = "Coin showing Heads"; // For screen readers to know the coin side
  } else {
    coinImg.src = "assets/tails.svg";
    coinImg.alt = "Coin showing Tails"; // For screen readers to know the coin side
  }
  // Display the result text below the coin
  document.getElementById("coin-result").textContent = result;
}

// Enable keyboard access to the coin image for accessibility
// "keydown" = built-in event for key press
// "e.key" checks which key was pressed ("Enter" or " " for Spacebar)
// "e" = event object representing the user's action

// Add keyboard support to the coin image:
// If the user presses Enter or Space (on Mac or Windows) while the image is focused,
// trigger the flipCoin() function
document.getElementById("coin-img").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    flipCoin(); // Trigger a coin flip if key is Enter or Spacebar
  }
});


// Set current year in footer 
document.getElementById("year").textContent = new Date().getFullYear();
