/*
1.-   Crear una página HTML  con un párrafo inicial con el texto: Este es mi primer párrafo y cuatro botones. 
Añadir párrafo: Añadirá el párrafo con el texto "Párrafo añadido” detrás del último párrafo creado.

Insertar párrafo: Insertará el párrafo con el texto “Párrafo insertado” detrás del primer párrafo (“Este es mi primer párrafo”).

Reemplazar párrafo: Cambiará el texto del segundo párrafo (el siguiente a 
“Este es mi primer párrafo”) por “Párrafo reemplazado"

Borrar párrafo: Eliminará el párrafo que haya detrás de Este es mi primer párrafo 

Clonar div: Duplicará (clonará) toda la estructura div que tengamos creada enel momento que pinchemos el botón.

// delante arriba, abajo detras
*/

	function anyadir(){
		var nodo = document.createElement("p");
		var texto = document.createTextNode("Parrafo añadido");
		nodo.appendChild(texto); 
		document.getElementById("divisor").appendChild(nodo);
	}

 	function insertar(){
 		var nodo = document.createElement("p");
 		var texto = document.createTextNode("Parrafo insertado");
 		nodo.appendChild(texto);
 		document.getElementsByClassName("bruno")[0].appendChild(nodo);

 	}

	function reemplazar(){
		document.getElementsByTagName("p")[1].innerHTML="<p>Parrafo reemplazado</p>";
	}

	function borrar(){
		var parrafo = document.getElementsByTagName("p")[1];
		parrafo.removeChild(parrafo.childNodes[0]);
	}

	function clonar(){
		var nodo = document.getElementById("divisor");
		nodohtml = nodo.innerHTML;
		nodohtml = nodohtml + nodohtml;
		nodo.innerHTML = nodohtml;
	}