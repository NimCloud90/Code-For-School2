const quotes = [
    "Who's blood is that? - El",
    "Floors aren't supposed to move, they're supposed to *floor*. - Freya",
    "The phoenix enters. It is wearing a tophat and it is *very angry*. - El",
    "Can we disregard the reality warping rats for a moment? - Freya",
    "Caroline is teaching Ezra how to do drugs. - Shay",
    "I have an idea. - Aleph before announcing the worst plan ever",
    "Oh, you don't know about the Bagel Dimension. -Jackson",
    "I kick him anyway it's still gonna hurt! -Freya",
    
]

document.getElementById('button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote-display').innerText = `"${quotes[randomIndex]}"`;
}
);