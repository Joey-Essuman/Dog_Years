//Below is a variable:myAge with a value of 28.
const myAge = 29;
//Below is a variable:earlyYears with a value of 2.
let earlyYears = 2;
earlyYears *= 10.5;
console.log(earlyYears);
//Below is a variable:laterYears with a value of myAge - 2.
let laterYears = myAge - 2;
//Below, laterYears is multiplied by 4.
laterYears *= 4;
console.log(laterYears);
//myAgeInDogYears is the addition of earlyYears and laterYears.
let myAgeInDogYears = earlyYears + laterYears;
//Below is a variable:myName assigned the value of my name.
let myName = "Justice Cudjoe Essuman";
//Using the string method .toLowerCase, the value of myName is changed to lowercase letters.
myName = myName.toLowerCase();
//Displaying all what I have done above in the console.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`
);
