/* Does not declare what sleep does! However, it declares that anything
with this type will be able to sleep */
interface Sleepable {
    // sleep: () => void;
    sleep(): void;
}

/*
    An abstract class is a special kind of class that is meant to sit at an
    abstract level of the class hierarchy. An abstract class is a class that 
    cannot be instantiated.  In order to leverage an abstract class it must be
    extended by another class.

    Abstract classes provide the ability to declare abstract functions - these
    are functions without implementations. This is similar to an interface.

    A class can extend exactly one class.  A class can implement any number 
    of interfaces.
*/
abstract class Pet {
    name: string;
    breed: string;
    gender: string;
    birthdate: Date;

    constructor(name: string, breed: string,
        gender: string, birthdate: Date) {
        this.name = name;
        this.breed = breed;
        this.gender = gender;
        this.birthdate = birthdate;
    }

    abstract eat(food?: string): void;
}

class Dog extends Pet implements Sleepable {
    constructor(name: string, breed: string,
        gender: string, birthdate: Date) {
        super(name, breed, gender, birthdate);
    }

    /* thing is an optional parameter - if not provided it will be undefined */
    bark(thing?: string) {
        if (thing) {
            console.log(`${this.name} barks at a ${thing}.`);
        } else {
            console.log(`${this.name} barks.`);
        }
    }

    eat(food: string) {

    }

    sleep() {

    }

    move() {

    }
}

class Cat extends Pet implements Sleepable {
    constructor(name: string, breed: string,
        gender: string, birthdate: Date) {
        super(name, breed, gender, birthdate);
    }

    sleep() {

    }

    eat() {

    }
}

const comet: Dog = new Dog('Comet', 'Border Collie', 'male', new Date());
comet.bark('cat');
comet.bark();

const socks: Cat = new Cat('Socks', 'Calico', 'female', new Date());

const pets: Pet[] = [comet, socks];
console.log(pets.pop());
console.log(pets.pop());


