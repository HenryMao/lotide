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

module.exports = eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false