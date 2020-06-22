const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion passed:" + actual + " === " + expected);
    return undefined;
  } else {
    console.log("Assertion failed" + actual + " !== " + expected);
    return undefined;
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);