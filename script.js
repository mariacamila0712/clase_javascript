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
/*let mensaje;
mensaje = "Hola Mundo";
alert(mensaje); */

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
console.log("No es numero" / 2);

//NaN es pegajoso. Cualquier operacion sobre Nan devuelve NaN.

console.log("No es numero" / 2 + 5);

//Tipo de datos BigInt

//Valores enteros mayores que (2^53-1) o menor que -(2^53-1)9.007.199.254.740.991
let numero_grande = 1234567899012233445656124444324;
console.log(numero_grande);

//Tipo String
let t = "a";
let texto = "hola";
let texto_dos = "hola";
let texto_tres = ``; //backticks funcionalidad extendida
let nomb = "Maria";
console.log("Hola", nomb);
console.log("Hola", nomb);
console.log(`Hola`, nomb);
console.log("Hola ${nomb}");
console.log("Hola ${nomb}");
console.log(`Hola ${nomb}`);

//Tipo Booleano

//true y false
let verdadero = true;
let falso = false;

let mayor = 4 > 1; //True

//Tipo de dato null

//Valor especial que no pertenece a nincun tipo de dato anterior.
//Forma un tipo propio separado que contien solo el valor null;

let edad = null;
console.log(edad);

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

console.log(typeof { alert }); //function **
console.log(null); //object - ERROR DE JAVASCRIPT
console.log(Math); //object

//Interacciones: alert, prompt, confirm

//alert
//alert ('Hola Mundo');

//prompt
//let nombre_capturado = prompt('Digite el nombre', 'Hola');
//alert (nombre_capturado);

//prompt('Digite el nombre');
//prompt('Digite el nombre','')//solo para IE

//Confirm
//let esHelado = confirm("¿Te gusta el helado?");
//console.log(esHelado); //true si presionan Ok-Aceptar y false si presionan cancelar.

//CONVERSION DE TIPOS

//Existen dos tipos de conversaciones explicito e implicita

//converitr a String

let valor = true;
console.log(typeof valor);

valor = String(valor); //"true"
valor = String(false); //"false"
valor = String(null); //"null"
valor = String(undefined); //undefined
console.log(valor);
console.log(typeof valor);

//Convertir a Numero

//Conversiones numericas ocurren automaticamente en funciones matematicas y expresiones.
//alert ('6' / '2'); //3
//alert (1+'2'); //12
//alert ('1'+2); //12

let cadena = "123";
let num_cad = Number(cadena); //123
console.log(Number("hola")); // NaN

/*
TABLA CONVERSON NUMEROS
unfenined->NaN
null->0
true->1
false->0
string ''->0
string 'hola' -> NaN
*/

//Convertir a Boleano

console.log(Boolean("hola"));

/*
TABLA CONVERSON BOOLEANO
unfenined-> false
null-> false
string ''-> false
NaN-> 0
0 -> false
'0' -> true
'  ' -> true
*/

console.log(Boolean(String(0)));
console.log(Boolean(0));

//OPERADORES BASICOS
//Operadores  unarios y binarios

let res;
a = 5;
b = 2;

res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b; //mod
res = a ** b; //potencia

//alert ('1' + 2); //12
//alert (1 + '2'); //12

//alert (2 + 2 + '1') //41
//alert ('1' + 2 + 2) //122

//alert(2 - '1'); //1
//alert ('6' / '2'); //3
//alert ('6' / '2a'); //

//Operaciones Unaria

a = 1;
console.log (+a);

a = -1;
console.log (+a);

console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);
console.log(+"");

a = "2";
b = "3";
console.log (+a + + b);
console.log (Number(a) + Number(b));

//Operaciones Unaria -

a = 1;
console.log (-a);

a = -1;
console.log (-a);

console.log(-true);
console.log(-false);

//ASIGNACIONES
a = 2 + 3;
a = b = c = 2 + 3;

c = 2 + 3;
b = c;
a = b;

