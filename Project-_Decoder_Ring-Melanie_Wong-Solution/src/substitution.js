// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //return false if sub alphabet is missing, is not 26 characters
    if (!alphabet || alphabet.length != 26) return false;
    
    //should return false if sub alphabet doesn't have unique characters
    const findRep = alphabet.split("")
    findRep.sort()
    if (findRep[1] === findRep[2]) return false;
    
    //create a blank string
    let output = "";
    
    //create a string with normal alphabet (alpha)
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    //if encode is true 
    if (encode === true){
      //loop through input
      //if input character matches a letter of alpha
      //find the index of the alpha letter
      //return the letter of the alphabet input that matches the index of alpha
      for (let i = 0; i < input.length; i++){
         if (input[i] === " ") {output += input[i]}
        for (let j = 0; j < alpha.length; j++) {
          for (let k = 0; k < alphabet.length; k++){
          if (input[i] === alpha[j] && j === k){
            output += alphabet[k];
          }
        }
      }
    }
    } else {
     // console.log(input)
    //if encode is false
    //loop through input  
    //if input character matches a letter of the alphabet input
    //find the index of alphabet input letter
    //return the alpha letter that matches the idex of alphabet index
      for (let i = 0; i < input.length; i++){
         if (input[i] === " ") {output += input[i]}
        for (let j = 0; j < alpha.length; j++){
          for (let k = 0; k < alphabet.length; k++){
            if (input[i] === alphabet[k] && j === k){
                output += alpha[j];
                }
          }
        }
      }      
    }
      
    console.log(output);
    return output;
 }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
