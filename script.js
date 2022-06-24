// Assignment code here
//do you want uppercase letters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//do you want lowercase letters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"] //do you want numbers
var specChar = ["!","@","#","$","%","&","*","(",")"]; //do you want special characters
var userInput = "";
var userInputUpper;
var userInputLower;
var userInputNum;
var userInputSpc;
var choices;
var passChoices = "";
var again;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
//prompts the user to enter how many characters the password will be
userInput = prompt ("How many characters would you like your password to be? (Must be between 8-128 characters)");
  //loop if the number of password characters is outside the parameters
  while (userInput <= 7 || userInput >= 129) {
    alert("Password must be between 8-128 characters. Please try again.");
    var userInput = prompt ("How many characters would you like your password to be? (Must be between 8-128 characters)");
    console.log(userInput);
  }
  //confirm prompts for determining password character criteria
userInputUpper = confirm ("Do you want your password to contain Upper-Case Letters?");
  console.log(userInputUpper);
userInputLower = confirm ("Do you want your password to contain Lower-Case Letters?");
  console.log(userInputLower)
userInputNum = confirm ("Do you want your password to contain Numbers?");
  console.log(userInputNum);
userInputSpc = confirm ("Do you want your password to contain Special Characters?");
  console.log(userInputSpc);
//user selects no criteria 
while (!userInputUpper && !userInputLower && !userInputNum && !userInputSpc) {
    alert ("You must choose at least one (1) criteria");
    var userInputUpper = confirm ("Do you want your password to contain Upper-Case Letters?");
}
//user selects all criteria
  if (userInputUpper && userInputLower && userInputNum && userInputSpc) {
    choices = upperCase.concat(lowerCase, number, specChar);
  }
//user selects 3 criteria
  else if (userInputLower && userInputNum && userInputNum) {
    choices = lowerCase.concat(number, specChar);
  }
  else if (userInputLower && userInputNum && userInputUpper) {
    choices = lowerCase.concat(number,upperCase);
  }
  else if (userInputLower && userInputSpc && userInputUpper) {
    choices = lowerCase.concat(specChar,upperCase);
  }
  else if (userInputUpper && userInputNum && userInputSpc) {
    choices = upperCase.concat(number, specChar);
  }
//user selects 2 criteria
  else if (userInputUpper && userInputLower) {
    choices = upperCase.concat(lowerCase);
  }
  else if (userInputUpper && userInputNum) {
    choices = upperCase.concat(number);
  }
  else if (userInputUpper && userInputSpc) {
    choices = upperCase.concat(specChar);
  }
  else if (userInputLower && userInputSpc) {
    choices = lowerCase.concat(specChar);
  }
  else if (userInputLower && userInputNum) {
    choices = lowerCase.concat(number);
  }
  else if (userInputNum && userInputSpc) {
    choices = number.concat(specChar);
  }
//user selects 1 criteria
  else if (userInputUpper) {
    choices = upperCase;
  }
  else if (userInputLower) {
    choices = lowerCase;
  }
  else if (userInputNum) {
    choices = number;
  }
    else if (userInputSpc) {
    choices = specChar;
  }

  console.log(choices);
//function for randomizing selected criteria
for (let i = 0; i < parseInt(userInput); i++) {
  passChoices += choices[Math.floor(Math.random()*choices.length)];
}
console.log(passChoices);
return passChoices
}
//function for displaying password in HTML text box
function writePassword(){
var password =generatePassword()
var passwordText=document.querySelector("#password")
passwordText.value=password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
