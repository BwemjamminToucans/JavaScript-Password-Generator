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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//prompts the user to enter how many characters the password will be
userInput = prompt ("How many characters would you like your password to be? (Must be between 8-128 characters)");
  //loop if the number of password characters is outside the parameters
  while (userImput <= 7 || userImput >= 129) {
    alert("Password must be between 8-128 characters. Please try again.");
    var userImput = prompt ("How many characters would you like your password to be? (Must be between 8-128 characters)");
    console.log(userImput);
  }
userInputUpper = confirm ("Do you want your password to contain Upper-Case Letters?");
userInputLower = confirm ("Do you want your password to contain Lower-Case Letters?");
userInputNum = confirm ("Do you want your password to contain Numbers?");
userInputSpc = confirm ("Do you want your password to contain Special Characters?");
 //user selects no criteria 
if (!userInputUpper && !userInputLower && !userInputNum && !userInputSpc) {
    choices = alert ("You must choose at least one (1) criteria");
}
//user selects all criteria
  else if (userInputUpper && userInputLower && userInputNum && userInputSpc) {
    choices = userInputUpper.concat(userInputLower, userInputNum, userInputSpc);
  }
//user selects 3 criteria
  else if (us) {

  }
//user selects 2 criteria

//user selects 1 criteria

//function for randomizing selected criteria

var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
