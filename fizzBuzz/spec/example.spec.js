import { fizzBuzz } from '../src/example.js'

describe('FizBuzz', () => {
    it('returns 100 items', () => {
        // Arrange
        const expected_value = 100

        // Act
        const result = fizzBuzz()

        // Assert
        expect(result.length).toBe(expected_value)
    })
    it('returns 1 in the first position', () => {
        // Arrange
        const expected_value = 1

        // Act
        const result = fizzBuzz()

        // Assert
        expect(result[0]).toBe(expected_value)
    })

    it('returns fizz when number is 3', () => {
        // Arrange
        const expected_value = "Fizz"

        // Act
        const result = fizzBuzz()

        // Assert
        expect(result[2]).toBe(expected_value)
    })

    it('returns fizz when number divisible by 3', () => {
        // Arrange
        const expected_value = "Fizz"

        // Act
        const result = fizzBuzz()

        // Assert
        expect(result[5]).toBe(expected_value)
    })

    it('returns buzz when number divisible by 5', () => {
        // Arrange
        const expected_value = "Buzz"

        // Act
        const result = fizzBuzz()

        // Assert
        expect(result[4]).toBe(expected_value)
    })

    it('returns FizzBuzz when number divisible by 3 and 5', () => {
        // Arrange
        const expected_value = "FizzBuzz"
        const testNumber = 15; // El número que debería dar como resultado "FizzBuzz"
    
        // Act
        const result = fizzBuzz();
    
        // Assert
        //expect(result[testNumber - 1]).toBe(expected_value);
        expect(result[34]).toBe(expected_value)
    })

    it('returns buzz when number contains in 5', () => {
        // Arrange
        const expected_value ="Buzz"

        // Act
        const result = fizzBuzz()

        // Assert
        expect(result[57]).toBe(expected_value)
    })
    it('returns buzz when number ends in 3', () => {
        // Arrange
        const expected_value ="Fizz"

        // Act
        const result = fizzBuzz()

        // Assert
        expect(result[37]).toBe(expected_value)
    })
})


