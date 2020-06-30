

const middle = function(arr){
  if(arr.length < 3){
    return [];
  }else if(arr.length%2){
    return [arr[Math.floor(arr.length/2)]];
  }else{
    return [arr[arr.length/2 - 1], arr[arr.length/2]];
  }
}
module.exports = middle;