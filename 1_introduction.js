// imperative

var name = 'joney talukdar';
var greet = 'hello';

console.log(greet + ', ' + name);

//result : hello, joney talukdar

// declative

function greetings(greet, name) {
  return greet + ' ' +  name;
}

console.log(greetings('hello', 'joney talukdar'));
