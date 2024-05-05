const alphanumeric = "qwertyuiopasdfghjklzxcvbnm1234567890";

const palindromes = function (test) {
 test = test
  .toLowerCase()
  .split("")
  .filter ((char) => alphanumeric.includes(char))
  .join("");
const comparison = test.split("").reverse().join("");
return test === comparison;

}
// Do not edit below this line
module.exports = palindromes;
