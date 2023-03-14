function generateJoke() {
  const jokes = [
    "Two bytes meet.  The first byte asks, “Are you ill?”\nThe second byte replies, “No, just feeling a bit off.”",
    "Q. How did the programmer die in the shower?\nA. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
    "How many programmers does it take to change a light bulb?\nNone – It’s a hardware problem",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
    "Programming is like sex:One mistake and you have to support it for the rest of your life.",
    "A man is smoking a cigarette and blowing smoke rings into the air.  His girlfriend becomes irritated with the smoke and says, “Can’t you see the warning on the cigarette pack?  Smoking is hazardous to your health!” To which the man replies, “I am a programmer.  We don’t worry about warnings; we only worry about errors.”",
  ];
  let randomIndex = Math.floor(Math.random() * jokes.length);
  selectedJoke = jokes[randomIndex];
  return selectedJoke;
}

module.exports={generateJoke}

