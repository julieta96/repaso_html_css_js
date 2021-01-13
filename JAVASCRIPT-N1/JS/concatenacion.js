/*concatenar numeros*/
 br="<br>"

numero1 = 1;
numero2=3;
resultado = "" + numero1+numero2 /*DE ESTA FORMA FUERZO EL STRING Y CONCATENO LOS NUMEROS*/
document.write(resultado)

/*para usar concat()<-(es un metodo de cadenas) si o si tiene q tener un string sino no funciona y tira error*/

numero3 = "8";
numero4=10;
resultado =numero3.concat(numero4) 
document.write(br +resultado)

/*otra forma de concatenar con backticks(` `) y la variable entre ${}*/

nombre="julieta"

frase2=`soy ${nombre} y estoy practicando`

document.write(br +frase2)

/*adentro de los backticks podria usar comilas simples , 
  dobles y hasta se puede escribir codigo html*/

  /*escape de comillas simples y dobles*/

  /*si queremos usar comillas dobles debemos usar comillas simples*/


  frase3='hola "mundo"';

  document.write(br+frase3);

  /*y si queres comillas simples por dentro debemos poner comillas dobles por fuera*/


  frase4="hola 'mundoo'";

  document.write(br+frase4);

  /*para hacer el escape de backticks usamos comillas simples o dobles*/

  frase5="hola `mundoo`";

  document.write(br+frase5);

   frase6='hola `mundooooooooooo`';

  document.write(br+frase6);

