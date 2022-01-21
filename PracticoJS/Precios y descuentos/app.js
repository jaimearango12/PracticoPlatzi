//const precioOriginal = 120;
//const descuento= 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;   

    return precioConDescuento;
}



//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});

function onCLickButtonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const inputDiscount = document.getElementById('inputDiscount');

    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP= document.getElementById("resultP");

    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

}



