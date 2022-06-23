// Assignment code here
//do you want uppercase letters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//do you want lowercase letters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"] //do you want numbers
var specChar = ["!","@","#","$","%","&","*","(",")"]; //do you want special characters
var userImput = prompt ("How many characters would you like your password to be? (Must be between 8-128 characters)")
var userImput = prompt ("Do you want your password to contain Upper-Case Letters?")
var userImput = prompt ("Do you want your password to contain Lower-Case Letters?")
var userImput = prompt ("Do you want your password to contain Numbers?")
var userImput = prompt ("Do you want your password to contain Special Characters?")

  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
