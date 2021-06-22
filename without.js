const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  };
}

const eqArrays = (input1, input2) => {
  if (input1.length !== input2.length) {
    return false;
  }
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] !== input2[i]) {
      return false;
    }
  }
  return true;
};

const without = (source, itemsToRemove) => {

  let newArr = source.slice()
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
        if (source[j] === itemsToRemove[i]) {
          newArr.splice(j, 1);
        }
      }
    }

    return newArr
  }


const assertArraysEqual = (input1, input2) => {
  assertEqual(eqArrays(input1, input2), true);
}

//tests cases

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

