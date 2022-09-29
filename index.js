import {translateToMorseCode} from "./morseTranslator.js";
// import * as getDom from "./getDom.js";

const englishText = document.querySelector(".convert__text__english");
const morseText = document.querySelector(".convert__morse__code");
const textButton = document.querySelector(".convert-text__button");
const morseButton = document.querySelector(".convert-morse__button");

morseButton.addEventListener("click", () => {

    event.preventDefault();
    const inputText = englishText.value;
    const convertedMorseText = translateToMorseCode(inputText);
    if (convertedMorseText) {
        morseText.value = convertedMorseText;   
    }
}
);

