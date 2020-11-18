function persons(firstName, lastName, gender) {
  if (gender === 'male') {
    var outer = 'Mr. ' + firstName + ' ' + ' ' + lastName;
    return outer;
  } else if (gender === 'female') {
    var outer = 'Mrs. ' + firstName + ' ' + lastName;
    return outer;
  }
}

var result = persons('Joney', 'Talukdar', 'male');
console.log(result);

var result2 = persons('jerry', 'pink', 'female');
console.log(result2);

function name() {
  return {
    name: 'joney talukdar',
    skills: ['html', 'css', 'bootstrap', 'javaScript'],
    print: function () {
      console.log(this.name, this.skills);
    },
  };
}

var result = name();
console.log(result.name);
console.log(result.skills);
result.print();
