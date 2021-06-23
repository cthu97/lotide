const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  };
}

const countLetters = (word) => {
  let sepWord = word.split(" ").join('');
  let letterCount = {};
  for (let letter of word) {
    if (letter !== ' ') {
      letterCount[letter] ? letterCount[letter] += 1 : letterCount[letter] = 1;
    } else {
      continue;
    }
  };
  return letterCount;

}

console.log(countLetters("lighthouse labs"))
