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

const without = function(arr, banned){
  let banList = new Map();
  let result = arr;
  for(let i = 0; i < banned.length; i++){
    banList.set(banned[i],0);
  }
  for(let i = 0; i < result.length; i++){
    if(banList.has(result[i])){
      result.splice(i,1);
    }
  }
  return result;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(without(words, ["lighthouse"]))
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);