// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Arrays of all the character types in the generator
  var numberCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialChar = ['/', '%', '_', '@', "'", '?', '#', '!', '^', '$', '~', '-', '+'];
  var possibleChar = [];

  //Asks the user how many characters they want.
  characterAmount = prompt("How many characters do you want?" + "\rBetween 8-128 characters.");
  if (characterAmount < 8 || characterAmount > 128) {
    return "Please chose a valid character amount.";
    //Restart prompt if they dont give a valid answer
  } else if (isNaN(characterAmount)) {
    characterAmount = prompt("Please enter a valid Number.");
  } else {
    alert("Your password will be " + characterAmount + " Characters long.");
  }

  //Asks the user if they want lowercase letters
  isLowerCase = confirm("Lowercase Letters?");
  if (isLowerCase) {
    var turnLowerCase = alert("Your password will have lowercase characters.");

  } else {
    alert("Your password will not have lowercase characters.");
  }

  //Same as lowercase prompt, but with uppercase.
  isUpperCase = confirm("Uppercase Letters?");
  if (isUpperCase) {
    var turnLowerCase = alert("Your password will have Uppercase characters.");

  } else {
    alert("Your password will not have uppercase characters.");
  }


  //Asks if the user if they want numbers
  hasNumbers = confirm("do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password will have numbers.");

  } else {
    alert("Your password will not have numbers.");
  }

  //Asks the user if they want Special characters
  hasSpecialCharacters = confirm("do you want to use special characters?");
  if (hasSpecialCharacters) {
    alert("Your password will have special characters.");

  } else {
    alert("Your password will not have special characters.");
  }


  // In the event that the user thinks they're funny and selects no character types.
  if (isLowerCase === false && isUpperCase === false && hasNumbers === false && hasSpecialCharacters === false) {
    return "Select at least one character type!";
  };

  //groups character types that are selected on the prompts
  if (isLowerCase) {
    possibleChar = possibleChar.concat(alphabetLower);
  }
  if (isLowerCase) {
    possibleChar = possibleChar.concat(alphabetUpper);
  }
  if (isLowerCase) {
    possibleChar = possibleChar.concat(numberCharacters);
  }
  if (isLowerCase) {
    possibleChar = possibleChar.concat(specialChar);
  }

  //RNG (random) System for pulling random characters from the arrays
  let fullPassword = ""
  for (let i = 0; i < characterAmount; i++) {
    let rng =[Math.floor(Math.random() * possibleChar.length)];
    fullPassword = fullPassword + possibleChar[rng];
  }
  return fullPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

