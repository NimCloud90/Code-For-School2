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
    "'tactical hallucinogenic spaghetti.' - Freya",
    "'PLease don't use WebP files.' - Jackson literally sobbing",
    "'Rio now has the will to live.' - Sky",
    "'DON'T BE RACIST!' - El as a talking dog",
    "'Our mailbox number is Marty.' - Shay",
    "'Stop! This isn't you! Blockout the haters: that's what this is giving.' - Sky",
    "So, whoever said William Afton is morally questionable: no. - Shay",
    "'If you want to murder a child, do it yourself.' - Jackson",
    "'i was sufficating in meat.' - el as robin",
    "'My wife is a beautiful woman!' 'And a bitch.' - Random Man, Sky as a rat",
    "'YOU SAID YOU'D BEHAVE!!!!' - Me and El",
    "'God, I love the meat room.' - Freya",
    "'I got spitroasted.' - Betty_Theft",
    "'I seduce the priest.' 'What do you say to him?' 'Do you know Garfield?' - Jackson, Sky, Jackson",
    "'Exactly, I'm Ratholic and they're protestrat.' - Sky as Rat Prince",
    "'Please don't live there' *rats leave after agreeing* - Shay as Emmy",
    "'Don't kink shame. - Freya",
    "'The pidgey uses stab.' - Shay",
    "'Windy isn't a flirt, she just terrifies people with her mere presence.' - Freya",
    "'Can I help you with your crippling alcoholism?, 'No, it's fine.' - Raven (Cyrus) and Cree (El)",
    "'Big strong mommy woman.' 'Emy, throw the cat' - Freya & El",
    "'The more you stare at the sun, the more you begin to worry as it does not move' - El",
    "'If you WAKE HIM UP, I HAVE A HAMMER.' - Shay",
    "'Dice maiden hates justice.' - Shay",
    "'Gay, GOcha' - Joan (El)",
    "'Your a pussy.' '**yeah I am actually curie is a fucking cat**' - Freya and Cyrus",
    "'Is Emy canonically a bimbo?' - Freya",
    "*In a Russian accent* 'I'm struggling' - Rue (El)",
    "'C'mere ya little lightbulb.' - Shay",
    "'The solution to a problem involving a portal… *another portal*'- Freya",
    "'Do I know what the map does?' 'It's a map! Map does map!' - Freya, El",
    "'Emy's not the brightest tool in the crayon box.' - Shay",
    "'Oh go ahead cuck, cuck all you want' - Freya",
    "'You're not dying, thomas is!' '**NOOOOO**' - Cyrus & El+Shay",
    "*In an emotional scene, about ||suicide||* 'Don't you dare leave me hanging . . . Don't GHOST me' - El (Xannex)",
    "'I dunno, you guys ARE the ghostbusters now.' - El",
    "'Thomas do not let youself get killed by that twink.' - Shay",
    "'We're here for the holy matrimony between Cyrus and Google Docs.' - Shay",
    "'Nile puts Zoidburg's life above his boyfriends' - Shay",
    "'Fuck you, don't psychology me!' - Cyrus",
    "'An abomination . . . I dunno' - El",
    "'Emy, you're good with melee . . . I just wish it wasn't on yourself.' - El",
    "'What if they're lying?' - Freya 'I'm on fire please!' - El",
    "'No no, this is friendship.' - Cy",
    "'Isn't beer just a potion of alcoholism?' - Freya",
    "'Hey Nile, who the **fuck** is your wife?!' - Cyrus",
    "'I believe you and your weirdly slanted never.' - Shay",
    "'It's time for lunch!' 'Nile, I hate to say this but it is not time for lunch, it's time for dinner!' '*distant sobbing*' - Shay & El & Shay",
    "'GAYS WHERE ARE WE GOING?' - Cyrus",
    "'Ah yes, D&D, Dungeons and Dishes' - Cyrus",
    "'Xander goes on Pintrest confirmed?' - Shay",
    "'I thought because you look so attractive and cute, you've already had a relationship?' - Shay (Nile)",
    "'Detroit: Become Plant.' - Shay",
    "(angrily) 'I'm getting back in the sink!' - Daisy (El)",
    "'I want to smoke daisy like a blunt.' -  Freya",
    "'Want a turnip? Want a turnip? I took out the Nightshade just for you.' Daisy (El)",
    "'Yeah, yeah I've cried before' 'I haven't' - Shay & El",
    "'You know what, we made Splatoon cannon, Fuck it.' - El",
    "'I don't have money, I'm dead!' - El (Xander)",
    "'Who needs gun when you have knife!' - Shay",
    "'Poor traumatized white boy' - Shay",
    "'Why wouldn't you pick the orphans?' - Shay",
    "'Sylvester needs a boyfriend' 'Sylvester's an asshole' - Cyrus & El",
    "'NO NO NO STOP NO' - literally everyone else",
    "'What is a dating' - Shay",
    "Lines going up and down, in a flannel way.",
    "'I want to take off home is where the heart is....fuck I'm short.....thank you, I'm going to find a place to burn this.' El (as Daisy)",
    "'Am I the leader of a *fucking revolution?*' - Freya",
    "'I can make it quick and painless.' 'I can make it slow and painful.' 'Blur bu blur de bur' -  Freya & El & Shay",
    "'Wait, you go under the bleachers?' 'Yeah?' 'Shit! I hid something down there!' - El, Shaylee, El",
    "'It's just one very bad game of clue.' - Shay",
    "'It's called ultimate frisbee for a reason.' - El",
    "'I read these books. breathes I'm adopted' - Shay (Nile)",
    "'Hey Shaylee, can you name all 5 orphans?' - Cyrus",
    "'Move over Curie, NILE'S the main character now!' - Shay",
    "'Ah yes, PE, the subject of which none of us are in.' - Shay",
    "'If you keep pushing his buttons like that, he's going to end up calling you a slur.' 'What??!?' 'I mean, it'd have to be one I can say.' 'He's going to call you fatherless.' -El, Cyrus, El, Shay",
    "'My notes say... This is cookie clicker wtf?' - El",
    "'Why do you have a lobster.' 'He's my friend.' - El & Shay",
    "'Nile has started to build a pillow fort.' - Shay",
    "'Okay, so I'm a terrible liar...please let me go?' - Shay",
    "'Is texas cannon to my universe now? I hate you.' - El",
    "'Olimar? From hit Nintendo series Pikmin? - Shay 'You know what, forget what his name was, his name is Olimar now.' - El",
    "'I call them soul-ovens.' - Freya",
    "'We can't weave. We can't mine. We're rats.' 'You can cook.' 'What?' '*sings that stupid song from Ratatouille*' - El and Freya respectively again",
    "'I pulled this shit from the aether and you're giving it back!?' -EL",
    "'Shay, do you have the hots for the wrestler milf?' - Freya",
    "'We Stan an unbothred king.' - Shay",
    "'Oh look at me, I'm the one in the closet now, Nile!' - El",
];

document.getElementById('button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote-display').innerText = `"${quotes[randomIndex]}"`;
}
);

function addData() {
    
}