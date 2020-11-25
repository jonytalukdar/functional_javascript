var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var mapArr = [];
for (var i = 0; i < arr.length; i++) {
  mapArr.push(arr[i] + 2);
}
console.log(mapArr);

var result = arr.map(function (value) {
  return (value += 2);
});
console.log(result);

function myMap(arr, callBack) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = callBack(arr[i]);
    newArr.push(temp);
  }
  return newArr;
}

var result = myMap(arr, function (value) {
  return value + 2;
});
console.log(result);

var square = myMap(arr, function (value) {
  return Math.pow(value, 2);
});
console.log(square);

var qb = myMap(arr, function (value) {
  return Math.pow(value, 3);
});
console.log(qb);

var mTen = myMap(arr, function (value) {
  return value * 10;
});
console.log(mTen);
