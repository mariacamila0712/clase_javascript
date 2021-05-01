//Hola Mundo Alerta
alert("Soy Javascript");

//Comentarios

//Comentario de linea
/*Comentario de mas 
de una linea*/

//Sentencias

//alert ('Hola'); alert('Mundo');

//insercion automatica de punto y coma

//alert('Hola')
//alert('Mundo')

//alert(3 + 1 + 2);

//Variables
let mensaje;
mensaje = "Hola Mundo";
alert(mensaje);

let a = 5;
let b = 6;
let suma = a + b;
console.log("El resultado de la suma es: ", suma);

b = 7;
console.log(b);

let nombre = "Maria";
let nombre2 = nombre;

nombre = "Camila";
console.log("El nombre uno es: ", nombre);
console.log("El nombre dos es: ", nombre2);

//Nombrar variables con camel case
nombreUno = "Maria";
nombreDos = "Camila";

//Nombrar como underscore
nombre_uno = "Maria";
nombre_dos = "Camila";

//Nombres no comunes
let $ = 1;
let _ = 2;

//No puedes nombrar variables
/* let 1a = 3;
let primer-nombre = 4; */

("use strict");
mensaje = "Hola Mundo";

//Constantes
const PI = 3.141624;
const COLOR_ROJO = "#FFFFF";
pi_dos = PI;
pi_dos = 7;
console.log(PI);
console.log(pi_dos);

//const id_account = get_id_account(45);

//Tipos de datos

//Dinamicamente tipado
let mensaje_tres = "Hola";
mensaje_tres = 12234;

//Numero
let n = 123;
n = 12.456;

//Valores numericos especiales Infinity, -Infinity y NaN

//Infinity: representa el infinito matematico. Es un valor especial que es mayor que cualquier numero;
console.log(1 / 0);
console.log(Infinity);

//NaN representa un error de cálculo. Es el resultado de una operacion
//matematica incorrecta o indefinida
console.log ("No es numero" / 2);

//NaN es pegajoso. Cualquier operacion sobre Nan devuelve NaN.

console.log ("No es numero" / 2 +5);

//Tipo de datos BigInt

//Valores enteros mayores que (2^53-1) o menor que -(2^53-1)9.007.199.254.740.991
let numero_grande = 1234567899012233445656124444324;
console.log (numero_grande);

//Tipo String
let t = "a";
let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; //backticks funcionalidad extendida
let nomb = "Maria";
console.log ("Hola", nomb);
console.log ('Hola', nomb);
console.log (`Hola`, nomb);
console.log ("Hola ${nomb}");
console.log ('Hola ${nomb}');
console.log (`Hola ${nomb}`);

//Tipo Booleano

//true y false
let verdadero = true;
let falso = false;

let mayor  = 4 > 1; //True

//Tipo de dato null

//Valor especial que no pertenece a nincun tipo de dato anterior.
//Forma un tipo propio separado que contien solo el valor null;

let edad = null;
console.log (edad);


//en JS null No significa un objeto no existente
// Es solo un valor especial que representa nada, vacio o valor desconocido.

//Valor Undefined
//Valor especial  que no pertenece a ningun tipo de dato anterior.

let edad_dos;
console.log(edad_dos);

//El operador typeof o funcion typeof(x), devuelve el tipo de dato.

console.log(typeof undefined); //undefined
console.log(typeof 0); //number
console.log(typeof true); //boolean
console.log(typeof 10n); //bigint
console.log(typeof "Hola"); //string 

console.log (typeof{alert}); //function **
console.log ((null)); //object - ERROR DE JAVASCRIPT
console.log ((Math)); //object
