


console.log('ddha');


// Create variable n
// Write an if / else block
// If the number passed in is even return a string "n is even"
// If the number is odd return a string "n is odd"


const n = 5
if (n % 2) {
  console.log('n is odd');
} else {
  console.log('n is even');
}


// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y


const x = 9
const y = 6

if (x > y) {
  console.log('x is greater than y');
} else if (x<y){
  console.log("x is smaller than y");
} else {
  console.log("x is equal to y");
}


// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anything else, the console should say "invalid input"


const userInput = 5

if (typeof userInput === 'number') {
  console.log(userInput **2);
} else if (typeof userInput === 'string') {
  console.log(userInput);
} else {
  console.log('invalid input');
}


// Create a switch block that will log a string for each day of the week.

// 1. Create a variable called `day`
// 1. The switch will be given a number and return the matching days of the week
// 1. e.g. if `day = 2`, the switch should print `Today is Tuesday` in the console.
// 1. Your switch block should also handle numbers out of range

const day = 19
const dayOfWeek = day % 7

switch (dayOfWeek) {
  case 1:
    console.log('today is Monday');
    break;
  case 2:
      console.log('today is Tuesday');
    break;
  case 3:
      console.log('today is Wednesday');
    break;
  case 4:
      console.log('today is Thursday');
    break;
  case 5:
      console.log('today is Friday');
    break;
  case 6:
      console.log('today is Saturday');
    break;
  case 0:
      console.log('today is Sunday');
    break;
  default:
    console.log('invalid input');
    break;
}



// Tell the user what eye colour their child would have.

// 1. Create two variables `parent1` and `parent2`
// 1. Given the eye colour of each parent, it should console log the probability
//    of their child having different eye colours, for example:
//    `Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%`
// 1. Use the following image as a reference

const eyeColorOfParent1 = "brown"
const eyeColorOfParent2 = "green"

if (eyeColorOfParent1 ==='brown' && eyeColorOfParent2==='brown') {
  console.log('the chances of your child having brown eyes is 75%,    green is 18.75% and blue eyes is 6.25%')
} else if ((eyeColorOfParent1 ==='green' && eyeColorOfParent2==='brown') || (eyeColorOfParent2 ==='green' && eyeColorOfParent1==='brown') ){
  console.log('the chances of your child having brown eyes is 50%,    green is 37.5% and blue eyes is 12.5%')
}
else if ((eyeColorOfParent1 ==='blue' && eyeColorOfParent2==='brown') ||(eyeColorOfParent2 ==='blue' && eyeColorOfParent1==='brown')){
  console.log('the chances of your child having brown eyes is 50%,    green is 0% and blue eyes is 50%')
}
else if (eyeColorOfParent1 ==='green' && eyeColorOfParent2==='green') {
  console.log('the chances of your child having brown eyes is 1%,    green is 75% and blue eyes is 25%')
}
else if ((eyeColorOfParent1 ==='green' && eyeColorOfParent2==='blue') || (eyeColorOfParent2 ==='green' && eyeColorOfParent1==='blue')) {
  console.log('the chances of your child having brown eyes is 0%,    green is 50% and blue eyes is 50%')
}
else if (eyeColorOfParent1 ==='blue' && eyeColorOfParent2==='blue') {
  console.log('the chances of your child having brown eyes is 0%,    green is 1% and blue eyes is 99%')
} else {
  console.log('no match result');
}