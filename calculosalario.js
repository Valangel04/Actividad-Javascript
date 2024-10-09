function calcularSalario(salario) {
    let descuentoPension, auxTransporte, subsidioFamiliar, salarioNeto;

    if (salario < 699999) {
        
        descuentoPension = salario * 0.02;
        auxTransporte = salario * 0.06;
        salarioNeto = salario - descuentoPension + auxTransporte;
    } else if (salario >= 700000 && salario <= 999999) {
       
        descuentoPension = salario * 0.04;
        subsidioFamiliar = 12000;
        salarioNeto = salario - descuentoPension + subsidioFamiliar;
    } else {
        
        descuentoPension = salario * 0.06;
        salarioNeto = salario - descuentoPension; 
    }

   
    return {
        salarioNeto: salarioNeto.toFixed(2),
        descuentoPension: descuentoPension.toFixed(2),
        auxTransporte: auxTransporte ? auxTransporte.toFixed(2) : 0,
        subsidioFamiliar: subsidioFamiliar ? subsidioFamiliar.toFixed(2) : 0
    };
}


const salario = parseFloat(prompt("Ingrese el salario del empleado:"));


if (isNaN(salario) || salario < 0) {
    console.log("Por favor, ingrese un número válido para el salario.");
} else {
    const resultados = calcularSalario(salario);
    console.log(`Salario Neto: ${resultados.salarioNeto} pesos`);
    console.log(`Descuento de Pensión: ${resultados.descuentoPension} pesos`);
    console.log(`Auxilio de Transporte: ${resultados.auxTransporte} pesos`);
    console.log(`Subsidio Familiar: ${resultados.subsidioFamiliar} pesos`);
}