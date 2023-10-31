import {  pottersbook } from '../src/example.js'

describe('Potterbook', () => {
    it('returns the price for one book', () => {
        // Arrange
        const expected_value = 8

        // Act
        const result = pottersbook([1])

        // Assert
        expect(result).toBe(expected_value)
    })

        it('returns a the price whith 0.05 discount for 2 diferents books', () => {
            // Arrange
            const expected_value = 15.2
    
            // Act
            const result = pottersbook([1,1])
    
            // Assert
            expect(result).toBe(expected_value)
        })
       it('returns the price whith 0.10 discount for 3 diferents books', () => {
            // Arrange
            const expected_value = 21.6
    
            // Act
            const result = pottersbook([1,1,1])
    
            // Assert
            expect(result).toBe(expected_value)
        })
        it('returns the price whith all discount for a shopping cart', () => {
            // Arrange
            // 2 copias del 1º, 2 copias del 2º, 2 copias 3º, 1 copia 4º y 1 copia 5º
            const expected_value = 51.60
    
            // Act
            const result = pottersbook([2,2,2,1,1])
    
            // Assert
            expect(result).toBe(expected_value)
        })
})


