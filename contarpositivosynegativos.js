function contarPositivosNegativos() {
    const n = parseInt(prompt("Ingrese el tamaño del arreglo:")); 
    const arreglo = []; 
    let contadorPositivos = 0; 
    let contadorNegativos = 0; 

    
    if (isNaN(n) || n <= 0) {
        console.log("Por favor, ingrese un número válido para el tamaño del arreglo.");
        return;
    }

    
    for (let i = 1; i <= n; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i}:`)); 

      
        if (isNaN(numero)) {
            console.log("Por favor, ingrese un número válido.");
            i--; 
        } else {
            arreglo.push(numero); 
        
            if (numero > 0) {
                contadorPositivos++; 
            } else if (numero < 0) {
                contadorNegativos++; 
            }
        }
    }

    console.log("Números ingresados:");
    console.log(arreglo);
    console.log(`Cantidad de números positivos: ${contadorPositivos}`);
    console.log(`Cantidad de números negativos: ${contadorNegativos}`);
}

// Llamar a la función para contar positivos y negativos
contarPositivosNegativos();