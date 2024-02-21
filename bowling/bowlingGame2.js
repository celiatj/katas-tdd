
class bowlingGame {

    constructor(){
      this.spare = false
      this.strikeRound1 = false
      this.strikeRound2 = false
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
  
      let a = this.sumar(this.partidas)
      return this.partidas
    }
  
    sumar(partidas) {
  
      let play = []
      let puntuacion = 0
  
      partidas.forEach(element => {
  
        puntuacion += this.sumarTurno(element)
  
      })
  
      partidas.forEach(element => {
        if (element[0] + element[1] === 10) {
          if (element[0] === 10) { play.push("X") }
          else {
            play.push(element[0])
            play.push("/")
          }
        } else {
          play.push(element[0])
          play.push(element[1])
        }
      });
  
      //console.log(play)
      //(puntuacion)
  
      return puntuacion
    }
  
    isScope(turno) {
      if (turno[0] + turno[1] === 10 && turno[0] != 10) return true
      else { return false }
    }
  
    isStrike(turno) {
      if (turno[0] === 10) return true
      else { return false }
    }
  
    sumarTurno(turno) {
      //("1----"+turno)
      let puntuacion;
      puntuacion = turno[0] + turno[1]
      //("1.5--> sumar: " + turno[0] + "+" + turno[1])
      if (this.strikeRound2) {
        puntuacion += puntuacion
        this.strikeRound2 = false
        //("3 es strike ronda2: " + puntuacion)
      }
      
      if (this.strikeRound1) {
        //("2 es strike ronda1--antesdesumar: " + puntuacion)
        puntuacion += puntuacion
        this.strikeRound2 = true
        this.strikeRound1 = false
        //("es strike ronda1: " + puntuacion)
      }
  
    
  
      if (this.spare) {
        puntuacion *= 2
        this.spare = false
        //("es scope: " + puntuacion)
      }
  
      if (this.isScope(turno)) {
        this.spare = true
        //("Scope en true")
      }
  
      if (this.isStrike(turno)) {
        this.strikeRound1 = true
        //this.strikeRound2 = false
        //("Strikes en true")
      }
      return puntuacion;
    }
  }
