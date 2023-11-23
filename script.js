// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordLength() {
  let userResponse = prompt('Please enter a number from 8 to 128');
  let userResponse = Number(userResponse);
  if (userResponse >= 8 && userResponse <= 128) {
    return userResponse;
  } else {
    return false;
  }


  // let userResponse = prompt('Please input the numbers between 8 to 128');
  // userResponse = Number(userResponse);
  // console.log(userResponse)
  // if (!userResponse) {
  //   console.log('It is not a number')
  // } else if (userResponse >= 8 && userResponse <= 128){
  //   console.log('success')
  // } else {
  //   console.log('It is not a number between range')
  // }
  // return userResponse
}

// getPasswordOptions()


// Function for getting a random element from an array
function getRandom(arr) {
  const randomCharacter = arr[Math.floor(Math.random() * arr.length)];
  return randomCharacter;
  // return Math.floor(Math.random() *arr.length)
}

// let randomUpperCase = getRandom(upperCasedCharacters); //////////////////////
// let randomLowerCasedCharacters = getRandom(lowerCasedCharacters);
// let randomspecialCharacters = getRandom(specialCharacters);
// let randomnumericCharacters = getRandom(numericCharacters);

// console.log({ randomUpperCase });
// console.log({ randomLowerCasedCharacters });
// console.log({ randomspecialCharacters });
// console.log({ randomnumericCharacters });///////////////////////////

// Function to generate password with user input
function generatePassword() {
  // Get user input for password lenth
  const passwordLength = getPasswordLength();

  if (!passwordLength) {
    return 'You have entered an invalid password legnth. Please try again.';
  }

  const includeUppercase = confirm('Do you want to include uppercase letter?');
  const includeLowercase = confirm('Do you want to include lowercase letters?');
  const includeNumbers = confirm('Do you want to include numbers?');
  const includeSpecialCharacters = confirm('Do you want to include special characters?');

  // check if user slected at least one charcter type
  if (
    !includeUppercase
    && !includeLowercase
    && !includeNumbers
    && !includeSpecialCharacters
  ) {
    return 'Please try again. You are required to select at least one character type.';
  }

} // Take note of ths closing. If code did not work, come back and check if it is rightly placed

// Create a start string string for the password.
// It should contain at least one of each selected character.
// That would ensure that one of each selected character type will appear at least once
let startString = "";

// Create an array to store all possible characters based on user input
let possibleCharacters = [];

if (includeUppercase) {
  const randomUpperCase = getRandom(upperCasedCharacters);
  startString += randomUpperCase;
  possibleCharacters.push(...upperCasedCharacters);
}

if (includeLowercase) {
  const randomLowerCase = getRandom(lowerCasedCharacters);
  startString += randomLowerCase;
  possibleCharacters.push(...lowerCasedCharacters);
}

if (includeNumbers) {
  const randomNumber = getRandom(numericCharacters);
  startString += randomNumber;
  possibleCharacters.push(...numericCharacters);
}

if (includeSpecialCharacters) {
  const randomspecialCharacters = getRandom(specialCharacters);
  startString += randomspecialCharacters;
  possibleCharacters.push(...specialCharacters);
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword()); // added parenthesis to writePassword in order to call the function. 