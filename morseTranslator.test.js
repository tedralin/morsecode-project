import {translateToMorseCode, translateToEnglish} from "./morseTranslator.js";
import {it, expect} from "@jest/globals";

// it("Translate Sam", () => {
//     const result = translateToMorseCode("Sam");
//     expect(result).toBe("... .- --");
// });

// it("Translate 'Sam J'", () => {
//     const result = translateToMorseCode("Sam J");
//     expect(result).toBe("... .- -- / .---");
// });

// it("Translate 'Sam 20'", () => {
//     const result = translateToMorseCode("Sam 20");
//     expect(result).toBe("... .- -- / ..--- -----");
// });

// it("Empty string", () => {
//     const result = translateToMorseCode("");
//     expect(result).toBe("");
// });

// it("Invalid Character in string", () => {
//     const error = "Unrecognized character in input";
//     expect(() => translateToMorseCode("Sam+J")).toThrow(error);
// });


it("Translate to Sam", () => {
    const result = translateToEnglish("... .- --");
    expect(result).toBe("SAM");
});

// it("Translate to 'Sam J'", () => {
//     const result = translateToEnglish("... .- -- / .---");
//     expect(result).toBe("SAM J");
// });

// it("Translate to 'Sam 20'", () => {
//     const result = translateToEnglish("... .- -- / ..--- -----");
//     expect(result).toBe("SAM 20");
// });

// it("Empty string", () => {
//     const result = translateToEnglish("");
//     expect(result).toBe("");
// });

// it("Invalid Character in string", () => {
//     const error = "Unrecognized character in input";
//     expect(() => translateToEnglish("Sam+J")).toThrow(error);
// });
