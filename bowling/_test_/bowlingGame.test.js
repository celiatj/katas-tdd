const BowlingGame = require("../bowlingGame.js");


describe("Bowling", () => {
  
  it("una jugada tiene dos tiradas", () => {
    // Arranges
    const bowlingGame = new BowlingGame
    const expectValue = 2;

    // Act
    const result = bowlingGame.bowling();

    // Assert

    expect(result[0].length).toBe(expectValue);

  });

  it("return tirada menor a 10", () => {
    // Arranges
    const bowlingGame1 = new BowlingGame
    const expectValue = true;

    // Act
    const result = bowlingGame1.bowling();

    tirada1 = result[0][0]
    tirada2 = result[0][1]

    const sumatorio = tirada1 + tirada2

    // Assert

    expect(sumatorio < 11).toBe(expectValue);

  });

  it("un juego tiene 10 rondas", () => {
    // Arranges
    const bowlingGame2 = new BowlingGame
    const expectValue = 10;

    // Act
    const result = bowlingGame2.bowling();

    // Assert

    expect(result.length).toBe(expectValue);

  });

  it("suma las partida sin scope ni strike", () => {
    // Arranges
    const bowlingGame3 = new BowlingGame
    const expectValue = 20;
    const partidaUnos=[[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1,0]]
    // Act
    const result = bowlingGame3.sumar(partidaUnos);

    // Assert

    expect(result).toBe(expectValue);

  });

it("suma las partida con todo scope ", () => {
    // Arranges
    const bowlingGame6 = new BowlingGame
    const expectValue = 200;// la ultima partida no cuenta el doble*
    const partidaScope=[[5,5],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1,0]]
    // Act
    const result = bowlingGame6.sumar(partidaScope);

    // Assert

    expect(result).toBe(expectValue);

  });
  
  it("suma las partida con 3 strike y el reto 1", () => {
    // Arranges
    const bowlingGame8 = new BowlingGame
    const expectValue = 43;
    const partidaStrike=[[10,0],[1,0],[1,0],[10,0],[1,0],[1,0],[10,0],[1,0],[1,0],[1,0,0]]
    // Act
    const result = bowlingGame8.sumar(partidaStrike);

    // Assert

    expect(result).toBe(expectValue);

  });

  it("suma de la partida perfecta sin la ultima posicion", () => {
    // Arranges
    const bowlingGame9 = new BowlingGame
    const expectValue = 300;
    const partidaStrike=[[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,10]]
    // Act
    const result = bowlingGame9.sumar(partidaStrike);

    // Assert

    expect(result).toBe(expectValue);

  });
});