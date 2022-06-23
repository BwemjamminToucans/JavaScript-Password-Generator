// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //do you want uppercase letters
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //do you want lowercase letters
  var lower = "abcdefghijklmnopqrstuvwxyz";
  //do you want numbers
  var number = "0123456789";
  //do you want special characters
  var characters = "!@#$&";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
