function simpleOperators (numberA, numberB) {
  let adding = numberA + numberB
  let subtract = numberA - numberB
  let multiply = numberA * numberB
  let divide = numberA / numberB
  console.log(adding);
  console.log(subtract);
  console.log(multiply);
  console.log(divide);
}

let number = [4, 7, 9, 11];

simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);

let skipCount = 0 //skipCount by 2's
for (let i=1; i<=5; i++){
  skipCount += 2;
  console.log(skipCount)
}
