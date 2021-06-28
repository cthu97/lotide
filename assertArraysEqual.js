
const assertEqual = require('./assertEqual')

const eqArrays = require('./eqArrays')


const assertArraysEqual = (input1, input2) =>{
  assertEqual(eqArrays(input1, input2), true);
}


module.exports = assertArraysEqual;