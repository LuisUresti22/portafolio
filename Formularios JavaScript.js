function leer(){
	//Vamos a leer a partir del numero de elemento del formulario
	//Referencia por pseudoclase
	var nom = document.forms["formulario"].elements[0].value;
	//Referencia por Id
	var clave = document.getElementById("pass").value;
	//Referencia por etiqueta
	var carrera1 = document.getElementsByTagName("select")[0].value;
	//Referencia por el atributo name
	var gen = document.getElementsByName("genero")

	var g, i;

	for(i=0;i<gen.length;i++){
		if(gen[i].checked){
			g=gen[i].value;
		}
	}

	//Referencia por id

	var ok = document.getElementById("casilla").checked ? "Aceptado" : "No aceptado";
	
	document.getElementById("resultados").innerHTML=
	"\<br>Tu nombres es: "+nom
	+"\<br>Tu password es: "+clave+
	"\<br>Tu carrera es: "+carrera1+
	"\<br>Tu genero es: "+g+
	"\<br>Aceptación de los acuerdos: "+ok;
	
}