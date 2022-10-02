(()=>{
    const login =(data:{email:string, password: string})=>{
        console.log(data.email, data.password);
        
    }

    login({email:'jaime@mail.com', password:'123456'})

    type Size =  'S' | 'M' | 'L';

    const products: any[]= [];

    const creare =(data:{
        title:string,
        createAT: Date,
        stock: number,
        size?: Size
    })=>{
        products.push(data)
    }

    creare({
        title: 'holo',
        createAT: new Date(),
        stock:13
    })


    let mymy = 1+'1'
})()