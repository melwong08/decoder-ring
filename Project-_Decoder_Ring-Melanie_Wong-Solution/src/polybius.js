// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // create object with polybius square codes 
    let square = {a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, l: 13, m: 23, n: 33, o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54, v: 15, w: 25, x: 35, y: 45, z: 55} 
    //make sure 42 translates to "i/j"
    let revSquare = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35:"x", 45: "y", 55: "z"}
    
    //create empty output array
  let output = [];
    
   if(encode === true) {
       //if encode is true, turn letters into numbers
      //loop through the input letter by letter
     for (let i = 0; i < input.length; i++){
       //push the value into the output array & account for spaces
       if (input[i] === " "){
         output.push(input[i])
       } else {
       output.push(square[input[i]]);
       }
     }
   } else {
     //encode is false
     
     //odd number input should return false
     let findOdd = input.split(" ").join("");
     if (findOdd.length % 2 != 0) return false;
     
     //should account for spaces 
     
     //loop through the input numbers 2 by 2
     for (let i = 0; i < input.length; i += 2){
       if (input[i] === " ") {
         i++;
         output.push(" ");
       }
       let num = input[i] + input[i + 1]
       output.push(revSquare[num])
     }
   }
    
   return output.join(""); 
  }
    
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
