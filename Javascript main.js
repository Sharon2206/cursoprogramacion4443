// alert("Prueba Javascript")

var nombre = "Sharon Angarita";
var edad = 22;
var estatura = 161;

// document.write(nombre);

var datos = document.getElementById("datos");

datos.innerHTML = `
<h1>DATOS DE PERSONAS</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h2>Mi edad es: ${edad}</h2>
<h2>Mi estatura: ${estatura}</h2>
`;

if(estatura >= 161){
    datos.innerHTML += '<h2>Eres una persona alta</h2>';
}
else{
    datos.innerHTML +=  '<h2>Eres una persona chaparra</h2>';
}
