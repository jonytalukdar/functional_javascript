var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (value, index, arr) {
  console.log(value, index, arr);
});

// implementation

function forEach(arr, callBack) {
  for (var i = 0; i < arr.length; i++) {
    callBack(arr[i], i, arr);
  }
}

forEach(arr, function (value, i, arr) {
  console.log(value, i, arr);
});
