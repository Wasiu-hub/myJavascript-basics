const getNthElement = (index, array) => {
  // your code here
  if (index < array.length) {
    return array[index];
  }
  return array[index - array.length];
};

const arrayToCSVString = array => {
  // your code here
  return array.join(',');
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  const newArray = [...array, element]; // spread operator
  return newArray;
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  // your code here
  numbers.toString();
  return numbers.map(num => num.toString());
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
