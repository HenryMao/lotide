const eqObjects = function(object1, object2) {
  for(key in object1){
    if(object1[key] != object2[key]){
      return false;
    }
  }
  for(key in object2){
    if(object1[key] != object2[key]){
      return false;
    }
  }
  return true;
  
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false