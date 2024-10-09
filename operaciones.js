function operacionesBasicas(num1, num2) {
 
    const suma = num1 + num2;
    
    const resta = num1 - num2;
    
    const multiplicacion = num1 * num2;
   
    const division = num2 !== 0 ? (num1 / num2) : ' División por cero';

    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division
    };
}


const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));


if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, ingrese números válidos.");
} else {
    const resultados = operacionesBasicas(numero1, numero2);
    console.log(`Resultados para ${numero1} y ${numero2}:`);
    console.log(`Suma: ${resultados.suma}`);
    console.log(`Resta: ${resultados.resta}`);
    console.log(`Multiplicación: ${resultados.multiplicacion}`);
    console.log(`División: ${resultados.division}`);
}