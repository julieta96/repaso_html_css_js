let array=["banana","manzana","pera",5,9,"pedro"];

alert(array);


document.write(array[1]);
document.write("<br>")
document.write(array[3]);
document.write("<br>")
/*arrays no definidos = undefined*/

document.write(array[19]);
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

/***********arrays asociativos*******/

let pc={

	nombre:"HP",
	procesador:"Intel Core 17",
	ram:"16GB",
	espacio:"1TB"
}

let nombre = pc["nombre"]
let procesador = pc["procesador"]
let ram = pc["ram"]
let espacio =pc["espacio"]

frase= `el nombre de mi pc es: ${nombre} <br>
        el procesador es:  ${procesador}<br>
        la memoria ram es: ${ram}<br>
        el espacio en disco es: ${espacio}<br>`
 
document.write(frase);