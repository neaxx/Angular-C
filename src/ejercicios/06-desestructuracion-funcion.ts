
/*
    ===== Código de TypeScript =====
*/


 export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'iPad Air',
    precio: 350
}

//funcion de recorido de productos donde productos toma un arreglo de tipo Producto y se especifica que retornara
export function calculaISV( productos: Producto[] ):[number, number, string] {

    let total = 0;
    let arti = '';
    
    //forEach recoriendo todo el arreglo con las propiedades de precio y descipcion
    productos.forEach( ({ precio, desc } ) => {

        total += precio; //acumulando el precio de los productos
        arti += desc + ", ";// acumulando las descipciones de los productos + un espacio en blanco con coma para sus separaciones

    }) 

    return [total, total * 0.15, arti];

}

const articulos = [ telefono, tablet ];//articulos toma el arreglo de los productos

const [total, isv, arti] = calculaISV( articulos );//calculaISV toma el arreglo de los productos articulos y se especifica las variables que tomaran los valores del return de la funcion.

console.log( 'productos: ', arti);
console.log( 'total: ', total);
console.log( 'ISV: ', isv);








