const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`Assertion failed ${actual} !== ${expected}`);
    return;
  }
};


const countLetters = function(str){
  let result = {};
  for(let char of str){
    if(result[char]){
      result[char]++;
    }else{
      result[char] = 1;
    }
  }
  return result;
}

console.log(countLetters("aaabbbsssscccc"));

module.exports = countLetters;