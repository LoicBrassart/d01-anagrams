const assert = require("assert");
const anagram = require("./try");

describe("anagram test", () => {
  it("anagram should be a function", () => {
    assert.equal(typeof anagram, "function");
  });
  it("should return true", () => {
    assert.equal(anagram("listen", "silent"), true);
  });
  it("should return true", () => {
    assert.equal(anagram("elbow", "be low"), true);
  });
  it("should return false", () => {
    assert.equal(anagram("inch", "chins"), false);
  });
});
