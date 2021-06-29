const assertEqual = require('./assertEqual');

const eqArrays = require ('./eqArrays');

const middle = (arr) => {
  //let midArr = [];
  let mid = 0;
  if (arr.length <= 2) {
    //if 2 or less numbers in arr
    return []
  }
  if (arr.length % 2 !== 0) {
    //odd number ones
    let newArr =[]
    mid = arr.length / 2
    mid = Math.round(mid)
    newArr.push(mid)
    console.log(newArr)
    return newArr
  }
  else if (arr.length % 2 === 0) {
    //even numbers
    mid = arr.length / 2
    return arr.slice(mid - 1, mid + 1)
  }
}




module.exports = middle;