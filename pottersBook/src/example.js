
export function pottersbook(cesta){
   
    let result = calcular(cesta)
    return result
}
 function calcular(cesta){
    let precio_unitario = 8
    let precio=0;
    let descuentos = [0,0, 0.05, 0.10, 0.20, 0.25]
    //function aplicarDescuentos =(cantidad,cesta,precio_unitario,descuentos){cantidad(cesta.length)*precio_unitario-(cantidad(cesta.length)*precio_unitario*descuentos(cesta.length))}
   //let aplicarDescuentos = cantidad(cesta.length)*precio_unitario-(cantidad(cesta.length)*precio_unitario*descuentos(cesta.length))}
    while(cesta.length>0){
        cesta = cesta.filter(elemento => elemento !== 0);
        let cantidadElementos=cesta.length
        switch (cesta.length){
            case 1: precio+=precio_unitario
            break;
            case 2: precio+= cantidadElementos*precio_unitario-(cantidadElementos*precio_unitario*descuentos[cantidadElementos])
            break;
            case 3: precio+= cantidadElementos*precio_unitario-(3*precio_unitario*0.1)
            break;
            case 4: precio+= 4*precio_unitario-(4*precio_unitario*0.2)
            break;
            case 5: precio+= 5*precio_unitario-(5*precio_unitario*0.25)
            break;
        }
        cesta=cesta.map(function (x) {return x -1});
    }
 return precio
 }

/*function calcular(cesta) {
  let precio_unitario = 8;
  let precio = 0;
  const descuentos = [0, 0.05, 0.10, 0.20, 0.25];

  while (cesta.length > 0) {
    cesta = cesta.filter(elemento => elemento !== 0);
    const cantidadElementos = cesta.length;
    precio += cantidadElementos * precio_unitario - (cantidadElementos * precio_unitario * descuentos[cantidadElementos]);
    cesta = cesta.map(x => x - 1);
  }
  return precio;
}*/


