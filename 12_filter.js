var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

var result = arr.filter(function (value) {
  return value % 2 == 1;
});
console.log(result);

function myFiltered(arr, callBack) {
  var newArr1 = [];
  for (var i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      newArr1.push(arr[i]);
    }
  }
  return newArr1;
}

var even = myFiltered(arr, function (value) {
  return value % 2 == 0;
});
console.log(even);

var odd = myFiltered(arr, function (value) {
  return value % 2 == 1;
});
console.log(odd);
