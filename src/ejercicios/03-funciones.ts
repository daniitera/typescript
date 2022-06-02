/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
};

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
};

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
};

const multiplicarFlecha = (numero: number, otronumero?: number, base: number = 2): number => numero * base;

// const resultadoSuma = sumar(10, 20);
// console.log(resultadoSuma);

// const resultadoMulti = multiplicarFlecha(10, 20);
// console.log(resultadoMulti);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}


function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    return undefined;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Dani",
    pv: 10,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv)
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();