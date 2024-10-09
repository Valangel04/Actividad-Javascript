function convertirTemperatura(grados, tipo) {
    let resultado;

    if (tipo === 'C') {
        
        resultado = (grados * 9/5) + 32;
        return `${grados}°C es igual a ${resultado.toFixed(2)}°F`;
    } else if (tipo === 'F') {
       
        resultado = (grados - 32) * 5/9;
        return `${grados}°F es igual a ${resultado.toFixed(2)}°C`;
    } else {
        return 'Error: Tipo de conversión no válido. Use "C" para Celsius o "F" para Fahrenheit.';
    }
}


const grados = parseFloat(prompt("Ingrese la temperatura:"));
const tipo = prompt("Ingrese 'C' para convertir de Celsius a Fahrenheit o 'F' para convertir de Fahrenheit a Celsius:").toUpperCase();


if (isNaN(grados)) {
    console.log("Por favor, ingrese un número válido para la temperatura.");
} else {
    const resultadoConversion = convertirTemperatura(grados, tipo);
    console.log(resultadoConversion);
}