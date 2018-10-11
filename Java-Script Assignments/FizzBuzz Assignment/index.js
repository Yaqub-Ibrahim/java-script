


function fizzBuzz (input) {
  if ((input % 3 === 0 ) && (input % 5 === 0)) return 'FizzBuzz';
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return 'Buzz';
  if (typeof input !=='number') return 'This is not a number.'; //Change to NaN
  return "This test number does nothing important. The input was " + input + ".";

}

//Reminder: test all the test cases
const testNumber = 15; //change this number here to any number, letters must have quotations
console.log(fizzBuzz(testNumber));  //Logic of Problem needs to be copied and organized
