const LaFalleraKatayera = require("../laFalleraKatayera.js");

const laFalleraKatayera = new LaFalleraKatayera();
describe("LaFalleraKatayera", () => {


  it("xxx", () => {

    // Arranges
    const expectValue = ["Pollo", "conejo", "tomate", "alcachofa", "habas", "judías verdes"];

    // Act
    const result = laFalleraKatayera.ingredientCard

    // Assert
    expect(result).toStrictEqual(expectValue);

  })
})


//GUIÓN
//1. Repartir una carta 
//2. Repartir 7 -inicio de juego
//3. Comprobar que en la mano tengo 7 cartas
//4. Comprobar cuantos ingredientes tenemos en la mano
//5. Bajar ingredientes , esperas que en la mesa tengas los ingredientes de la mano y en la mano te queden los otros
//6. Robar dos cartas
//7. Atacar 

