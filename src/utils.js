// Your code here
export function pointsForWord(word) {
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
    let points = 0;
    for (const char of word.toLowerCase()) {
      points += /[aeiou]/.test(char) ? 1 : 2;
    }
    return isPalindrome(word) ? points * 2 : points;
  }
  
  export function isPalindrome(word) {
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters");
    }
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
  }