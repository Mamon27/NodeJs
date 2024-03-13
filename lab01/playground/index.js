const _ = require('lodash');
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = _.map(numbers, (num) => num * num);
console.log('Mapped array:', squaredNumbers);

const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);
console.log('Filtered array (even numbers):', evenNumbers);

const unsortedArray = [5, 2, 8, 1, 7];
const sortedArray = _.sortBy(unsortedArray);
console.log('Sorted array:', sortedArray);

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = _.uniq(arrayWithDuplicates);

_.forEach(numbers, (num, index) => {
  console.log(`Element at index ${index}: ${num}`);
});
