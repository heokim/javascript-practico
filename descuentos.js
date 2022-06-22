function calcularPrecioConDescuento(precio, descuento) {
    precio = precio;
    descuento = descuento;
    return precio * (100 - descuento) / 100;
};

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "Precio con descuento es de: " + precioConDescuento;

    // console.log({
    //     priceValue,
    //     discountValue,
    //     precioConDescuento,
    //     resultP,
    // })
};