/* .ts files are TypeScript files */
/* All JavaScript files are valid TypeScript */
/* TypeScript can be described as a superset of JavaScript */
/* We cannot run TypeScript files themselves */
/* TypeScript enforces typing at compile time
 the output JS files will have no typing information */
var x = 10;
x = 15;
x = x * 2;
var y = '10';
y = y + 'hello';
var person = {
    firstName: 'Abby',
    birthdate: new Date()
};
function printString(str) {
    console.log(str);
}
/**
 * sum is a function which adds two numbers together and returns the sum
 * @param a
 * @param b
 */
function sum(a, b) {
    return a + b;
}
var z = sum(1, 2);
console.log(person.firstName);
