const morseTranslation = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": "/"
};

export const translateToMorseCode = (textToConvert) => {
    let convertedText = "";
    for (let i=0; i < textToConvert.length; i++) {
        const charToConvert = textToConvert.charAt(i).toUpperCase();
        console.log(charToConvert);
        convertedText += Object.values(morseTranslation[charToConvert]).join("") + " ";
    }
    return convertedText.trim();

    };