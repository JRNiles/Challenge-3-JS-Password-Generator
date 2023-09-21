function generatePassword() {
  var length = 8
      characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      passwordGen = "";
  for (var i = 0; i < length; ++i) {
    passwordGen += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }   
  return passwordGen;
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
