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
var passChoices;
var generatePassword =(writePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//prompts the user to enter how many characters the password will be
userInput = prompt ("How many characters would you like your password to be? (Must be between 8-128 characters)");
  //loop if the number of password characters is outside the parameters
  while (userInput <= 7 || userInput >= 129) {
    alert("Password must be between 8-128 characters. Please try again.");
    var userInput = prompt ("How many characters would you like your password to be? (Must be between 8-128 characters)");
    console.log(userInput);
  }
userInputUpper = confirm ("Do you want your password to contain Upper-Case Letters?");
  console.log(userInputUpper);
userInputLower = confirm ("Do you want your password to contain Lower-Case Letters?");
  console.log(userInputLower)
userInputNum = confirm ("Do you want your password to contain Numbers?");
  console.log(userInputNum);
userInputSpc = confirm ("Do you want your password to contain Special Characters?");
  console.log(userInputSpc);
//user selects no criteria 
if (!upperCase && !lowerCase && !userInputNum && !userInputSpc) {
    choices = alert ("You must choose at least one (1) criteria");
}
//user selects all criteria
  else if (upperCase && lowerCase && number && specChar) {
    choices = upperCase.concat(lowerCase, number, specChar);
  }
//user selects 3 criteria
  else if (lowerCase, number, specChar) {
    choices = lowerCase.concat(number, specChar);
  }
  else if (lowerCase, number, upperCase) {
    choices = lowerCase.concat(number,upperCase);
  }
  else if (lowerCase, specChar, upperCase) {
    choices = lowerCase.concat(specChar,upperCase);
  }
  else if (upperCase, number, specChar) {
    choices = upperCase.concat(number, specChar);
  }
//user selects 2 criteria
  else if (upperCase, lowerCase) {
    choices = upperCase.concat(lowerCase);
  }
  else if (upperCase, number) {
    choices = upperCase.concat(number);
  }
  else if (upperCase, specChar) {
    choices = upperCase.concat(specChar);
  }
  else if (lowerCase, specChar) {
    choices = lowerCase.concat(specChar);
  }
  else if (lowerCase, number) {
    choices = lowerCase.concat(number);
  }
  else if (number, specChar) {
    choices = number.concat(specChar);
  }
//user selects 1 criteria
  else if (upperCase) {
    choices = upperCase;
  }
  else if (lowerCase) {
    choices = lowerCase;
  }
  else if (number) {
    choices = number;
  }
    else if (specChar) {
    choices = specChar;
  }

  console.log(choices);
//function for randomizing selected criteria
var passChoices = choices[Math.floor(Math.random()*choices.length)]



var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
