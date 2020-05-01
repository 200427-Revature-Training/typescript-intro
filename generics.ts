/* 
    Generics allow us to have a reusable piece of code which accepts some typing
    information upon invocation or instation. 

    Generics are indicated with the angle bracket syntax: <>
*/

const myArr: Array<number> = [];
myArr.push(1);
myArr.push(25);
// myArr.push('13');

/* Boxes can contain things but without labels we have no way
     to no what is inside */
class Box {
    private object: any;

    getObject(): any {
        return this.object;
    }

    setObject(obj: any) {
        this.object = obj;
    }
}


const boxA = new Box();

// We can place anything box, but retrieving things is problematic
// This design is brittle - we can store things, but retrieving things will be
// error prone - we can no longer guarantee type safety
boxA.setObject('car');
boxA.setObject(1);

// We will receive an object of the wrong type here!
const myString: string = boxA.getObject();
console.log(myString);


/* We are creating a Generic Box - This box is type flexible but can also guarantee
type safety - We simply need to label instances of this box. The <> signify the
generic typing */
class GenericBox <T> {
    private object: T;

    getObject(): T {
        return this.object;
    }

    setObject(obj: T) {
        this.object = obj;
    }
}

// We are able to to instantiate instances of GenericBox 
// with a specified generic type
const boxB = new GenericBox<string>();
const boxC = new GenericBox<number>();
const boxD = new GenericBox<boolean[]>();

boxB.setObject('hello');
// boxB.setObject(1); // invalid - boxB cannot contain a number 
boxC.setObject(1);

// We can guarantee that the object coming from boxB is a string
const myStr: string = boxB.getObject();


/* Generic Functions - Functions can also be generic.  The generic type supplied
on invocation can be utilized in the parameter list, return type, and execution logic*/
function myFunction<T>(obj: T): GenericBox<T> {
    const box = new GenericBox<T>();
    box.setObject(obj);
    return box;
}

interface MyInterface {
    a: string;
}

myFunction<MyInterface>({
    a: 'hello'
});

const helloBox: GenericBox<MyInterface> = myFunction<MyInterface>({a: 'hello'});

// casting example - but we can't cast from this object to a string
// const badString: string = <string> helloBox;