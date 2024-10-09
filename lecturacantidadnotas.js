function leerNotas() {
    const notas = []; 
    const n = parseInt(prompt("Ingrese la cantidad de notas a leer:")); 

  
    if (isNaN(n) || n <= 0) {
        console.log("Por favor, ingrese un número válido para la cantidad de notas.");
        return;
    }

   
    for (let i = 1; i <= n; i++) {
        const nota = parseFloat(prompt(`Ingrese la nota ${i}:`));

       
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Por favor, ingrese una nota válida entre 0 y 10.");
            i--; 
        } else {
            notas.push(nota)
        }
    }

  
    console.log("Las notas ingresadas son:");
    for (let i = 0; i < notas.length; i++) {
        console.log(`Nota ${i + 1}: ${notas[i]}`);
    }
}


leerNotas();