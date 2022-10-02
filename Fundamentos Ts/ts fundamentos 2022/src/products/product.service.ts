import { Product } from "./products.model";

 export const products: Product[]= [];

 export const create =(data:Product)=>{
    products.push(data)
}

 export const calStock= ():number =>{
    let total =0;
    products.forEach((item)=>{
        total += item.stock;
    });
    return total
}