class LaFalleraKatayera {

  ingredientCard = ["Pollo", "conejo", "tomate", "alcachofa", "habas", "judías verdes"]

  monstersCard = ["la eterna Alcaldesa", "las la fallera calavera", "la dame de elx", "xicona de xixon", "monleons", "Jaume I"]

  deck = this.monstersCard.concat(this.ingredientCard)
  myBoard = []
  hand = []
  firstShift = this.myBoard.length === 0


  dealCard() {
    const card = this.deck[Math.floor(Math.random() * this.deck.length)]
    return card
  }

  startGame() {
    while (this.hand.length < 7) {
      this.hand.push(this.dealCard())
    }
    return this.hand
  }

  downIngredientes() {
    let onlyIngredients = this.filterIngredientes(this.hand)
    console.log('onlyIngredientes' + onlyIngredients)
    console.log('my Hand'+ this.hand)

    if (this.myBoard.length === 0) {
      this.myBoard.push(...onlyIngredients);
      this.hand = this.filterMoster()
    } else {
      onlyIngredients.forEach(card => {
        this.myBoard.forEach(ingredient => {
          if (card === ingredient) {
            onlyIngredients.splice(onlyIngredients.indexOf(card), 1)
          }
        });
      });
      this.myBoard.push(...onlyIngredients)

      this.hand = this.filterMoster()
      // modificar filterMoster para que se elimine de la mano y no con el filtermoster
    }
    if (this.youwin()) { return "YOU WIN" }
  }

  filterIngredientes() {
    let onlyIngredients = this.hand.filter((card) => this.ingredientCard.includes(card))
    let finalIngredients = []

    onlyIngredients.forEach(ingredient => {
      if (!finalIngredients.includes(ingredient)) {
        finalIngredients.push(ingredient)
      } finalIngredients
    })
    return finalIngredients
  }

  filterMoster() {

    let onlyMoster = this.hand.filter((card) => this.monstersCard.includes(card))
    let finalMoster = []

    onlyMoster.forEach(monster => {
      if (!finalMoster.includes(monster)) {
        finalMoster.push(monster)
      }
      //revisar esto
      let a = this.encontrarDuplicados(this.hand)
      finalMoster.push(a)
    })
    console.log("MI MANO:"+finalMoster)
    return finalMoster
  }

  giveMeAcardInTheHand() {
    this.hand.push(this.dealCard())
  }

  youwin() {
    if (this.myBoard.length === 5) return true
    return false
  }
// no duplica bien
  encontrarDuplicados(array){
    let contador = {};
    let duplicados = [];

    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        contador[elemento] = (contador[elemento] || 0) + 1;
        if (contador[elemento] === 2) {
            duplicados.push(elemento);
        }
    }

    return duplicados;
}

//falta mucho refactor!!!!
}

module.exports = LaFalleraKatayera;


/*"la eterna Alcaldesa": 1,
      "las la fallera calavera":2,
      "la dame de elx":3,
      "xicona de xixon":4,
      "monleons":5,
      "Jaume I":6*/