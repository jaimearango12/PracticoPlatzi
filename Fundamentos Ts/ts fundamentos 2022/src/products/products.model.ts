export type Size =  'S' | 'M' | 'L';
export type Product = {
    title:string,
    createAT: Date,
    stock: number,
    size?: Size
};