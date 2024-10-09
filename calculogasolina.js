function calcularCostoGasolina(galones) {
   
    const costoPorCentilitro = 44; 
    const litrosPorGalon = 3.78541; 
    const centilitrosPorLitro = 100;

   
    const litros = galones * litrosPorGalon;
    
    const centilitros = litros * centilitrosPorLitro;
  
    const costoTotal = centilitros * costoPorCentilitro;

   
    return {
        litros: litros.toFixed(2),
        costoTotal: costoTotal.toFixed(2)
    };
}


const galones = parseFloat(prompt("Ingrese la cantidad de galones de gasolina:"));


if (isNaN(galones) || galones < 0) {
    console.log("Por favor, ingrese un número válido de galones.");
} else {
    const resultados = calcularCostoGasolina(galones);
    console.log(`Cantidad de gasolina despachada: ${resultados.litros} litros`);
    console.log(`Valor a pagar: ${resultados.costoTotal} pesos`);
}