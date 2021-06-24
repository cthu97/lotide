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

const assertArraysEqual = (input1, input2) =>{
  assertEqual(eqArrays(input1, input2),true);
}

const map = (array, callback) =>{
  const results = [];
  for (let item of array){
    results.push(callback(item))
  }

  return results;
}


//test cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const words2 = ["hello", "world", "lighthouse"]
const results2 = map(words2, word2 => word2[0]);
console.log(results2)

const test = []
const results3 = map(test, word0=>word0[0])
console.log(results3)

const test2 = [12,3,4,5,6]
const results4 = map(test, tester => tester[0])
console.log(results4)
