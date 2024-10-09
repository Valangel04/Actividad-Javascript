function llenarArregloAlternado() {
    const n = parseInt(prompt("Ingrese el tamaño del arreglo:")); 
    const arreglo = []; 

    
    if (isNaN(n) || n <= 0) {
        console.log("Por favor, ingrese un número válido para el tamaño del arreglo.");
        return;
    }

   
    for (let i = 0; i < n; i++) {
        arreglo[i] = i % 2 === 0 ? 1 : 0; 
    }

   
    console.log("Arreglo llenado con 1 y 0 alternando:");
    console.log(arreglo);
}


llenarArregloAlternado();