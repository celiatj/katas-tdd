class bowlingGame {

  constructor() {
      this.rondas = 0
      this.partidas = []
  }
  bowling() {

      while (this.rondas < 10) {
          let primerTurno = Math.floor(Math.random() * (11 - 0) + 0)
          let segundoTurno = Math.floor(Math.random() * ((11 - primerTurno) - 0) + 0)
          const result = [primerTurno, segundoTurno]
          this.partidas.push(result)
          this.rondas++
      }

      this.sumar(this.partidas)

      return this.partidas

  }

  sumar(partidas) {
      let suma = 0
      let turno = []
      console.log(suma)
      for (let step = 0; step < 10; step++) {
      
          turno = partidas[step]

          if (turno[0] === 10) {
            console.log("estoy en strike")

            let a = partidas[(step + 1) % partidas.length]
            let b = a[0] + a[1]
            let c = partidas[(step + 2) % partidas.length]
            let d = c[0] + c[1]
            console.log("--->"+(step + 2) % partidas.length)
            suma +=b
            suma+=d
            console.log("--->"+ b)
           // suma +=d

          }else if (turno[0] + turno[1] === 10){
            console.log("estoy en scope")
              let a = partidas[(step + 1) % partidas.length]
              let b = a[0] + a[1]
          
              suma +=b
            
          } 

          suma += turno[0] + turno[1]
          console.log(suma)
      }

     return suma
  }


}
module.exports = bowlingGame;


