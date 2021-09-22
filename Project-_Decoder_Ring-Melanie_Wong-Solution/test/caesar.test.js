// Write your tests here!
const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
  //testing correct coded message
  it("should return the correct coded message", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  })
  
  //testing correct decoded message
  it("should return the correct decoded message", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  })
  
  //testing shift wrap around alphabet
  it("should shift to wrap around the alphabet", () => {
    const expected = "qefkhcri";
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  })
  
  //testing false if shift value not present 
  it("should return false if shift value isn't present", () => {
    const expected = false;
    const actual = caesar("thinkful");
    expect(actual).to.equal(expected);
  })
  
  //testing 0 shift value
  it("should return false if shift value is 0", () => {
    const expected = false;
    const actual = caesar("thinkful", 0);
    expect(actual).to.equal(expected);
  })
  
  //testing <(-25) shift value
  it("should return false if shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  })
  
  //testing >25 shift value
  it("should return false if shift value is greater than 25", () => {
    const expected = false;
    const actual = caesar("thinkful", 99);
    expect(actual).to.equal(expected);
  })
  
  //testing spaces & non-alphabet symbols
  it("should maintain spaces and non-alphabetic symbols throughout", () => {
    const expected = "a message.";
    const actual = caesar("d phvvdjh.", 3, false);
    expect(actual).to.equal(expected);
  })
  
  //testing capital letters
  it("should ignore capital letters", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  })
})