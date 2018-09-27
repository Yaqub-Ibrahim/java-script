function simpleOperators (numberA, numberB) {
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let multiply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(multiply);
  console.log(divide);
}

//SkipCount by ____ for ____ starting at _____
function skipCounting (skipCount, times, startingNumber,){
  let number = startingNumber-skipCount;
  for (let i=1; i<=times; i++){
    number+= skipCount;
    console.log(number);
  }

}

let number = [4, 7, 9, 11];

simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipCounting(15, 10, 0);
