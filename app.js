const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Every Master Was Once a Beginner. - Sheikh Hafsa Nadeem",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "Whether you think you can or you think you can't, you're right. - Henry Ford",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
];


function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteElement = document.getElementById("quote");

    // Add fade-out effect
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.textContent = randomQuote;
        quoteElement.style.opacity = 1; // Add fade-in effect
    }, 300);
}