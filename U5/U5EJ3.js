//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/** 
  -- CASTELLANO
  -- EJERCICIO 2.5.3 ENUNCIADO: 
	Se nos pide, basándonos en todo lo definido en el ejercicio 2.3.2, ampliar la definición de la clase "Triangle" que representará los distintos triángulos 
	de un app de geometría , de manera que podamos cubrir las siguientes nuevas funcionalidades:  
	- Sabemos que, dados dos triángulos rectangulos, si los enfrentamos juntándolos por sus ángulos rectos formarán un polígono, de manera que el perímetro 
	exterior de	este nuevo polígono será la suma del perímetro de ambos rectángulos más el valor absoluto de la resta de ambas alturas, con esto necesitamos, 
	dados dos triángulos rectángulos, obtener el perímetro exterior del polígono que conforman definiendo un nuevo método llamado rightTriangleUnion.
	- Tambien es necesario saber, dado un Polígono formado por una serie de triángulos (que nos llegarán en un Array), obtener cuál es el área de ese polígono
	con un nuevo médodo llamado areaPoligon. (Nota: el área de la superficie de un polígono formado por triángulos es la suma de las áreas de estos triángulos).
	- Así mismo, nos piden, con el fin de poder saber si un triángulo es equilátero o no, un método (al que llamaremos isEquilateral) que accediendo a sus propiedades 
	base y height, nos devuelva	si el triángulo es equilátero; NOTA: una propiedad de los triángulos equiláteros es que su altura siempre es igual a la base por la raiz 
	cuadrada de tres dividido entre dos (height = (base*√3) / 2 ). Para comprobarlo, un ejemplo de triángulo equilátero sería uno con una base de 10 y una altura de 10 * √3 / 2.
	como este por ejemplo:
	const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
  
	En base a la funcionalidad solicitada deberéis decidir qué métodos definís como Métodos de Instancia y cuáles definís como Métodos de Clase.
	Finalmente, crea al menos 3 objetos de la clase Triangle y haz 3 llamadas a estos nuevos métodos.
      	
  -- CATALÀ
  -- EXERCICI 2.5.3 ENUNCIAT:
	Se'ns demana, basant-nos en tot allò definit a l'exercici 2.3.2, ampliar la definició de la classe "Triangle" que representarà els diferents triangles
	d'una app de geometria , de manera que puguem cobrir les noves funcionalitats següents:
	- Sabem que, donats dos triangles rectangles, si els enfrontem unint-los pels seus angles rectes formaran un polígon, de manera que el perímetre
	exterior d'aquest nou polígon serà la suma del perímetre de tots dos rectangles més el valor absolut de la resta de les seves altures, amb això necessitem,
	donats dos triangles rectangles, obtenir el perímetre exterior del polígon que conformen definint un nou mètode anomenat rightTriangleUnion.
	- També cal saber, donat un Polígon format per una sèrie de triangles (que ens arribaran en un Array), obtenir quina és l'àrea d'aquest polígon
	amb un nou mètode anomenat areaPoligon. (Nota: l'àrea de superfície d'un polígon format per triangles és la suma de les àrees d'aquests triangles).
	- Així mateix, ens demanen, per tal de poder saber si un triangle és equilàter o no, un mètode (al que anomenarem isEquilateral) que accedint a les seves propietats
	base i height, ens torni si el triangle és equilàter; NOTA: una propietat dels triangles equilàters és que la seva alçada sempre és igual a la base per l'arrel
	quadrada de tres dividit entre dos (height = (base*√3) / 2 ). Per comprovar-ho, un exemple de triangle equilàter seria un amb una base de 10 i una alçada de 10*√3/2.
	com aquest per exemple:
	const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
	  
	En base a la funcionalitat sol·licitada haureu de decidir quins mètodes definiu com a Mètodes d'Instància i quins definiu com a Mètodes de Classe.
	Finalment, crea almenys 3 objectes de la classe Triangle i fes 3 trucades a aquests nous mètodes.
*/
//Escribe aquí tu solución / escriviu aquí la vostra solució:
class Triangle {
  constructor(base, height, rightTriangle) {
    this.base = base;
    this.height = height;
    this.rightTriangle = rightTriangle;
  }

  get areaTriangle() {
    return (this.base * this.height) / 2;  
  }

  get rightHypotenuse() {
    if (this.rightTriangle) {
      return Math.sqrt(this.base * this.base + this.height * this.height);
    }
    return undefined;
  }

  get rightPerimeter() {
    if (this.rightTriangle) {
      return this.base + this.height + this.rightHypotenuse;
    }
    return undefined;
  }

  static rightTriangleUnion(triangle1, triangle2) {
	const perimetre1 = triangle1.base + triangle1.height + Math.sqrt(Math.pow(triangle1.base, 2) + Math.pow(triangle1.height, 2));
    const perimetre2 = triangle2.base + triangle2.height + Math.sqrt(Math.pow(triangle2.base, 2) + Math.pow(triangle2.height, 2));

    const restaAltures = Math.abs(triangle1.height - triangle2.height);

    return perimetre1 + perimetre2 + restaAltures;
  }

  static areaPoligon(triangles) {
	let areaTotal = 0;
	triangles.forEach(function(triangle){
		let areaTriangle = (triangle.base * triangle.height) / 2;
		areaTotal += areaTriangle;
	});
	return areaTotal;
  }

  isEquilateral() {
	return this.height == (this.base * Math.sqrt(3)) / 2;
  }
}

const myTriangle1 = new Triangle(10, 5, true);
const myTriangle2 = new Triangle(5, 10, false);
const myTriangle3 = new Triangle(20, 15, true);


console.log(Triangle.rightTriangleUnion(myTriangle1, myTriangle2));

const trianglesArray = [myTriangle1, myTriangle2, myTriangle3];
console.log(Triangle.areaPoligon(trianglesArray));

console.log(myTriangle1.isEquilateral());


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return Triangle;
}