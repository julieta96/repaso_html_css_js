//numero =Math.sqrt(25);
//numero =Math.cbrt(27);//numero = Math.max(4,1,6,12,63,2);
//numero = Math.min(4,1,6,12,63,2);
//numero = Math.random(); // esto me devuelve un numero sùper largo y que comienza con 0 
//document.write(numero);

//entonces puedo hacer lo siguiente
/*numero = Math.random()*100;
numero = numero.toString();
num = numero[0] + numero[1];

if(numero[1] =="."){

	num= numero[0];
}
document.write(num);*/

//pero lo anteruior lo podemos hacer asi
/*let numero = Math.random()*100;
numero = Math.round(numero);*/

//hacemos lo siguiente para q no salga el numero 0  y el 100
/*let numero = Math.random()*99;
numero = Math.floor(numero+1);*/

//let numero = Math.floor(4.9); //redondea para bajo esto da 4

//numero = Math.fround(9.999);
//numero = Math.fround(9.799);


//trunc no redondea te saca la fraccion
//let numero = Math.trunc(9.9);

/*numero = Math.PI;
numero = Math.SQRT1_2;
numero = Math.SQRT2;
numero = Math.E;
numero = Math.LN2;
numero = Math.LN10;
numero = Math.LOG2E;
numero = Math.LOG10E;*/

document.write(numero);


