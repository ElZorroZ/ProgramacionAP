const productos=["Coca Cola","Libro","Thompson","Tanque M4 Sherman","Volkswagen 1600"]
    for(let index=0; index<=productos.length; index++){
        console.log(`${index}:${productos[index]}`)
    
    }
    productos.pop()
    console.clear()
    for(let index=0; index<=productos.length; index++){
        console.log(`${index}:${productos[index]}`)
    
    }
