// function hello(name) {
//   print(name);
// }

// function print(args) {
//   console.log(args);
// }

// hello('this is demo');

// function hello(greet, name, print) {
//   var all = print(greet + ' ' + name);
//   return all;
// }
// var result = hello('Good Morning', ' Joney', function (all) {
//   return all;
// });
// console.log(result);

// function hello(name, print) {
//   print(name);
// }

// hello('joney', function (name) {
//   console.log('hello ' + name);
// });

// hello('Joney', function (name) {
//   console.log('how are you  ' + name + ' ?');
// });

// hello('this is demo for test', function (name) {
//   console.log('name of length : ' + name.length);
// });

var me = {
  name: 'Joney Talukdar',
  age: 21,
  email: 'jonytalukdar30@gmail.com',
};

function printMySelf(person, callBack) {
  console.log('persons : ' + person.name + '(' + person.age + ')');
  if (person.age >= 18) {
    callBack(person.email);
  } else {
    console.log('email not sent because you are under 18');
  }
}

printMySelf(me, function (email) {
  console.log('email sent to : ' + email);
});

function print(data, cb1, cb2) {
  console.log('original data : ' + data);
  cb1(data);
  cb2(data);
}

print(
  'twinkle cats is awesome channell for all the beginner',
  function (data) {
    console.log(data.toUpperCase());
  },
  function (data) {
    console.log(data.toLowerCase());
    console.log('length of data : ' + data.length);
  }
);
