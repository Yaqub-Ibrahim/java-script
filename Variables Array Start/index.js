//Hello World Fucntion
function greet (firstName, lastName){ //parameters
  console.log('Hello' + firstName + "World" + lastName);
}

function square (number){
  return number*number;
}

//firstName, lastName, age, ageAfraid, hair, male, female, confidence
YaqubIbrahim = ["Yaqub", "Ibrahim", 16, 29, "afro", true, false, null];
MeganSpence = ["Megan", "Spence", 14, null, true, false, true,];

//Calling functions, with arguments
greet (YaqubIbrahim[0], YaqubIbrahim[1]);
greet (MeganSpence[0], MeganSpence[1]);
greet (square(YaqubIbrahim[2]), MeganSpence[2]);
