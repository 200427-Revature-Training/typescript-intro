/* .ts files are TypeScript files */
/* All JavaScript files are valid TypeScript */
/* TypeScript can be described as a superset of JavaScript */
/* We cannot run TypeScript files themselves */
/* TypeScript enforces typing at compile time
    the output JS files will have no typing information
    TypeScript was developed by Microsoft
 */

let x: number = 10;
x = 15;
x = x * 2;

let y: string = '10';
y = y + 'hello';



function printString(str: string) {
    console.log(str);
}

/**
 * sum is a function which adds two numbers together and returns the sum
 * @param a 
 * @param b 
 */
function sum(a: number, b: number): number {
    return a + b;
}

let z: number = sum(1, 2);

/*
    Any object is considered to be of an interface type if it meets the interfaces
    type requirements

    What is an interface?
    Example: Graphical User Interface
*/

interface Person {
    firstName: string;
    lastName: string;
    birthdate: Date;
    /* Function type syntax */
    sayHello: () => void;
}

interface Employable {
    employed: boolean;
}

let person: Person & Employable = {
    firstName: 'Abby',
    lastName: 'Adams',
    birthdate: new Date(),
    sayHello: function() {
        console.log(`Hello, my name is ${this.person}.`)
    },
    employed: false
};


console.log(person.firstName);