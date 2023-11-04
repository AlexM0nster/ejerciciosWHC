let hora = 3;
let saludo= "";
if (hora < 12){
	saludo = "Buenos Dias";
} else if (hora < 20){
	saludo = "Buenas Tardes"
} else{
	saludo= "Buenas Noches";
}
console.log(saludo)

//
//

let nombre = "Maria";
let saludo = "";
switch(nombre){
case"Maria":
	saludo = "Hola Maria";
	break;
case"Juan":
	saludo ="Hola Juan";
	break;
default:
	saludo= "Hola Pompa";

}
console.log(saludo);