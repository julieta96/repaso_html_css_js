
//parrafo = document.getElementById("parrafo");
/*parrafo = document.getElementsByTagName("p");*/
//document.write(parrafo); //me devuelve una lista de elementos no un array

//parrafo = document.querySelector(".texto");
//parrafo = document.querySelector("#parrafo");
//parrafo = document.querySelectorAll(".texto");
//document.write(parrafo[2]); 

//const rango = document.querySelector(".rango");

//rango.setAttribute("type","color"); modifico valor del type

//valorDelAtributo = rango.getAttribute("type");

//document.write(valorDelAtributo);

//rango.removeAttribute("type");

/*para ver las propìedades un elemento en el navegador presionamos la tecla f12 
 , seleccionamos el elmento y en la consola ponemos $0 + enter*/


/*-------------------------------------------------------------------------*/


/*const titulo = document.querySelector(".titulo");
const tituloA = document.querySelector(".atitulo");*/

//editarTitulo = titulo.setAttribute("contentEditable" , "true"); //esto me permite editar el texto
//cambioDireccionTitulo= titulo.setAttribute("dir" , "rtl") // valores ltr - rtl
//titulo.setAttribute("hidden" , "true");//hidden no importa el valor (false-true)q tenga si esta definida el elemento se esconde

/*titulo.removeAttribute("hidden");

titulo.setAttribute("tabindex","true")*/

//tituloA.setAttribute("tabindex","0")
//titulo.setAttribute("title" , "jajajaj xd")

/*------------------------------------------------------------------------*/

//const input= document.querySelector(".input-normal");
//document.write(input.className)
//document.write(input.value) //valor del input
//document.write(input.type="color")//de esta forma tambien se puede modificar el type

//input.accept="image/png" //aca decimos q solo puede subir imagenes con formato png

//input.form //nos permite ejecutar un input dentro del form

/*input.minLength=4;
input.setAttribute("minLength" , "5");*/

//input.placeholder="hola mundo";

//input.required="required";

/*const titulo = document.querySelector(".titulo");

titulo.style.color = "red"
titulo.style.backgroundColor = "green"
titulo.style.padding = "30px"*/


/*-------------------------------------------------------------*/
//const titulo = document.querySelector(".titulo");

//titulo.classList.add("grande")
//titulo.classList.remove("grande")
//let valor = titulo.classList.item(1)//me muestra el nombre de la clase dependiendo cual sea su posicion 

//let clase = titulo.classList.item(1)

//let valor = titulo.classList.contains(clase) //para verificar si este elemento tiene la clase q le pasamos por parametro y devuelve bool(true/false)

//document.write(valor)// me muestra granda xq en la posicion 0 esta titulo y en l aposicion 1 esta grande

/*if(valor){
	//document.write(`la clase "${clase}" existe`)
	titulo.classList.remove(clase);

}else{
	//document.write(`la clase"${clase}"NO existe`)
	titulo.classList.add(clase);
}*/

//titulo.classList.toggle("grande"/*,true*/);
 //hace forma resumida lo anterior , si el elmento ya tiene la clase lo remueve sino la agrega
 //el 2do parametro es para esformzar si tiene la clase con true le decimos q nunca se lo saque
 //y con false si no la tiene q nunca se lo agregue


 //titulo.classList.replace("grande","titulo"); //reemplaza la clase grande por la clase titulo


/****************************************************************************************************/

//let  resultado = titulo.textContent; //nos muestra el contenido que tiene la etiqueta sin recurrir al estilo
//let  resultado = titulo.innerText; //ya no se usa mas
//let  resultado = titulo.outerContent; //ya no se usa mas

//let  resultado = titulo.innerHTML;
//let  resultado = titulo.outerHTML;
//document.write(resultado) //me devuelve lo q tiene adentro la etiqueta

/*******************************************************************************************************/

//const contenedor = document.querySelector(".contenedor");
//const item = document.createElement("LI");/*para crear un elemento se debe escribir en parametro con mayuscula*/
/*const textoItem = document.createTextNode("Este es un item de la lista")*/
//document.write(item)
//item.innerHTML="Este es un item de la lista" //tambien se puede hacer asi

//poner un nodo dentro de otro

//item.innerHTML=textoItem; //esto es una forma

//item.appendChild(textoItem); //pero este es mejor
//contenedor.appendChild(item)

//console.log(item)

//forma de crea mas de un elemento sin que consuma recurso la pagina

/*const fragmento = document.createDocumentFragment()

for ( i =0; i<20; i++) {

    const item = document.createElement("LI")
	item.innerHTML="Este es un item de la lista"
	fragmento.appendChild(item)
   

}

contenedor.appendChild(fragmento)

console.log(contenedor)*/

/******************************************************************************************/


const contenedor = document.querySelector(".contenedor");

/*const primerHijo = contenedor.firstChild;

const ultimoHijo = contenedor.lastChild;

const primerHijoE = contenedor.firstElementChild;

const ultimoHijoE = contenedor.lastElementChild;*/

//const hijos = contenedor.childNodes;

//console.log(hijos[0]); //me muestra el 1er elemento

//const hijos = contenedor.children; //me devuelve solo los elemetnos y no el texto q lo acompaña

/*for(hijo of hijos){

	console.log(hijos)
}*/

//con forEach no lo puedo recorrer xq no es un array
//con for in me devuelve solo el indice 
//con for of nos devuelve el valor <--- de esta forma lo podemos recorrer


/***************************************************************************************************/


const parrafo = document.createElement("P").innerHTML="Parrafo";
const h2_nuevo = document.createElement("H2");

h2_nuevo.innerHTML="Titulo";

const h2_antiguo =document.querySelector(".h2");

//contenedor.replaceChild(h2_nuevo , h2_antiguo); //remplazamos la clase

//contenedor.removeChild(h2_antiguo); //eliminamos un elmento del contenedor

//let respuesta = contenedor.hasChildNodes(); //para verificar si un elmento tiene hijos

/*if(respuesta){
	document.write("El elemtno tiene hijos")
}else{
	document.write("El elemtno no tiene hijos")
}*/


/*let respuesta2 = h2_antiguo.hasChildNodes();

if(respuesta2){
	document.write("El elemtno tiene hijos") //devuelve esto xq tiene como hijo texto
}else{
	document.write("El elemtno no tiene hijos")
}*/

/*console.log(h2_antiguo.parentElement)//me devueleve div

console.log(contenedor.parentElement) //devuelve body

console.log(h2_nuevo.parentElement) //me da null */

//parentElement y parentNode devuelve lo mismo

//los elementos hermanos son los q estan en el mismo rango/linea 

/*******************************************************************************/

//pero esto me incluye el texto como hermano 
//console.log(h2_antiguo.nextSibling) //para mostrar el hermano siguiente
//console.log(h2_antiguo.previousSibling)
//console.log(h2_antiguo.lastSibling) //para mostrar el y ultimo hermano

//con este solo los elementos

//console.log(h2_antiguo.nextElementSibling) //p
//console.log(h2_antiguo.previousElementSibling)//h4
//console.log(h2_antiguo.lastElementSibling)

/****************************************************************************************/

const div= document.querySelector(".div-3");

console.log(div.closest(".div")) //me trae el elemetno mas ascendente mas cercano con la clase div














