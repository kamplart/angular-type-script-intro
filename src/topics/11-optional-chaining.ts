

export interface Passenger{

    name: string;
    children?: string[];

}


const pasenger1 : Passenger ={
    name:'Fernando'
}

const pasenger2 : Passenger ={
    name:'Melisa',
    children:['Gten','Gohan']
}


const printChildren = (passenger:Passenger) =>{

    //const howManyChildren = passenger.children!.length;
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);
}

printChildren(pasenger1);
printChildren(pasenger2);