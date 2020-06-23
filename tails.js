const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
    return undefined;
  } else {
    console.log(`Assertion failed ${actual} !== ${expected}`);
    return undefined;
  }
};

const tail = function(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!