//c = 3 = (a = b + 1);

//Modificadores
a = a + 2; 
a += 2;
a = a - 2;
a -= 2;

//Incremento y Decremento

//++ Incremento 
// -- Decremento

a = 2;
a ++;
console.log (a);//3

a = 2;
a --;
console.log (a);//1

//Posicion del incremento o decremento

a = 1;
b = ++a;
console.log (b); //2

a = 1;
b = a++;
c = a;
console.log (b); //1
console.log (c); //2


//COMPARACIONES
console.log (2 > 1); //true
console.log (2 == 1); //false
console.log (2 != 1); //true

let resultado = 2 > 1;

//COMPARACION ENTRE CADENAS 
console.log ( 'Z' > 'A');//true
console.log ('Show' > 'show'); //false
console.log ('casa' > 'casas'); //false
console.log ('a' > 'A'); //true
console.log ('showexxx' > 'show'); //false

console.log  ( '****************');


a = 0;
b = '0';

boleano_a = Boolean(a); //false
boleano_b = Boolean(b); //true

console.log ( a == b); //true --convierte '0' a 0 entero por ser de diferentes tipos.



//1.La letra minuscula es mayor que la mayuscula.
//2. La palabra con mas letras despues de pasar la primera condicion es mayor que la menos letras.

//Comparacion de diferentes tipos
//Al comparar valores de diferentes tipos, JS convierte los valores a Numeros.
//Toda comparacion con NaN es false.


console.log  ( '****************');
console.log ('2' > 1); //true
console.log ('01' == 1); //true
console.log (true > 0); //true
console.log (false == 0); //true

console.log  ( '******** NaN ********');
//NaN
console.log ('hola' > 0); //false 'hola'=NaN
console.log ('hola' < 0); //false
console.log ('hola' == 0); //false


console.log  ( '******** Undefined ********');
//Undefined
console.log (undefined > 0); //false - porque todo comparadao con NaN es false
console.log (undefined < 0); //false - porque todo comparadao con NaN es false



console.log  ( '******** Null ********');
//Null
console.log (null > 0); //false - porque todo comparadao con NaN es false
console.log (null < 0); //false - porque todo comparadao con NaN es false
console.log (null >= 0); //true


console.log  ( '******** Null y Undefined == ********');
//El undefined y el null en las comparaciones de igualacion no estrictas
//---- actuan diferente: son iguales entre si, pero no a ningun otro valor.

console.log (null == undefined); //true 
console.log (null == 5); //false
console.log (undefined == 5)//false

console.log  ( '******** No diferencia 0 de false == ********');

console.log (0 == false); //true
console.log ('' == false); //true-- al convertir '' es igual a 0 y false es igual a 0.


console.log  ( '******** Igualacion estricta ********');
//Igualacion estricta
console.log ( 0 === false); //false
console.log (null === undefined); //false


console.log  ( '******** Ejercicio ********');
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true -undecode
undefined == null //true
undefined === null //false
null == "0" //false - en una comparacion no estricta cualquier que igual null es false al menos que sea undefined
null === +"0" //  false 


/*
TABLA CONVERSON BOOLEANO
unfenined-> false
null-> false
string ''-> false
NaN-> 0
0 -> false
'0' -> true
'  ' -> true
*/


/*
TABLA CONVERSON NUMEROS
unfenined->NaN
null->0
true->1
false->0
string ''->0
string 'hola' -> NaN
*/

console.log ('************ Sentencia  IF **********')
/*SENTENCIA IF*/

/*if (condicion){
}else if (condicion){

} else {

}
*/

//if de linea
if(4 > 5) console.log ('Mensaje'); 

if ( 4 > 5){
    b = 5 + 3;
    console.log (' Mensaje');
}

if('45a' /3){
    console.log('No entró');
}

if('0'){
    console.log('entró');
}

