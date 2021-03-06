// Question: What is the difference between a parameter and an argument?

// Answer: An argument is what you pass to a function (in the parentheses) when you invoke it.
// A parameter is a variable that is the placeholder for the argument (that is provided when the
// function is invoked) while you are defining the function.  So you use parameters
// when you define a function and you use arguments when you invoke the function.

// Question: Within a function, what is the difference between return and console.log?

// Answer: A return will stop the execution of the function.  A console.log within
// a function does not stop the execution and the value within the console.log is
// printed in the console but it does not go/is not saved anywhere else.  When you
// use return you make the function return a value that can be used in other processes, functions, etc.

// Answer for Palindrome :

const checkPalindrome = (string) => {
  let lowCaseString = string.toLowerCase();
  let reversedStr = lowCaseString.split("").reverse().join("");
  return lowCaseString === reversedStr;
}

console.log(checkPalindrome("Radar"));

console.log(checkPalindrome("Borscht"));


// Answer for Digit Sum :
// My solution assumes that only positive numbers will be potential arguments

const sumDigits = (number) => {
  let numAsArr = number.toString().split("");
  let sum = 0;
  for (let i = 0; i < numAsArr.length; i++) {
    sum = sum + Number(numAsArr[i]);
  }
  return sum;
}

console.log(sumDigits(42));
console.log(sumDigits(1254));

// Answer for Pythagoras :

const calculateSide = (sideA, sideB) => {
  return Math.sqrt((sideA * sideA) + (sideB * sideB));
}

console.log(calculateSide(8, 6));


// Answer for Sum Array :

const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
 }

 console.log(sumArray([1, 2, 3, 4, 5, 6]));


 // Answers for Prime Numbers :

 const checkPrime = (number) => {
   if (number === 1) {
     return false;
   }
   if (number === 2) {
     return true;
   }
   let upperBound = Math.ceil(Math.sqrt(number));
   for (let i = 2; i <= upperBound; i++) {
     let numDividedByi = number / i;
     if (numDividedByi === Math.floor(numDividedByi)) {
       return false;
     }
   }
   return true;
 }

 // console.log(checkPrime(5));
 // console.log(checkPrime(16));
 // console.log(checkPrime(31));
 // console.log(checkPrime(59));

 const printPrimes = (number) => {
   for (let i = 2; i <= number; i++) {
     if (checkPrime(i)) {
       console.log(i);
     }
   }
 }

 // printPrimes(97);


// Answer for Insert Dash :

const insertDash = (number) => {
  let oddNumCount = 0;
  let numAsArr = number.toString().split("");
  let updatedNum = [];
  for (let i = 0; i < numAsArr.length; i++) {
    updatedNum.push(numAsArr[i]);
    if (Number(numAsArr[i]) % 2 !== 0) {
      oddNumCount++;
      if (oddNumCount === 2) {
        updatedNum.splice((updatedNum.length - 1), 0, "-");
        oddNumCount = 1;
      }
    } else {
      oddNumCount = 0;
    }
  }
  return updatedNum.join('');
}

console.log(insertDash(454793));
