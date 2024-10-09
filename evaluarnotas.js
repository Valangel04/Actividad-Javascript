function evaluarNotas() {
    let aprobados = 0; 
    let reprobados = 0; 


    for (let i = 1; i <= 12; i++) {
        const nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i} (0-10):`));

      
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Por favor, ingrese una nota válida entre 0 y 10.");
            i--; 
        } else {
         
            if (nota > 5) {
                aprobados++;
            } else {
                reprobados++;
            }
        }
    }

    console.log(`Número de estudiantes aprobados: ${aprobados}`);
    console.log(`Número de estudiantes reprobados: ${reprobados}`);
}


evaluarNotas();