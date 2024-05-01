const sumAll = function(intOne,intTwo) {
  let sum = 0;
  if (errorCatcher(intOne,intTwo)) return "ERROR";
  let lowerBound = intOne,
   upperBound = intTwo;
  if (intOne > intTwo) lowerBound = intTwo, upperBound = intOne;
  for (let i = lowerBound; i <= upperBound; i++){
    sum += i;
  }
  return sum;
};

function errorCatcher(intOne, intTwo){
  if (intOne < 0 || intTwo < 0) return true;
  else if (typeof intOne != 'number' || typeof intTwo != 'number') return true;
  else return false;
}

// Do not edit below this line
module.exports = sumAll;
