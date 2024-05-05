// sort array by age. return oldest
const findTheOldest = function(array) {
  array.sort((a,b) => age(a) > age(b) ? -1:1);
  console.table(array);
  return array[0];
};

// get age of person in array
function age(obj) {
  return (obj.yearOfDeath || 2024) - obj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;

