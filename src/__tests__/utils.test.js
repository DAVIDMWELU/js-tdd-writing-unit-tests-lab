// Your tests here
import { pointsForWord, isPalindrome } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    expect(pointsForWord("test")).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    expect(pointsForWord("tEsT")).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    expect(pointsForWord("")).toBe(0);
  });

  it("throws an error if input is not a string", () => {
    expect(() => pointsForWord(123)).toThrow("Input must be a string");
  });

  it("doubles the points if the word is a palindrome", () => {
    expect(pointsForWord("racecar")).toBe(14);
  });
});

describe("isPalindrome", () => {
  it("returns true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("handles uppercase and lowercase input", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });
});
