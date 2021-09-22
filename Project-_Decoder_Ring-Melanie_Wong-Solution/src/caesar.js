// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    console.log(input, shift)
    // loop through the input one character at a time 
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let output = [];
    let inputs = input.toLowerCase();
    if (shift === undefined || shift === 0 || shift > 25 || shift < -25) return false;
    //code for encode is true
    if (encode === true){
      //iterate through input
      for (let i = 0; i < inputs.length; i++){
        
        let aIndex = alphabet.indexOf(inputs[i]);
      if (aIndex != (-1)){
        //code for alphabet character
        //want to shift index of alphabet to get newIndex
       
       let newIndex = shift + aIndex;
        //console.log("newIndex", newIndex)
        //edge case: if letter is at end of alphabet, needs to wrap around alphabet 
        if (newIndex > 26){
          newIndex = newIndex - 26;
        } else if (newIndex < 1){
          newIndex = newIndex + 26;
        }
        
        //return the letter with index of given input letter plus shift value: alphabet [index]
        //push into a new array
        output.push(alphabet[newIndex]);
      } else {
        //code for when character isn't a letter
        //push blank spaces and characters into the new array as is
        output.push(inputs[i]);
        }
      }
    } //code if encode is false
      else {
      for (let i = 0; i < inputs.length; i++){
        let aIndex = alphabet.indexOf(inputs[i]);
        if (aIndex != (-1)){
          //newIndex 
          let newIndex = aIndex - shift;
          if (newIndex > 25){
            newIndex = newIndex - 26;
          } else if (newIndex < 0){
            newIndex = newIndex + 26;
          }
          output.push(alphabet[newIndex])
        } else {
          output.push(inputs[i]);
        }
      }
    }
    console.log(output.join("".toLowerCase()))
      return output.join("").toLowerCase();
  
    //take new array
    //join all letters in the array with .join()
//})
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
