(()=>{
    type Size =  'S' | 'M' | 'L';
    type Product = {
        title:string,
        createAT: Date,
        stock: number,
        size?: Size
    };

    const products: Product[]= [];

    const creare =(data:Product)=>{
        products.push(data)
    }

    creare({
        title: 'holo',
        createAT: new Date(),
        stock:13
    })
})()