function randomLength(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
var generatedLength = randomLength(8, 128)
console.log(generatedLength)

function generatePassword() {
  var length = generatedLength
      characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      passwordGenerated = "";
  for (var i = 0; i < length; ++i) {
    passwordGenerated += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }   
  return passwordGenerated;
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
generateBtn.addEventListener("click", writePassword)
