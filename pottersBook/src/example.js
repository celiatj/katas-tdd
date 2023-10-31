
export function pottersbook(cesta){
   
    let result = calcular(cesta)
    return result
}
 function calcular(cesta){
    const precio_unitario = 8
    let precio=0;
    const discountByBook = {
      0: 0,
      1: 0,
      2: 0.05,
      3:0.10,
      4:0.20,
      5:0.25
    }
    

    while(cesta.length>0){
        cesta = cesta.filter(elemento => elemento !== 0);

        let librosDistintos=cesta.length
        let descuento=discountByBook[librosDistintos]

        precio+= librosDistintos*precio_unitario*(1-descuento)

        cesta=cesta.map(function (x) {return x -1});
    }
 return precio
 }


