



interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details: Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlay: AudioPlayer = {
    audioVolume: 36,
    songDuration: 32,
    song: "love",
    details: { author:"Fito", year:232}
};
const song = "otra cancion";



//const {song: anotherSong, songDuration: duracion, details: {author:autor}} = audioPlay;

const {song: anotherSong, songDuration: duracion, details: detalles} = audioPlay;
const {author: autor} = detalles;

//console.log('Sons: ',anotherSong);
//console.log('duracion: ',duracion);
///console.log('Autor: ',autor);


//////////////

//const dbz : string[] = ['goku', 'vegeta', 'trunks' , 'Gohan'];
//const trunks : string = dbz[4] || 'No encontrado';

//const [p1,p2,trunks,p4] : string[] = ['goku', 'vegeta', 'trunks' , 'Gohan'];
//const [,,trunks ='No encontrado',] : string[] = ['goku', 'vegeta', 'trunks' , 'Gohan'];
const [,,trunks ='No encontrado',] : string[] = ['goku', 'vegeta', ];



console.log('Personaje 3: ',trunks);



export {};