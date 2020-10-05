// Assignment Code
var generateBtn = document.querySelector("#generate");

function WritePassword(eButton){

  do{
    var criteriaLength = prompt("How many characters would you like to include in your password? (Passwords must be at least 8 characters in length, and can not be over 128 characters long.)");
  }while(parseInt(criteriaLength) > 128 || parseInt(criteriaLength) < 8); 
  alert("You will create a password with " + criteriaLength + " characters");

  const inputArray = [];
  const CharTypeNum = [];

  var Uppercase = prompt("Are Uppercase letters okay? (y/n) ONLY TYPE A 'y' or 'n'.")
  
  if (Uppercase == "y") { alert("Uppercase letters will be incorporated in your password.")
    inputArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    CharTypeNum.push(1);
  } else { alert("There will be no Uppercase Letters in your password.")}

  var Lowercase= prompt("Are Lowercase letters okay? (y/n) ONLY TYPE A 'y' or 'n'.");
  
  if (Lowercase == "y") { 
    inputArray.push("a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    CharTypeNum.push(2);
    alert("Lowercase letters will be incorporated in your password.");
  } else alert("There will be no Lowercase Letters in your password.")

  var Specialcase = prompt("Are Special letters okay? (y/n) ONLY TYPE A 'y' or 'n'.");
  
  if (Specialcase == "y") { 
    inputArray.push(" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "|", "}", "~");
    CharTypeNum.push(3)
    alert("Special letters will be incorporated in your password.");
  } else alert("There will be no Special Letters in your password.")

  var Numbers = prompt("Are Numbers okay? (y/n) ONLY TYPE A 'y' or 'n'.");
  
  if (Numbers == "y") { 
    inputArray.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    alert("Numbers will be incorporated in your password.");
    CharTypeNum.push(4);
  } else alert("There will be no Numbers in your password.")

  var PassGen = ""

  for (let i = 0; i < parseInt(criteriaLength); i++) {
    var RandomCharGen = inputArray[Math.floor(Math.random()*inputArray.length)];
    PassGen = RandomCharGen + PassGen;
  }
  
  alert ("Your new password is: " + PassGen)
  
}