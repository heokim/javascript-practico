// Codigo del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
function areaTriangulo(base, altura) {
    return base * altura / 2;
};
console.groupEnd();

// Codigo del Circulo
console.group("Circulos");
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
};

function perimetroCirculo(radio) {
    return PI * diametroCirculo(radio);
};

function areaCirculo(radio) {
    return PI * radio * radio;
};
console.groupEnd();

// Interaccion con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del Cuadrado es: " + perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area del Cuadrado es: " + area);
};

function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("InputTriangulo1").value);
    const lado2 = Number(document.getElementById("InputTriangulo2").value);
    const base = Number(document.getElementById("InputTriangulo3").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perimetro del Triangulo es: " + perimetro);

};

function calcularAreaTriangulo() {
    const base = Number(document.getElementById("InputTriangulo3").value);
    const altura = Number(document.getElementById("InputTriangulo4").value);
    const area = areaTriangulo(base, altura);
    alert("El area del Triangulo es: " + area);
};


function calcularPerimetroCirculo() {
    const radio = Number(document.getElementById("InputCirculo").value);

    const perimetro = perimetroCirculo(radio);
    alert("El perimetro del Circulo es: " + perimetro);

};

function calcularAreaCirculo() {
    const radio = Number(document.getElementById("InputCirculo").value);
    const area = areaCirculo(radio);
    alert("El area del Circulo es: " + area);
};