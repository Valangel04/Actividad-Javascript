function contarMultiplosDeTres() {
    let contador = 0; 

    
    for (let i = 1; i <= 50; i++) {
       
        if (i % 3 === 0) {
            contador++; 
        }
    }

   
    console.log(`Cantidad de múltiplos de 3 entre los primeros 50 números: ${contador}`);
}


contarMultiplosDeTres();