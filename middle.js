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

const middle = function(arr){
  if(arr.length < 3){
    return [];
  }else if(arr.length%2){
    return [arr[Math.floor(arr.length/2)]];
  }else{
    return [arr[arr.length/2 - 1], arr[arr.length/2]];
  }
}
console.log(middle[1,2]);
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]))