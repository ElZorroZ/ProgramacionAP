let NombreProducto='Computadora'
const PrecioUnitario = 2000
let CantidadDeseada = prompt(`Ingresa la cantidad que desea comprar del producto: ${NombreProducto}, el precio es: ${PrecioUnitario}`)
function calcular_costo(PrecioUnitario,CantidadDeseada){
    let res = PrecioUnitario*CantidadDeseada
    console.log(`Costo total de la compra es: ${res}`)
    }

