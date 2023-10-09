

export function whatmyType<T>(argument: T) : T{

    return argument;
}


const miString = whatmyType<string>('hola mundo');
const miNumber = whatmyType<number>(100);
const miArray = whatmyType<number[]>([1,2,3,4,5]);



console.log(miString.split(' '));
console.log(miNumber.toFixed());
console.log(miArray.join('-'));