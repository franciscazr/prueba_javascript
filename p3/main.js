function Alumno(nombre, nota1, nota2, nota3){
	this.nombre = nombre
	this.nota1 = nota1
	this.nota2 = nota2	
	this.nota3 = nota3


}

alumno1 = new Alumno (parseInt(prompt("Ingresa nombre Alumno")));

var nombre = [];



var nota1 = parseInt(prompt("Ingresa primera nota"));

var nota2 = parseInt(prompt("Ingresa segunda nota"));

var nota3 = parseInt(prompt("Ingresa tercera nota"));

var promedio = [ nota1 + nota2 + nota3] /3;

alert("El promedio de " + nombre + "es : "  + promedio);


