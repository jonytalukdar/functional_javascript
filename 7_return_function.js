function host() {
  console.log('i am host function');
  return function () {
    console.log('i am child function');
  };
}

var a = host();
console.log(a());

function greetings(greet) {
  return function (name) {
    console.log(greet + ' ' + name);
  };
}

var good = greetings('Good Morning');
var hello = greetings('Hello');

good('joney talukdar');
hello('herry how are you?');
