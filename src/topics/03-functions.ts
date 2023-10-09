
function addNumbers(a :number,b :number){
    return a+ b;
}

const addNumbersArrow = (a :number,b :number) : string =>{
    //return (a+ b).toString();
    return `${a+ b}`.toString();
}

function multiply(firstNumber :number, secondNumber?:number, base : number = 2){
    return firstNumber* base;
}


//////////

interface Character {
    name: string;
    hp: number;
    showHp: () => void;

};

const healCharacter = (character :Character, amount :number)  =>{

    character.hp += amount;
}


const strider: Character = {
    name: "olalalal",
    hp: 50,
    showHp() {
        console.log(`puntos de vida ${ this.hp}` );
    }
};


healCharacter(strider,10);
healCharacter(strider,50);

strider.showHp();
//const result : number = addNumbersArrow(3,2);
//const result : string = addNumbersArrow(3,2);
//const mult : number = multiply(3);


//console.log({result,mult});


export{};