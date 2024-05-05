// sort array by age. return oldest
const findTheOldest = function(array) {
  return array.reduce((a,b) => getAge(a) > getAge(b) ? a:b);
};

// get age of person
function getAge(obj) {
  return (obj.yearOfDeath || currentYear) - obj.yearOfBirth;
}

const currentYear = new Date().getFullYear();

// Do not edit below this line
module.exports = findTheOldest;

