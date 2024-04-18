const LaFalleraKatayera = require("../laFalleraKatayera.js");

const laFalleraKatayera = new LaFalleraKatayera();
describe("LaFalleraKatayera", () => {


  it("deck with all ingredient", () => {

    // Arranges
    const expectValue = ["Pollo", "conejo", "tomate", "alcachofa", "habas", "judías verdes"];

    // Act
    const result = laFalleraKatayera.ingredientCard

    // Assert
    expect(result).toStrictEqual(expectValue);

  });

  it("deck with all monsters", () => {

    // Arranges
    const expectValue = ["la eterna Alcaldesa", "las la fallera calavera", "la dame de elx", "xicona de xixon", "monleons", "Jaume I"]

    // Act
    const result = laFalleraKatayera.monstersCard

    // Assert
    expect(result).toStrictEqual(expectValue);

  });

  it("deck with all cards", () => {

    // Arranges
    const expectValue = ["la eterna Alcaldesa", "las la fallera calavera", "la dame de elx", "xicona de xixon", "monleons", "Jaume I", "Pollo", "conejo", "tomate", "alcachofa", "habas", "judías verdes"]

    // Act
    const result = laFalleraKatayera.deck

    // Assert
    expect(result).toStrictEqual(expectValue);

  });
  it("deal one card", () => {

    // Arranges
    const expectValue = true

    // Act
    const result = laFalleraKatayera.dealCard()
    const deck = laFalleraKatayera.deck

    // Assert
    expect(deck.includes(result)).toBe(expectValue);

  });

  it("Should have seven cards when the game starts", () => {
    // Arranges
    const expectValue = 7

    // Act
    const result = laFalleraKatayera.startGame().length

    // Assert
    expect(result).toBe(expectValue)
  })

  it("put ingredients in a board", () => {
    // Arranges
    laFalleraKatayera.hand = [
      'judías verdes',
      'Pollo',
      'judías verdes',
      'monleons',
      'Jaume I',
      'la eterna Alcaldesa',
      'la dame de elx'
    ]
    const expectValue = ['judías verdes',
      'Pollo']

    // Act
    laFalleraKatayera.downIngredientes()
    const result = laFalleraKatayera.myBoard

    // Assert
    expect(result).toStrictEqual(expectValue)
  })

  it("give me a card and has one more in the hand", () => {
    // Arranges
    const expectValue = laFalleraKatayera.hand.length

    // Act
    laFalleraKatayera.giveMeAcardInTheHand()
    const result = laFalleraKatayera.hand.length

    // Assert
    expect(result).toStrictEqual(expectValue + 1)
  })

  it("when you have five ingredients, you win!", () => {
    // Arranges
    laFalleraKatayera.hand = [
      'judías verdes',
      'Pollo',
      'alcachofas',
      'conejo',
      "tomate"
    ]
    
    // Act
    const result = laFalleraKatayera.downIngredientes()
    const expectValue = 'YOU WIN'

    // Assert
    expect(result).toBe(expectValue)
  })

//falta test que compruebe la mano , que cuando nos bajamos ingredientes se quede la mano que toca 

});