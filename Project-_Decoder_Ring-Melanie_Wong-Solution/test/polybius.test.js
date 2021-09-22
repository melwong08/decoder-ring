// Write your tests here!
const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
  //output should be a string
  it ("should output a string", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  })
  
  //number of characters in the string excluding spaces should be even, else return false
  it ("should output an even number of characters, excluding spaces", () => {
    const actual = polybius("thinkful");
    expect(actual.length % 2).to.eql(0);
  })
  
  //spaces should be maintained throughout
  it ("should maintain spaces throughout", () => {
    const expected = "2345 23513434112251";
    const actual = polybius("my message");
    expect(actual).to.equal(expected);
  })
  
  it ("should return false if length of all numbers is odd", () => {
    const expected = false;
    const actual = polybius("1324870", false);
    expect(actual).to.equal(expected);
  })
  
  //letters 'i' and 'j' share a space, when encoding both letters can be converted to 42, but when decoding both letters should somehow be shown
  it ("should encode i and j to 42, and decode 42 to both letters", () => {
    const expected = "thi/jnkful";
    const actual = polybius("4432423352125413", false)
    expect(actual).to.equal(expected);
  })
  
  })



