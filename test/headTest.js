const head = require('../head')
const assertEqual = require('../assertEqual')

//test assertions

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
