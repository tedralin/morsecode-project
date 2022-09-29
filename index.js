import {translateToMorseCode, translateToEnglish} from "./morseTranslator.js";

const englishText = document.querySelector(".convert__text__english");
const morseText = document.querySelector(".convert__morse__code");
const textButton = document.querySelector(".convert-text__button");
const morseButton = document.querySelector(".convert-morse__button");

morseButton.addEventListener("click", (event) => {

    event.preventDefault();
    const inputText = englishText.value;
    const convertedMorseText = translateToMorseCode(inputText);
    if (convertedMorseText) {
        morseText.value = convertedMorseText;   
    }
}
);

textButton.addEventListener("click", (event) => {
    event.preventDefault();
    // const inputMorseArr = morseText.value.split(" ");
    const convertedEnglishText = translateToEnglish(morseText.value);
    console.log (convertedEnglishText);
    if (convertedEnglishText) {
        englishText.value = convertedEnglishText;   
    }
}
);

