class Animal{

	constructor(especie , edad, color){

		/*this es el objeto q voy a crear*/
		//con this seguido del punto le pongo nombre a la propiedad q va a tener el objeto y va a ser igual 
        //al valor pasado por el parametro del cosntructor
		this.esp=especie;
		this.age=edad;
		this.color=color;  
		this.info=`soy ${this.esp}, tengo ${this.age} años y 
		soy de color ${this.color} `;

	}

	verInfo(){

		document.write(this.info+"<br>");
	}


}

class Perro extends Animal{ //HERENCIA
	constructor(especie, edad,color,raza){
		super(especie,edad,color);

		this.raza=null;
	}

	static ladrar(){
		alert("WAW!")
	}

	set setRaza(newName){

		this.raza=newName;
	}


	get getRaza(){

		return this.raza;

	}
}

//cuando usamos con objetos se debe usar const en vez de let
 const perrito = new Perro("perro" , 5 , "marron" , "doberman");
//console.log(perro);
const gato = new Animal("gato" , 2 , "negro");
const pajaro = new Animal("pajaro" , 1 , "verde");

// document.write(perro.info + "<br>");

// document.write(gato.info+ "<br>");

// document.write(pajaro.info+ "<br>");

perrito.verInfo();
//perrito.ladrar();
gato.verInfo();
pajaro.verInfo();

perrito.setRaza= "Pedro";

//document.write(perrito.raza);

document.write("<br>");

document.write(perrito.getRaza);

//Perro.ladrar();



