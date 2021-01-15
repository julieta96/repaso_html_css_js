
let cadena = "cadena de prueba"; // esto es como hacer let cadena = new String("cadena de prueba") de esta o la otra dorma creado un objeto string
let cadena2 = "prueba ";
let cadena3 = "Hola,como,estas?";

//resultado = cadena.concat(cadena2);

//resultado = cadena.startsWith(cadena2);

//resultado = cadena.endsWith(cadena2);

//resultado = cadena.includes(cadena2); //busca cadenas

//resultado = cadena.indexOf("prueba"); //devuelve posicion en la que se encuentra la primera letra de esa cadena
//document.write(cadena[2]);

//resultado = cadena.lastIndexOf("prueba"); //lo mismo q a anterior pero devuelve la posicion de la ultima letra de esa cadena

//let resultado = cadena2.padStart(10, "A"); //le decimos que agregue al principio lo que queramos y le indicamos el lenght q va a tener

//let resultado = cadena2.padEnd(10, "A"); // lo mismo pero rellena a lo ultimo

//let resultado = cadena2.repeat(4); //para q repita la cadena n cantidad de veces

//let resultado = cadena3.split(",");
//let resultado = cadena3.split("como"); //me elimina el como, con esto podemos crear un array, separamos las cadenas
//document.write(resultado);
//esto devuelve un array
//document.write(resultado[0]);
//document.write(resultado[1]);
//document.write(resultado[2]);
//let cadena4 = "ABCDEFG";
//let resultado = cadena4.substring(0,2);//le decimos q arranque en la posicio 0 y termine en la posicion 2
//let resultado = cadena4.toUpperCase();//todo a minuscula
//let cadena5 = 545;
//let resultado = cadena5.toString(); //convierte a string

let cadena6 = "  ABCD   ";
//let resultado = cadena6.trim();
//let resultado = cadena6.trimStart();
let resultado = cadena6.trimEnd();

document.write(resultado.length);//lo verifico con esto 




