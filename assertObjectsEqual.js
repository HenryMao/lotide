const eqObjects = function(object1, object2) {
  for(key1 in object1){
    if(Array.isArray(object1[key1])){
      if(!eqArrays(object1[key1],object2[key1])){
        return false;
      }
    }else{
      if(object1[key1] != object2[key1]){
        return false;
      }
    }
  }
  for(key2 in object2){
    if(Array.isArray(object2[key2])){
      if(!eqArrays(object1[key2],object2[key2])){
        return false;
      }
    }else{
      if(object1[key2] != object2[key2]){
        return false;
      }
    }
  }
  return true;
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

const assertObjectsEqual = function(obj1, obj2){
  const inspect = require('util').inspect;
  if(eqObjects(obj1,obj2))
    return (`Assertion passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  else
    return (`Assertion failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
}
console.log(assertObjectsEqual({a:1},{a:2}));