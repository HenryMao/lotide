const findKeyByValue = function(obj, val){
  for(key in obj){
    if(obj[key] == val){
      return key;
    }
  }
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`Assertion failed ${actual} !== ${expected}`);
    return;
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);