if('4/2'){ 
    console.log('entró'); //Hizo una conversion Booleana de acuerdo a la tabla
}

if(1){ 
    console.log('entró o no entró?'); //Si entra-Hizo una conversion Booleana de acuerdo a la tabla
}

let edadx;

if (edadx){
    console.log ('Variable definida');
}else{
    console.log('Variable indefinida');
}

//Haga un algoritmo que dado retorn true si es mayor de edad
//false si no lo es.

let edad_usuario = 17;
if (edad_usuario >= 18){
    console.log (true);
} else {
    console.log (false);
}

console.log (edad_usuario >= 18);

//Operador ternario
//condicion ? operacion verdadera : operacion falsa;
resultado = edad_usuario >=18 ? x=5 : x=7;

//Operadores logicos

//OR
/*
v or v = v
v or f = v
f or v = v
f or f = f
*/

console.log ('*****Operador OR ********');
console.log (true || true); //true
console.log (true || false); //true
console.log (false || true); //true
console.log (false || false); //false

if ( 4 == 4 || 2 > 5){
    console.log ('Verdadero');
}

//resultado = valor_uno || valor_dos || valor_tres
//1.Evalua los operandos de izquierda a derecha.
//2.Por cada operando, convierte el valor a booleano. Si el resultado es true
//  se detiene y retorna el valor original de ese operando.
//3.Si todos los operandos han sido evaluados (todos eran falsos) retorn el ultimo operando.

let comparacion_booleana = true || false || true; //true
comparacion_booleana = '0' || '0'; //'0'
comparacion_booleana = undefined || null || NaN || ''; // ''
comparacion_booleana = undefined || null || 3 || ''; // 3
comparacion_booleana = undefined || 'hola' || 3 || ''; // hola

//Resumen: Devuelve el primer valor verdadero o el ultimo si todos son falsos.

/*
TABLA CONVERSON BOOLEANO
unfenined-> false
null-> false
string ''-> false
NaN-> 0
0 -> false
'0' -> true
'  ' -> true
*/

// AND
/*
v and v = v
v and f = f
f and v = f
f and f = f
*/

console.log ('*****Operador AND ********');
console.log (true && true); //true
console.log (true && false); //false
console.log (false && true); //false
console.log (false && false); //false

if ( 4 == 4 && 2 > 5){
    console.log ('Verdadero');
}

//resultado = valor_uno || valor_dos || valor_tres
//1.Evalua los operandos de izquierda a derecha.
//2.Por cada operando, convierte el valor a booleano. Si el resultado es false
//  se detiene y retorna el valor original de ese operando.
//3.Si todos los operandos han sido evaluados (todos eran verdaderos) retorna el ultimo operando.

let comparacion_booleana_2 = true && false && true; //false
comparacion_booleana_2 = '0' && '0'; //'0'
comparacion_booleana_2 = undefined && null && NaN && ''; // undefined
comparacion_booleana_2 = undefined && null && 3 && ''; // undefined
comparacion_booleana_2 = undefined && 'hola' && 3 && ''; // undefined

//Resumen: Devuelve el primer valor falso o el ultimo si todos son verdaderos.

//PREVALENCIA U ORDEN ENTRE OR Y AND

//a && b || c && d == (a && b) || (c && d)

//Negacion

console.log(!true); //false
console.log(!false); //true
console.log(!!undefined); //false == Boolean(undefined)

//Nullish o Fusion de nulos

//resultado  = valor_uno ?? valor_dos ?? valor_tres;
//1. Evalua los operandos de izquierda a derecha.
//2. Por cada operando revisa si es null o undefined y regresa el primero que no sea
// ni nulo ni undefined.
//3. Si todos los operandos han sido evaluados son nulos o undefined regresa el ultimo.

a = null ?? undefined ?? undefined ?? null ?? "hola" ?? null ?? "carlos"; //hola
b = null ?? undefined ?? undefined ?? null ?? null ?? null ?? null; //null