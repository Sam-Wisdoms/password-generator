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
function getPasswordOptions() {
  let userResponse = prompt('Please input the numbers between 8 to 128');
  userResponse = Number(userResponse);
  console.log(userResponse)
  if (!userResponse) {
    console.log('It is not a number')
  } else if (userResponse >= 8 && userResponse <= 128){
    console.log('success')
  } else {
    console.log('It is not a number between range')
  }
  return userResponse
}

getPasswordOptions()


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  // return Math.floor(Math.random() *arr.length)
}

let randomUpperCase = getRandom(upperCasedCharacters);
let randomLowerCasedCharacters = getRandom(lowerCasedCharacters);
let randomspecialCharacters = getRandom(specialCharacters);
let randomnumericCharacters = getRandom(numericCharacters);

console.log({randomUpperCase});
console.log({randomLowerCasedCharacters});
console.log({randomspecialCharacters});
console.log({randomnumericCharacters});

// Function to generate password with user input
function generatePassword() {

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