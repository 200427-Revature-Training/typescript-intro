/**
 * public - accessible anywhere (DEFAULT)
 * private - Only accessible within the class definition
 * protected - Only accessible within the class defined or extending classes
 * 
 * readonly - property only reassignable within constructor
 * static - property is shared amongst all instances of the class
 */

class Car {
    // static variables are owned by the class rather than by instances
    // (In JS 'static' are assigned to a __proto__ object)
    static wheels: number = 4;
    
    // readonly prevents the value from being changed after construction
    private readonly make: string;
    protected model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    updateMake(make: string) {
        this.make = make;
    }
}

class RaceCar extends Car {


    getModel(): string {
        // private properties not accessible in extending classes
        this.make;

        // Within extending class, model is accessible
        return this.model;

    }
}

const myCar = new Car('Mazda', 'RX8');

// Neither private nor protected properties are accessible outside of their
// class hierarchy
myCar.make;
myCar.model;

function myFunction(str: string) {

}