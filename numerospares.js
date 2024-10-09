function generarNumerosPares() {
    const numerosPares = []; 

   
    for (let i = 0; i < 100; i++) {
        const numero = Math.floor(Math.random() * 1000) + 1; 

        
        if (numero % 2 === 0) {
            numerosPares.push(numero); 
        }
    }