var names = ['Satish', 'Sreedevi', 'Tanvi', 'Tanisi'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Satish'));

var person = {
  name: 'Satish',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a +b;

console.log(addExpression(20, -3));
console.log(addStatement(2, 9));
console.log(add(1, 3));
console.log(add(9, 0));
