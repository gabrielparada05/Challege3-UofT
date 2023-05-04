// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input and set the length from the HTML


function pickOne() {
  var length = document.getElementById("p-length").value;
  var characters = "Yf#2G$t!Lq3PvZ8xUoVbI6sTc7XaQ9yWjMkE0nHm4eD5wRiKpR$Jm5DWLx14cwSQjkpYdAy6Nfz8FgiU0Xb9eKu2ZVsnGqahBOv7HtEP";
  var password = "";
  for (var i = 0; i < length; i++) {
    var pickOne = Math.floor(Math.random() * characters.length);
    password += characters[pickOne]
  }
  return password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", function writePassword()
{
    var passwordText = document.querySelector("#password");
    var password = pickOne (9);
    passwordText.value = password;
}   )
