/*ejemplo de identidad === vs igualdad ==*/
br="<br>"

let numero1=23

let numero2 = "23"

document.write(numero1==numero2 );/*true xq se fija q tengan el mismo valor y no el mismo tipo de dato*/

document.write(br)

let numero3=23

let numero4 = "23"



document.write(numero1===numero2 );/*false xq ya que pa q sean iguales para identidad tiene q tener el mismo tipo de dato*/

document.write(br)

let numero5=23

let numero6 = 23

document.write(numero1===numero2 );/*aca da true por que ademas de tener el mismo valor tiene el mismo tipo de dato*/
document.write(br)

/*****************************operadores logicos***********************************************/

//  ctrl + } para generar comentario de 1 linea

let valor = true 

let valor2 = true

 let resultado1 = valor && valor2; //si las dos condiciones se cumplen esto va a ser true

 // true && true = true
 // true && false = false
 // false && true = false
 // false && false = false

let resultado2 = valor || valor2; //si una de las dos condiciones se cumplen va a ser true, si las 2 son falsas devuelve false

let resultado3 = valor =! valor2; //regresa lo contrario de lo q devuelvo

document.write(resultado3)
document.write(br)


n1 = 12;
n2 = 24;
n3 = 25;
n4 = 92;
n5 = 91;

op = (n1<n2 || n2<n3) && (!(n1!=n2)&& n5 != n3)
// op = (true||true) && (!(true) && true)
// op = (true||true) && (!false && true)
// op = (true && false)
// op =  false

document.write(op)