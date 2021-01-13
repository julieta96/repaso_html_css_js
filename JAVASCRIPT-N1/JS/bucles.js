/*FOR*/

/*otra forma de hacer for*/
let i=6;

for(i; i>=0; i--){

	document.write(i + "<br>");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");



/*for in/on nos ahorra esto (i; i>=0; i--)

  la variable ya la creamos (animal) en cada vuelta del 
  bucle va a ser igual a cada uno de los valores del array animales

*/

/*FOR IN = se usa para recorrer objetos, conocer sus posiciones y operar con esos objetos */

let animales= ["gato", "perro","conejo"];
animales.edad=20;

for(animal in animales){/*in devuelve la posicion del array, indice del elemento*/

	//document.write(animal+"<br>");

	//forma de mostrar los elmentos del array se hace asi:

	document.write(animales[animal]+"<br>");

}

document.write("<br>");

/*FOR OF = recorre todo el array, recorre las propiedades de los propotipos con los q trabaja*/

for(animal of animales){ /*of devuelve el valor de los elementos*/

	document.write(animal+"<br>");


	
}

document.write("<br>");

document.write(animales.edad);

document.write("<br>");
document.write("<br>");
document.write("<br>");

/*LABEL*/

array1 = ["maria" , "josefa" , "roberta"]; 

array2 = ["pedro","marcelo",array1,"josefina"];

forArrays://<- esto es label ponerle un nombre al for para luego romper el bucle
for(let array in array2){

	if(array==2){

		for(let array of array1){

			document.write(array+"<br>");
			break forArrays; 
		}
	}else{
		document.write(array2[array]+"<br>");
	}
}




