var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = arr.reduce(function (a, b) {
  return a + b;
});
console.log(result);

function myReduce(arr, callBack, accumulator) {
  for (var i = 0; i < arr.length; i++) {
    accumulator = callBack(accumulator, arr[i]);
  }
  return accumulator;
}

var result1 = myReduce(
  arr,
  function (a, b) {
    return a + b;
  },
  0
);
console.log(result1);
