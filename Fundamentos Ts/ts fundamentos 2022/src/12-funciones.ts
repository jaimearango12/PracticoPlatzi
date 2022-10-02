(()=>{
    type Size =  'S' | 'M' | 'L';

    function creare (
        title:string,
        createAT: Date,
        stock: number,
        size: Size
    ){
        return{
            title,
            createAT,
            stock,
            size
        }
    }

    const prod = creare('pi', new Date(), 12, 'L')
    console.log(prod);
    console.log(prod.size);
    
    
})()