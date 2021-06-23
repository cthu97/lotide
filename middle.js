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

const middle = (arr) => {
  //let midArr = [];
  let mid = 0;
  if (arr.length <= 2) {
    //if 2 or less numbers in arr
    return []
  }
  if (arr.length % 2 !== 0) {
    //odd number ones
    mid = arr.length / 2
    mid = Math.round(mid)
    return arr[mid - 1]
  }
  else if (arr.length % 2 === 0) {
    //even numbers
    mid = arr.length / 2
    return arr.slice(mid - 1, mid + 1)
  }
}


console.log(middle([1, 2, 3, 4, 5, 6]))
