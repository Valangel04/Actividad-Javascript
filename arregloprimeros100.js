function llenarArregloFibonacci() {
    const fibonacci = []; 
    
    for (let i = 0; i < 100; i++) {
        if (i === 0) {
            fibonacci[i] = 0; 
        } else if (i === 1) {
            fibonacci[i] = 1; 
        } else {
            
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
    }

    
    console.log("Primeros 100 números de la sucesión Fibonacci:");
    console.log(fibonacci);
}


llenarArregloFibonacci();