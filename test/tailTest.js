const tails = require('../tails');
const assertEqual = require('../assertEqual');
const words = ["Yo Yo", "Lighthouse", "Labs"];
tails(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!