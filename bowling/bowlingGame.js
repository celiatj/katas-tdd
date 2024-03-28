class bowlingGame {

  constructor() {
    this.rondas = 0
    this.partidas = []
  }
  bowling() {
    let primerTurno = 0
    let segundoTurno = 0
    let tercerTurno = 0

    while (this.rondas < 9) {

      primerTurno = Math.floor(Math.random() * (11 - 0) + 0)
      segundoTurno = Math.floor(Math.random() * ((11 - primerTurno) - 0) + 0)
      const result = [primerTurno, segundoTurno]
      this.partidas.push(result)
      this.rondas++
    }

    //ultima partida
    primerTurno = Math.floor(Math.random() * (11 - 0) + 0)

    if (primerTurno == 10) {
      segundoTurno = Math.floor(Math.random() * (11 - 0) + 0)

    } else {
      segundoTurno = Math.floor(Math.random() * ((11 - primerTurno) - 0) + 0)
    }

    if (segundoTurno === 10 || primerTurno + segundoTurno === 10) {
      tercerTurno = Math.floor(Math.random() * (11 - 0) + 0)
    }

    const result = [primerTurno, segundoTurno, tercerTurno]
    this.partidas.push(result)
    this.sumar(this.partidas)

    return this.partidas

  }

  sumar(partidas) {
    let suma = 0
    let turno = []
    console.log(suma)
    for (let step = 0; step < 8; step++) {

      turno = partidas[step]

      if (turno[0] === 10) {
        console.log("estoy en strike")

        let a = partidas[(step + 1) ]
        let b = a[0] + a[1]
        let c = partidas[(step + 2)]
        let d = c[0] + c[1]
        console.log("--->" + (step + 2) % partidas.length)
        suma += b+d

        console.log("--->" + b)
        // suma +=d

      } else if (turno[0] + turno[1] === 10) {
        console.log("estoy en scope")
        let a = partidas[(step + 1) % partidas.length]
        let b = a[0] + a[1]

        suma += b

      }

      suma += turno[0] + turno[1]
      console.log(suma)
    }

    let turno9=partidas[8]
    let turno10=partidas[9]

// turno 9
    if (turno9[0] === 10) {
      console.log("estoy en strike ronda 9")

      let a = turno10[0]
      let b = turno10[1]
      let c = turno10[2]
      
      suma += turno9[0] + turno9[1]
      suma += a+b+c
      

    } else if (turno9[0] + turno9[1] === 10) {
      console.log("estoy en scope ronda 9")
   
      let a = turno10[0]
      let b = turno10[1]

      suma += turno9[0] + turno9[1]
      suma += a +b
    
    }else{
      suma += turno9[0] + turno9[1]
    }
    
    //turno10

      suma += turno10[0] + turno10[1]+turno[2]
    
    return suma
  }


}
module.exports = bowlingGame;


