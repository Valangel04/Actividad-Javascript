function convertirLitros(litros) {
    
    const centilitros = litros * 100;
   
    const decilitros = litros * 10;
    
    const galones = litros * 0.264172;
   
    const onzas = litros * 33.814;
    
    return {
        centilitros: centilitros.toFixed(2),
        decilitros: decilitros.toFixed(2),
        galones: galones.toFixed(2),
        onzas: onzas.toFixed(2)
    };
}