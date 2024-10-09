function determinarSueldoMasBajo() {
    const n = parseInt(prompt("Ingrese la cantidad de sueldos a leer:")); 
    const sueldos = []; 
 
    if (isNaN(n) || n <= 0) {
        console.log("Por favor, ingrese un número válido para la cantidad de sueldos.");
        return;
    }

  
    for (let i = 1; i <= n; i++) {
        const sueldo = parseFloat(prompt(`Ingrese el sueldo del empleado ${i}:`)); 

        
        if (isNaN(sueldo) || sueldo < 0) {
            console.log("Por favor, ingrese un sueldo válido.");
            i--; 
        } else {
            sueldos.push(sueldo); 
        }
    }

   
    const sueldoMasBajo = Math.min(...sueldos);


    console.log("Sueldos ingresados:");
    sueldos.forEach((sueldo, index) => {
        console.log(`Sueldo ${index + 1}: ${sueldo}`);
    });
    console.log(`El sueldo más bajo es: ${sueldoMasBajo}`);
}


determinarSueldoMasBajo();