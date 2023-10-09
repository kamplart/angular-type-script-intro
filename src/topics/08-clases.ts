
export class Person{

//public name?: string;
//public addres?: string;
constructor(
    public  FirstName: string,
    public  lastName: string,
    private  address: string = 'No address',)
{}

}

/*
export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string
    ){
        super(realName, 'New York')
    }
}
 */

export class Hero {
    //public person : Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName:string,
        public person:Person,
    ){

        //this.person = new Person(realName);
    }
}

const persona = new Person('Tony','Stark', 'York');
const ironman = new Hero('Ironman', 2,'York', persona);

console.log(ironman);