import {translateToMorseCode} from "./index";
import {it, expect} from "@jest/globals";

it("Translate Sam", () => {
    const result = translateToMorseCode("Sam");
    expect(result).toBe("... .- --");
});

it("Translate 'Sam J'", () => {
    const result = translateToMorseCode("Sam J");
    expect(result).toBe("... .- -- / .---");
});

it("Empty string", () => {
    const result = translateToMorseCode("");
    expect(result).toBe("");
});

it("Invalid Character in string", () => {
    const result = translateToMorseCode("Sam&Steph");
    expect(result).toBe("");
});

