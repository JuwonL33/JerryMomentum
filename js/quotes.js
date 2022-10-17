const quotes = [
    {
        quote : "When you have faults, do not fear to abandon them.",
        author : "Confucius"
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela"
    },
    {
        quote : "Life is either a daring adventure or nothing at all.",
        author : "Helen Keller"
    },
    {
        quote : "This too shall pass.",
        author : "Et hoc transibit"
    },
    {
        quote : "When in doubt, choose change.",
        author : "Lily leung"
    },
    {
        quote : "All you need in this life is ignorance and confidence, then success is sure.",
        author : "Mark Twain"
    },
    {
        quote : "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author : "Maxime Lagacé"
    },
    {
        quote : "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author : "Kamal Ravikant"
    },
    {
        quote : "Turn your wounds into wisdom.",
        author : "Oprah Gail Winfrey"
    },
    {
        quote : "Change the world by being yourself.",
        author : "Amy Poehler"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random() -> 0~1 사이의 랜덤한 숫자를 제공함. 
// Math.random() * 10
// Math.round() 반올림, Math.ceil() 올림, Math.floor 내림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;