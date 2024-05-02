let NombreProducto='Computadora'
const PrecioUnitario = 2000
const Descuento = 10
let CantidadDeseada = prompt(`Ingresa la cantidad que desea comprar del producto: ${NombreProducto}, el precio es: ${PrecioUnitario}`)
if(CantidadDeseada>=10){
    let res_aux = PrecioUnitario*CantidadDeseada
    let res = res_aux/Descuento
    alert(`Costo total de la compra es: ${res_aux}\nCosto total con descuento es: ${res}`)

    }
else{
    let res = PrecioUnitario*CantidadDeseada
    alert(`Costo total de la compra es: ${res}`)
    }    
