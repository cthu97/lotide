// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

const eqObjects = (object1, object2) => {
  const obj1 = Object.keys(object1)
  const obj2 = Object.keys(object2)
  if (obj1.length !== obj2.length) {
    return false
  }

    for (const key of obj1) {
        if (!object2[key] || !eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
      return true;
    };
  
