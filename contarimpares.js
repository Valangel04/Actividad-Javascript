function contarImpares() {
    const n = parseInt(prompt("Ingrese la cantidad de números a leer:")); 
    let contadorImpares = 0; 

  
    if (isNaN(n) || n <= 0) {
        console.log("Por favor, ingrese un número válido para la cantidad de números.");
        return;
    }

    
    for (let i = 1; i <= n; i++) {
        const numero = parseInt(prompt(`Ingrese el número ${i}:`));
        if (numero % 2 !== 0) {
            contadorImpares++;
        }
    }
