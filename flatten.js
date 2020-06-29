/*const flatten = function(arr){
  let still = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].isArray){
      
    }
  }
  if(still){
    return flatten(arr);
  }else{
    return arr
  }
}*/


let arr = [1,2,3,4];
arr[0][0] = [1,3,4];
console.log(arr);