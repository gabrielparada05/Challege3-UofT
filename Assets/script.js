// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input and set the length from the HTML

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numerics = "1234567890"
var specialCharacters = "!@#$%^&*()_-+={}[]|;";
var size =  document.getElementById("p-length").value;
var count = 0;



//Checking values from users
function pickOne() {
  var characters = "";
  if (document.getElementById("uppercase").checked) {     
    characters+=upperCase;
  }
  if (document.getElementById("lowercase").checked) {
    characters+=lowerCase;
  }
  if (document.getElementById("numerics").checked) {
    characters+=numerics;
  }
  if (document.getElementById("special-character").checked) {
    characters+=specialCharacters;
  }

  // 2. if  condition is met, use value

  // randomize the password
  var length = document.getElementById("p-length").value;
  
  var password = "";
  for (var i = 0; i < length; i++) {
    var pickOne = Math.floor(Math.random() * characters.length);
    password += characters[pickOne]
  }
  return password;
};

// Get the checkboxes and the button
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var button = document.querySelector('button');

// Add event listener to button
button.addEventListener('click', function() {
  // Check if at least one checkbox is checked
  var checked = false;
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checked = true;
    }
  });

  // If no checkbox is checked, generate a message
  if (!checked) {
    alert('Please select at least one checkbox.');
  } else {
    // If at least one checkbox is checked, generate the password
    var password = pickOne();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
});

