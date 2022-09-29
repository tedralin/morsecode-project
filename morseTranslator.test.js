import {translateToMorseCode} from "./morseTranslator.js";
import {it, expect} from "@jest/globals";

it("Translate Sam", () => {
    const result = translateToMorseCode("Sam");
    expect(result).toBe("... .- --");
});

it("Translate 'Sam J'", () => {
    const result = translateToMorseCode("Sam J");
    expect(result).toBe("... .- -- / .---");
});

it("Translate 'Sam 20'", () => {
    const result = translateToMorseCode("Sam 20");
    expect(result).toBe("... .- -- / ..--- -----");
});

it("Empty string", () => {
    const result = translateToMorseCode("");
    expect(result).toBe("");
});

it("Invalid Character in string", () => {
    const error = "Unrecognized character in input";
    expect(() => translateToMorseCode("Sam+J")).toThrow(error);
});

