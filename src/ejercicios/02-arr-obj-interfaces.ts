/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healign'];
habilidades.push('Java');
console.log(habilidades);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    pueblo?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healign']
};

personaje.pueblo = "Torrijos";

console.table(personaje);