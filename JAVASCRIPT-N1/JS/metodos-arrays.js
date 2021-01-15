let nombre = ["pedro" , "maria" , "jorge"];

//let resultado = nombre.pop();

//document.write(resultado +"<br>"); //me muestra cual elimino
//document.write(nombre);//para verificar que se haya eliminado jorge

/*document.write("Array original: " + nombre +"<br>");
let resultado = nombre.shift(); //este va a eliminar pedro
document.write("Elemento removido: " + resultado +"<br>" );//me muestra cual elimino
document.write("Resultado: "+nombre);//para verificar que se haya eliminado*/

/*document.write("Array original: " + nombre +"<br>");
let resultado = nombre.push("otro" , "robert");
document.write(resultado + "<br>"); //nos devuelve como valor el size del array
document.write(nombre);//para verificar que se haya agregado*/

let numeros = [1,2,3,4,5];
/*document.write("Array original: " + numeros +"<br>");
let resultado = numeros.reverse();
document.write(resultado + "<br>");*/

//numeros.unshift("a","b",33);//escribo los elementos q le voy a agregar

//document.write(numeros);

/*let numeros2 = [7,4,2,1];
numeros2.sort();
document.write(numeros2);*/

/*let abc = ["z","zapato","computadora","avion","manzana","libro"];
abc.sort();
document.write(abc);*/

 //document.write("Array original: " + numeros +"<br>");
//numeros.splice(1,3);//me elimina los elementos desde la posion 1 hasta la 3
//numeros.splice(1,3 , "hola","pedro","maria");//y a la vez podemos agregar elementos
//numeros.splice(1,0,"hola","pedro","maria");//y si quiero agregar solo elementos solo digo a apartir de que posicion despues, 0 y agrego los nuevos elementos
//numeros.splice(0,0,"hola","pedro","maria"); //los quiero agregar al principo
//numeros.splice(-1,0,"hola","pedro","maria"); //solo quiero agregar al final
//document.write(numeros);
//document.write("Array original: " + numeros +"<br>");

//let resultado= numeros.join(" - ");//es como un separador
//let resultado= numeros.join("<br>elemento:");//ahora esto es una cadena de texto

//document.write("elemento: "+resultado);

//let resultado= numeros.slice(0,2);//le decimos desde y hasta q posicion muestra los elementos
//let resultado= numeros.slice(0,-1); //para q muestre hasta la ultima posicion y no sabemos cual es ponemos -1
//let resultado= numeros.slice(0,0); //para seleccionar todo

//document.write(resultado);

//let resultado= numeros.includes(5);//pregunto si esta ese elemento en el array  y devuelve false o true

//document.write(resultado);

//let resultado= numeros.indexOf(5);//hace lo mismo q includes, pero me devuelve la posicion en donde se encuentra

let array = ["hola","oso","lenteja","arroz"];

//let resultado = array.lastIndexOf("hola");//lo mismo q el indexOf

//document.write(resultado);

/********************************************************************************************/



//Filter es como un bucle y recibe como parametro una funcion y
// en cada vuelta del bucle el parametro q le pasemos va a ser igual a cada elemento del array



//numeros.filter(numero => document.write(numero +"<br>")) //vamos a crear unnueva varaible dentro de ahi

//otra forma

/*numeros.filter(

	(numero) => {

	document.write(numero +"<br>")})*/


//otra forma

/*numeros.filter( function(numero) {

	document.write(numero +"<br>")})*/


	//filter recorre los elementos que cumplan con una condicion

	resultado = array.filter( arrayElementos => arrayElementos.length >4)//si esta cadena de texto tiene mas de 4 letras q se muestre

	document.write(resultado +"<br>") 


//forEach es similar a filter

/*numeros.forEach( function(numero) {

	document.write(numero +"<br>")})*/

