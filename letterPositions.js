const letterPositions = function(str){
  let results = {};
  for(let i = 0; i < str.length; i++){
    if(results[str[i]]){
      results[str[i]].push(i);
    }else{
      results[str[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions("aaabbbccccddddd"));