
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
    cancion: 'mess',
    detalles:{
        autor: 'Ed sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;


console.log('El volumen acutal de: ', volumen);
console.log('El segundo acutal de: ', segundo);
console.log('La cancion acutal de: ', cancion);
console.log('El autor es: ', autor);


