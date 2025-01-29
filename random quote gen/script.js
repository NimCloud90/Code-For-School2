const quotes = [
    "'Who's blood is that?' - El",
    "'Floors aren't supposed to move, they're supposed to *floor*.' - Freya",
    "'The phoenix enters. It is wearing a tophat and it is *very angry*.' - El",
    "'Can we disregard the reality warping rats for a moment?' - Freya",
    "'Caroline is teaching Ezra how to do drugs.' - Shay",
    "'I have an idea.' - Aleph before announcing the worst plan ever",
    "'Oh, you don't know about the Bagel Dimension.' - Jackson",
    "'I kick him anyway it's still gonna hurt!' - Freya",
    "'The other pumpkins get angry at you.' -Freya",
    "'heyyyyy mam did you know i have a plus two to boat handling.' - el to the living boat",
    "'*whispers* He's fucking my dad.' - Freya as Basil.",
    "'tactical hallucinogenic spaghetti.' - Freya",
    "'Ronald Raegan, more like Ronald Rail me.' - I assume it's Jackson",
    "'PLease don't use WebP files.' - Jackson literally sobbing",
    "'Rio now has the will to live.' - Sky",
    "'DON'T BE RACIST!' - El as a talking dog",
    "'Our mailbox number is Marty.' -Shay",
    "'Stop! This isn't you! Blockout the haters: that's what this is giving.' -Sky",
    "So, whoever said William Afton is morally questionable: no. -Shay",
    "'If you want to murder a child, do it yourself.' -Jackson",
    "'i was sufficating in meat.' - el as robin",
    "'My wife is a beautiful woman!' 'And a bitch.' -Random Man, Sky as a rat",
    "'YOU SAID YOU'D BEHAVE!!!!' - Me and El",
    "'God, I love the meat room.' - Freya"
    
]

document.getElementById('button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote-display').innerText = `"${quotes[randomIndex]}"`;
}
);