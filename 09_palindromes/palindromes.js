const palindromes = function (test) {
  let reverse = '';
  test = test
    .replace(/[!,. ]/g, "")
    .toLowerCase();
  for (i = 0; i<test.length; i++){
    reverse += test.charAt(test.length - i -1);
  }
  if (reverse == test) return true;
  else return false;
};
// Do not edit below this line
module.exports = palindromes;
