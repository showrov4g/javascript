// Implement a function which convert the given boolean value into its string representation.

// // Note: Only valid inputs will be given.


function booleanToString(b){
    if(typeof b !== 'boolean'){
        return 'it is not a boolean';
    }else{
        return "it is a boolean";
    }
    return b.toString();
  }


//   rite a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

  function repeatStr (n, s) {
    return s.repeat(n);
  }
  
//   Given a non-empty array of integers, return the result of multiplying the values together in order. Example:



function doubleInteger(i) {
    // i will be an integer. Double it and return it.

    return i*2;
  }

let result = doubleInteger(8);
console.log(result);
