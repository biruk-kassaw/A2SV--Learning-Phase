const _ = require('lodash');

const numbers = [5, 2, 9, 1, 5, 6];

const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); 

const greaterThanFour = _.filter(numbers, (num) => num > 4);
console.log(greaterThanFour); 


const maxNumber = _.max(numbers);
console.log(maxNumber); 

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chunkedArray = _.chunk(numbers2, 3);
console.log(chunkedArray);
