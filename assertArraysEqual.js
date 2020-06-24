const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`Assertion failed ${actual} !== ${expected}`);
    return;
  }
};

const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }else{
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      }
    }
    return true;
  }
  
}

const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2))
    console.log(`Assertion passed: ${arr1} === ${arr2}` );
  else
    console.log(`Assertion failed: ${arr1} !== ${arr2}`);
}
