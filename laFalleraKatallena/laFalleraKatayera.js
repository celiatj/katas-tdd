class LaFalleraKatayera {
  
  ingredientCard = ["Pollo", "conejo", "tomate", "alcachofa", "habas", "judías verdes"]
  
  monstersCard = ["la eterna Alcaldesa", "las la fallera calavera", "la dame de elx", "xicona de xixon", "monleons", "Jaume I"]
  
  deck = this.monstersCard.concat(this.ingredientCard)
  myBoard = []
  firstShift = this.myBoard.length === 0

  dealCard() {
    const card = this.deck[Math.floor(Math.random() * this.deck.length)]
    return card
  }

  startGame() {
    const totalCards = []
    while (totalCards.length < 7) {
      totalCards.push(this.dealCard())
    }

    return totalCards
  }

  downIngredientes(hand) {
    let onlyIngredients = this.filterIngredientes(hand)
    if (this.myBoard.length === 0) {
      this.myBoard.push(...onlyIngredients);
    } else{
      onlyIngredients.forEach(card => {
        this.myBoard.forEach(ingredient => {
          if (card === ingredient) {
            onlyIngredients.splice(onlyIngredients.indexOf(card),1)
          }
        });
      });
      this.myBoard.push(...onlyIngredients)
    }
  }

  filterIngredientes(hand) {
    let onlyIngredients = hand.filter((card) => this.ingredientCard.includes(card))
    let finalIngredients = []

    onlyIngredients.forEach(ingredient =>{
      if(!finalIngredients.includes(ingredient)){
        finalIngredients.push(ingredient)
      }
    })
    return finalIngredients
  }
}

module.exports = LaFalleraKatayera;


/*"la eterna Alcaldesa": 1,
      "las la fallera calavera":2,
      "la dame de elx":3,
      "xicona de xixon":4,
      "monleons":5,
      "Jaume I":6*/