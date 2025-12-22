//T2: Clases / Classes
//U6: Serialización de objetos con JSON / Serialització d'objectes amb JSON
/** 
  -- CASTELLANO
  -- EJERCICIO 2.6.3 ENUNCIADO: 
	Dado en el valor de la constante denominada myJSON, un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Triangle,
	vista en el ejercicio 2.5.3. Se nos pide
	- Definir en una constante denominada myTriangles un Array de objetos Triangle a partir de este texto.
	- Obtener un nuevo Array en otra constante (a la que llamaremos equilateralsTriangles) con todos triángulos equiláteros del Array anterior (myTriangles).
	- Pasar este nuevo Array a un texto plano JSON en una nueva constante denominada newTrianglesJSON.
	
  
  -- CATALÀ
  -- EXERCICI 2.6.3 ENUNCIAT:
	Donat  el valor de la constant anomenada myJSON, un text pla en format JSON que conté la descripció d'un Array amb tres objectes de la classe Triangle,
	vista a l'exercici 2.5.3. Se'ns demana
	- Definir en una constant anomenada myTriangles un Array d'objectes Triangle a partir d'aquest text.
	- Obtenir un nou Array en una altra constant (que anomenarem equilateralsTriangles) amb tots triangles equilàters de l'Array anterior (myTriangles).
	- Passar aquest nou Array a un text pla JSON en una nova constant anomenada newTrianglesJSON.
*/

const myJSON = '[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]';

//Escribe aquí tu solución / escriviu aquí la vostra solució:
class Triangle {
  constructor(base, height, rightTriangle) {
    this.base = base;
    this.height = height;
	this.rightTriangle = rightTriangle;
  }

  isEquilateral() {
	return this.height == (this.base * Math.sqrt(3)) / 2;
  }
}

const myTriangles = JSON.parse(myJSON).map(triangle => new Triangle(triangle.base, triangle.height, triangle.rightTriangle));

const equilateralsTriangles = myTriangles.filter(triangle => triangle.isEquilateral());

const newTrianglesJSON = JSON.stringify(equilateralsTriangles);

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
	return [myTriangles, equilateralsTriangles, newTrianglesJSON];
  }