const tails = function(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

module.exports = tails;
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

