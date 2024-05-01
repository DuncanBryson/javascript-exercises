const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;
};

const sum = function(numbers) {
  let sum = 0;
  for (const number of numbers) sum += number;
  return sum;
};

const multiply = function(numbers) {
  let total = 1;
  for (const number of numbers) total *= number;
  return total;
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
