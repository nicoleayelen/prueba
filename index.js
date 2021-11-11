function calculatePrice (producto, precio) {
    let envioRango;

    if (precio >= 1 && precio <= 2000) {
        envioRango = 300;
    } 
    if (precio >= 2001 && precio <= 4000) {
        envioRango = 500;
    } else {
        envioRango = 700;
    }
    let precioFinal = precio + envioRango;

    return alert(`El producto ${producto} cuesta $${precio}. Su costo de envío es de $${envioRango}. Por lo tanto, el precio final es de $${precioFinal}`)
};
calculatePrice('Macbook', 2500);
calculatePrice('Celular', 500);
calculatePrice('Playstation', 4500);


