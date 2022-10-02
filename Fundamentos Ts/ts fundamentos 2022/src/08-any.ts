(()=>{
    let nini: any;
    nini = 1;
    nini= 'hi';
    nini = true;

    // formas de hacer un cast(asignacion forzosa de tipo de dato)
    nini= 'string';
    // forma 1
    const rta = (nini as string)
    //forma 2 
    const rta2 = (<number>nini)
})();