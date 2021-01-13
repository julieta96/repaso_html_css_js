

/*function saludar(){
	respuesta = prompt("Hola , como fue tu dia?");
	if(respuesta=="bien"){

		alert("me alegro")
	}else{
		alert("una pena")
	}
}

saludar()

*/

//otra forma es asignar la funcion a una variable


/*saludar=function (){
	respuesta = prompt("Hola , como fue tu dia?");
	if(respuesta=="bien"){

		alert("me alegro")
	}else{
		alert("una pena")
	}
}


saludar()*/


/*function suma(num1 , num2){

	let res = num1+num2;


	return res;
}

document.write(suma(8 , 101));*/


/*const saludar=function(nombre){

	let frase = prompt("Hola , como fue tu dia?");
	document.write(frase);


}*/


/*funciones con flechas*/

/*const saludar = (nombre)=>{ //()=> esto reemplaza a function()

	let frase = `Hola ${nombre} como estas?`;
	document.write(frase);


}

saludar("pedro")

document.write("<br>")
document.write("<br>")*/


//si tenemos un parametro lo podemos escricbir asi:

/*const saludar = nombre=>{ //()=> esto reemplaza a function()

	let frase = `Hola ${nombre} como estas?`;
	document.write(frase);




saludar("pedro")}*/

//y si tenemos solo 1 linea de codigo se pued escribir asi:

const saludar = nombre=>document.write(`Hola ${nombre} como estas?`);

saludar("pedro")

