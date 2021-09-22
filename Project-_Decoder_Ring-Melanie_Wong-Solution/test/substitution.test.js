// Write your tests here!
const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
  //input can include spaces and letters
  it ("should maintain spaces when encoding", () => {
    const expected = "yp ysii.rs";
    const actual = substitution("my message", ".waeszrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  })
  
  it ("should maintain spaces when decoding", () => {
    const expected = "my message";
    const actual = substitution("yp ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal(expected);
  })
  
  //input can include special characters
  it ("should accept an input with special characters", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  })
  
  it("should return false if the alphabet string is not exactly 26 characters", () => {
    const expected = false;
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  })
  
  it ("should return false if the alphabet parameter doesn't have unique characters", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  })
  
})


//alphabet parameter must be a strong of exactly 26 characters 