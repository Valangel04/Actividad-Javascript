function calcularTotalPrecios() {
    let total = 0; 

   
    for (let i = 1; i <= 10; i++) {
        const precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));

     
        if (isNaN(precio) || precio < 0) {
            console.log("Por favor, ingrese un precio válido.");
            i--; 
        } else {
            total += precio; 
        }
    }

    
    console.log(`El costo total de los 10 productos es: ${total.toFixed(2)} pesos`);
}


calcularTotalPrecios();