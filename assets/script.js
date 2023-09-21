function generatePassword() {
  var length = 8
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      passGen = "";
  for (var i = 0; i < length; ++i) {
    passGen += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }   
  return passGen;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
