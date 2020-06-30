This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @henrymao/lotide`

**Require it:**

`const _ = require('@henrymao/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
* `assertArraysEqual(arr1, arr2)`: self-explanatory
*  `head(arr)`: finds the first element of an array
* `tails(arr)`: returns everything but the first item
*  `middle(arr)`: returns the middle element of the array
*  `assertEqual(val1, val2)`: as the name suggests
*  `assertObjectsEqual(obj1, obj2)`: checks whether two objects are equal
*  `countLetters(str)`: count the number of letters in a string
*  `countOnly(arr,obj)`: returns an new object that the original object finds in the array
*  `eqArrays(arr1, arr2)`: compare two arrays
*  `eqObjects`: compare two objects
*  `findKey(obj,callback)`: finds the first key that callback returns true
*  `findKeyByValue(arr, val)`: finds the key of an array with the given value
*  `letterPositions(str)`: finds the position of the given letter in a string
*  `map(arr,callback)`: returns a new array according to the callback function
*  `takeUntil`: keep collecting values until the callback returns true
*  `without(arr, banned)`: return the array without banned items