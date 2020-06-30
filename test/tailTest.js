const tails = require('../tails');
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tails", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tails([1, 2, 3]), [2,3]);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(tails(['5']), []); 
  });
});
//tails(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!