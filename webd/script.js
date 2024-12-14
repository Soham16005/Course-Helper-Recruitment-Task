function updateCountdown() {
    const now = new Date();
    
    const targetDate = new Date(2025, 0, 1, 0, 0, 0);
    
    const diff = targetDate - now;
    

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "00<sub>days</sub> 00:00:00";
        const previewButton = document.getElementById("previewButton");
        previewButton.style.display = "block";  // Show the preview button

        // Automatically click the preview button
        previewButton.click();

        clearInterval(countdownInterval);
        return; // Stop updating the countdown
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // Update countdown display
    document.getElementById("countdown").innerHTML = `${days}<sub>days</sub> ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function previewMessage() {
    alert("Happy New Year!");
}



// Snowfall function
function createSnowflakes() {
    const leftPanel = document.getElementById('leftPanel');
    const numSnowflakes = 100;

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 10 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.top = `${Math.random() * 50}px`;
        snowflake.style.left = `${Math.random() * 100}%`;

        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        leftPanel.appendChild(snowflake);
    }
}



// Ensure this function is called after the DOM is fully loaded
function createTwinkleBalls() {
    const rightPanel = document.querySelector(".right-panel"); // Correct selector
    const colors = ["yellow", "white", "orange", "lightblue", "red"];
    const numBalls = 150; // Number of twinkling balls

    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement("div");
        ball.classList.add("twinkle-ball");

        // Randomize size, position, and color
        const size = Math.random() * 10 + 3; // Ball size between 10px and 20px
        const leftPosition = Math.random() * 100; // Random horizontal position
        const topPosition = Math.random() * 100; // Random vertical position
        const delay = Math.random() * 5; // Random animation delay
        const color = colors[Math.floor(Math.random() * colors.length)]; // Random color

        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
        ball.style.left = `${leftPosition}%`;
        ball.style.top = `${topPosition}%`;
        ball.style.backgroundColor = color;
        ball.style.animationDelay = `${delay}s`;

        rightPanel.appendChild(ball);
    }

    console.log("Twinkle balls created!"); // Debug log
}

createTwinkleBalls();

function previewMessage() {
    alert("Happy New Year!");
}

setInterval(updateCountdown, 1000);
updateCountdown();
createSnowflakes(); 