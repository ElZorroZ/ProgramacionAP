let Producto={
    id: 1,
    nombre:"Camiseta",
    precio:5000,
    cantidadDisponible:30
}
for(let i=0; i<Producto.length; i++){
    console.log(Producto[i].nombre)
    console.log(Producto[i].precio)
    console.log(Producto[i].cantidadDisponible)
}
Producto.nombre="Zapatillas"
for(let i=0; i<Producto.length; i++){
    console.log(Producto[i].nombre)
    console.log(Producto[i].precio)
    console.log(Producto[i].cantidadDisponible)
}
Producto.talle="40";
for(let i=0; i<Producto.length; i++){
    console.log(Producto[i].nombre)
    console.log(Producto[i].precio)
    console.log(Producto[i].cantidadDisponible)
    console.log(Producto[i].talle)
}
delete Producto.cantidadDisponible;
for(let i=0; i<Producto.length; i++){
    console.log(Producto[i].nombre)
    console.log(Producto[i].precio)
    console.log(Producto[i].cantidadDisponible)
    console.log(Producto[i].talle)
}