import { products, create, calStock } from "./product.service";

create({
    title: 'holo',
    createAT: new Date(),
    stock:13
});

create({
    title: 'holo2',
    createAT: new Date(),
    stock:11,
    size: 'L'
})

console.log(products);

const total = calStock();
console.log(total);

