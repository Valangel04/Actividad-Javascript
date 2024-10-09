function calcularPotencia() {
    const base = parseFloat(prompt("Ingrese la base:")); 
    const exponente = parseInt(prompt("Ingrese el exponente:")); 

  
    if (isNaN(base) || isNaN(exponente)) {
        console.log("Por favor, ingrese valores válidos para la base y el exponente.");
        return;
    }

    let resultado = 1; 

   
    for (let i = 0; i < Math.abs(exponente); i++) {
        resultado *= base; 
    }

    
    if (exponente < 0) {
        resultado = 1 / resultado;
    }

    
    console.log(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);
}

calcularPotencia();