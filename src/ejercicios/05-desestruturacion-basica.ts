
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles

}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'mes',
    detalles:{
        autor: 'Ed sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;


//console.log('El volumen acutal de: ', volumen);
//console.log('El segundo acutal de: ', segundo);
//console.log('La cancion acutal de: ', cancion);
//console.log('El autor es: ', autor);
//console.log('El anio es: ', anio);

const dbz: string[] =['Goku', 'vegata', 'trunks'];
const [ p1, p2, p3 ] = dbz;

console.log('personaje 1:', p1 );
console.log('personaje 2:', p2 );
console.log('personaje 3:', p3 );



