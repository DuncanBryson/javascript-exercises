const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.reduce((sum, currentItem) =>  sum + currentItem ,0);
};

const multiply = function(array) {
  return array.reduce((total,currentItem) => total * currentItem)
};

const power = function(num,pow) {
	return num ** pow;
};

const factorial = function(factorial) {
	let answer = 1;
  for (let i = factorial; i>1; i--) answer *=i;
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
