
function caldularMediaAritmetica(lista){
    let sumaLista = 0;

    /*
    for(let i; i <lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    */

    //Metodo que reemplaza el ciclo for

    const sumaLista= lista.reduce(
        function(valorAcumulado= 0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );

    const promedioLista= sumaLista / lista.length;

    return promedioLista;
}