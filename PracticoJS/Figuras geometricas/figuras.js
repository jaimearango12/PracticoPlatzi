//Código dle cuadrado
console.group('Cuadrado')

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

function perimetroCuadrado (lado) {
    return lado *4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado+"cm");

function areaCuadrado (lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado+"cm^2");

console.groupEnd();

//Código del triángulo
console.group('Triángulo')

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//    "Los lados del triandulo miden: " 
//    + ladoTriangulo1 
//    +"cm, "
//    + ladoTriangulo2 
//    +"cm, "
//    + baseTriangulo 
//    +"cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: "+ alturaTriangulo + "cm");


function perimetroTriangulo(lado1, lado2 , base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");


function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo+"cm");

//console.groupEnd();

//Códig del circulo
console.group('Círculo');

//Radio
//const radioCirculo= 4;
//console.log("El radio del Circulo mide: " + radioCirculo +"cm");


//Diámetro
function diametroCirculo (radio){
    return radio * 2;
}

//PI
const PI= Math.PI;
console.log("PI es: " + PI);


//Circunferencia

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}

//Área
function areaCirculo (radio) {
    return  (radio * radio) * PI;
}

console.groupEnd();

// INICIO HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);}

//Triangulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById('inputTriangulo1');
    const input2 = document.getElementById('inputTriangulo2');
    const input3 = document.getElementById('inputTrianguloBase');
    const input4 = document.getElementById('inputTrianguloAltura');

    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const value4 = parseInt(input4.value);

    const perimetro = perimetroTriangulo(value, value2, value3)
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input3 = document.getElementById('inputTrianguloBase');
    const input4 = document.getElementById('inputTrianguloAltura');

    const value3 = parseInt(input3.value);
    const value4 = parseInt(input4.value);

    const area = areaTriangulo(value3, value4)
    alert(area);}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const perimetro = perimetroCirculo(value)
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const area = areaCirculo(value)
    alert(area);}

