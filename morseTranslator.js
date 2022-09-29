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
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/"
};

export const translateToMorseCode = (textToConvert) => {
    // if text has a character not in the translation table
    const keyArr = Object.keys (morseTranslation);

    let convertedText = "";
    for (let i=0; i < textToConvert.length; i++) {
        const charToConvert = textToConvert.charAt(i).toUpperCase();
        if (keyArr.includes (charToConvert)) {
            convertedText += Object.values(morseTranslation[charToConvert]).join("") + " ";
        } else {
            throw new Error("Unrecognized character in input");
        }
        
    }
    return convertedText.trim();

    };

    export const translateToEnglish = (ArrayToConvert) => {
        // if text has a character not in the translation table
        const valueArr = Object.values (morseTranslation);
        console.log(valueArr);
    
        let convertedTextArr = [];
        let convertedChar = "";
        for (let i=0; i < ArrayToConvert.length; i++) {
            const charToConvert = ArrayToConvert[i];
            console.log(charToConvert)
            if (valueArr.includes (charToConvert)) {
                convertedChar = Object.keys(morseTranslation).find(key => morseTranslation[key] === charToConvert);
                convertedTextArr.push(convertedChar);
                console.log(convertedChar);

            } else {
                throw new Error("Unrecognized character in input");
            }
            
        }
        return convertedTextArr.join("");
    
        };