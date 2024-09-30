// counting vowel
function countVowel(str) {
  let count = 0;
  for (const chart of str) {
    if (
      chart === "a" ||
      chart === "e" ||
      chart === "i" ||
      chart === "o" ||
      chart === "u"
    ) {
      count++;
    }
  }
  return count;
}

let result = countVowel("showrov kumar ghosh");

// console.log(result);

// finding consonant finding from a string

function findConsonant(cons) {
  let value = 0;
  for (const num of cons) {
    if (num != "a" && num != "e" && num != "i" && num != "o" && num != "u") {
      value++;
    }
  }
  return value;
}

const sk = "this is showrov ghosh";

const resultOfConst = findConsonant(sk);

// console.log(sk.length);
// console.log(resultOfConst);

// count vowel using arrow functiuon

const countVow = (str) => {
  let count = 0;
  for (const chart of str) {
    if (
      chart === "a" ||
      chart === "e" ||
      chart === "i" ||
      chart === "o" ||
      chart === "u"
    ) {
      count++;
    }
  }
  return count;
};

let val = countVow('this is ghosh');

console.log(val);
