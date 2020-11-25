var arr = [23, 67, 89, 50, 34, 2, 1, 67, -21, -1, -56, -56, 21, 54, 78];

arr.sort();
console.log(arr);

arr.sort(function (a, b) {
  return b - a;
});
console.log(arr);

var people = [
  {
    name: 'joney talukdar',
    age: 21,
  },
  {
    name: 'jerry',
    age: 22,
  },
  {
    name: 'jubayer',
    age: 1,
  },
  {
    name: 'khalid',
    age: 34,
  },
  {
    name: 'monir',
    age: 23,
  },
];

people.sort();
console.log(people);

people.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(people);
