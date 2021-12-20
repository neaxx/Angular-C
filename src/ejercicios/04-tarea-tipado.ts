
/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion{
    ciudad: string;
    calle: string;
    pais: string;
}


const SuperHeroe: SuperHeroe = {
    nombre:'Spiderman',
    edad: 30,
    direccion:{
        calle:'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = SuperHeroe.mostrarDireccion();

console.log(direccion);


