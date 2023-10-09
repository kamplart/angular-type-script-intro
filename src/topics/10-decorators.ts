/*function classDecorator(
    constructor: any
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}
*/


function classDecorator<T extends {new (...arg:any[]): {} }>(
    constructor: T
){

    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
export class SuperClass{

public mypropertie: string = 'Abc123';
//public addres?: string;
    print(){
        console.log("hola");
    }

}



console.log(SuperClass);


const myClass = new SuperClass();
console.log(myClass);