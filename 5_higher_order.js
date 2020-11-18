var arr = [3, 6, 8, 2, 6, 9, 3];

function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

myForEach(arr, function (value) {
  console.log(value);
});

function caller() {
  return function (name) {
    return 'caller is calling you ' + name;
  };
}

var result = caller();
console.log(result('joney'));
