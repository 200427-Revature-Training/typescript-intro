var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    An abstract class is a special kind of class that is meant to sit at an
    abstract level of the class hierarchy. An abstract class is a class that
    cannot be instantiated.  In order to leverage an abstract class it must be
    extended by another class.

    Abstract classes provide the ability to declare abstract functions - these
    are functions without implementations. This is similar to an interface.
*/
abstract;
var Pet = (function () {
    function Pet(name, breed, gender, birthdate) {
        this.abstract = eat(food ?  : string);
        this.name = name;
        this.breed = breed;
        this.gender = gender;
        this.birthdate = birthdate;
    }
    return Pet;
})();
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed, gender, birthdate) {
        _super.call(this, name, breed, gender, birthdate);
    }
    /* thing is an optional parameter - if not provided it will be undefined */
    Dog.prototype.bark = function (thing) {
        if (thing) {
            console.log(this.name + " barks at a " + thing + ".");
        }
        else {
            console.log(this.name + " barks.");
        }
    };
    Dog.prototype.eat = function (food) {
    };
    Dog.prototype.sleep = function () {
    };
    Dog.prototype.move = function () {
    };
    return Dog;
})(Pet);
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, breed, gender, birthdate) {
        _super.call(this, name, breed, gender, birthdate);
    }
    Cat.prototype.sleep = function () {
    };
    Cat.prototype.eat = function () {
    };
    return Cat;
})(Pet);
var comet = new Dog('Comet', 'Border Collie', 'male', new Date());
comet.bark('cat');
comet.bark();
var socks = new Cat('Socks', 'Calico', 'female', new Date());
var pets = [comet, socks];
console.log(pets.pop());
console.log(pets.pop());
