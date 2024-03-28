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

    console.log(this.hand + 'la mano antes de bajar')
    let onlyIngredients = this.filterIngredientes(this.hand)

    if (this.myBoard.length === 0) {
      this.myBoard.push(...onlyIngredients);
      this.hand = this.filterMoster()
      console.log(this.hand + 'la mano despues de bajar')
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
    if(youwin()){ return "YOU WIN"}
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
    })
    return finalMoster
  }

  giveMeAcardInTheHand() {
    this.hand.push(this.dealCard())
  }
}

module.exports = LaFalleraKatayera;


/*"la eterna Alcaldesa": 1,
      "las la fallera calavera":2,
      "la dame de elx":3,
      "xicona de xixon":4,
      "monleons":5,
      "Jaume I":6*/