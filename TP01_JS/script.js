// Ejercicio 1:

const nombre = "Gabriel";
const edad = 22;
const estaEstudiando = true;
const lenguajes = ["HTML", "CSS", "JavaScript"];
const persona = {
    nombre: "Gabriel",
    edad: 22
};

console.log("===== Ejercicio 1 =====");

console.log("String:", nombre);
console.log("Number:", edad);
console.log("Boolean:", estaEstudiando);
console.log("Array:", lenguajes);
console.log("Object:", persona);


// Ejercicio 2:

console.log("===== Ejercicio 2 =====");

console.log("Tipo de nombre:", typeof nombre);
console.log("Tipo de edad:", typeof edad);
console.log("Tipo de estaEstudiando:", typeof estaEstudiando);
console.log("Tipo de lenguajes:", typeof lenguajes);
console.log("Tipo de persona:", typeof persona);


// Ejercicio 3:

console.log("===== Ejercicio 3 =====");

const pais = "Argentina";

console.log("Valor de la constante pais:", pais);

// Ejercicio 4:

console.log("===== Ejercicio 4 =====");

const numero1 = 10;
const numero2 = 3;

console.log("Suma:", numero1 + numero2);
console.log("Resta:", numero1 - numero2);
console.log("Multiplicación:", numero1 * numero2);
console.log("División:", numero1 / numero2);
console.log("Módulo:", numero1 % numero2);


// Ejercicio 5:

console.log("===== Ejercicio 5 =====");

console.log('"5" == 5:', "5" == 5);
console.log('"5" === 5:', "5" === 5);

console.log('10 == "10":', 10 == "10");
console.log('10 === "10":', 10 === "10");


// Ejercicio 6:

console.log("===== Ejercicio 6 =====");

const numero = 7;

if (numero % 2 === 0) {
    console.log(numero, "es un número par.");
} else {
    console.log(numero, "es un número impar.");
}


// Ejercicio 7:

console.log("===== Ejercicio 7 =====");

const materias = [
    "Programación III",
    "Base de Datos II",
    "Metodología de Sistemas"
];

for (let i = 0; i < materias.length; i++) {
    console.log("Índice:", i, "- Materia:", materias[i]);
}


// Ejercicio 8:

console.log("===== Ejercicio 8 =====");

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}