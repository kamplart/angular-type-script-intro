

const skills : string[] =['Bash','Counter', 'Healer'] ;


interface Character{
    name: string;
    hp: number;
    skills : string[];
    //hometown: string| undefined;
    hometown?: string;
}

const strider: Character =
    {
        name: "dsads",
        hp: 100,
        skills:['Bash','Counter'],
    };

strider.name = 'Rverdale';


console.table (strider);

