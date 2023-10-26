import {  pottersbook } from '../src/example.js'

describe('potterbook', () => {
    it('returns a number', () => {
        // Arrange
        const expected_value = true

        // Act
        const result = pottersbook([1])

        // Assert
        expect(!isNaN(result)).toBe(expected_value)
    })

        it('returns a 15.2 for 2 diferents books', () => {
            // Arrange
            const expected_value = 15.2
    
            // Act
            const result = pottersbook([1,1])
    
            // Assert
            expect(result).toBe(expected_value)
        })
       it('returns a 21.6 for 3 diferents books', () => {
            // Arrange
            const expected_value = 21.6
    
            // Act
            const result = pottersbook([1,1,1])
    
            // Assert
            expect(result).toBe(expected_value)
        })
        it('returns a 51.60 for 2 copias del 1º, 2 copias del 2º, 2 copias 3º, 1 copia 4º y 1 copia 5º', () => {
            // Arrange
            const expected_value = 51.60
    
            // Act
            const result = pottersbook([2,2,2,1,1])
    
            // Assert
            expect(result).toBe(expected_value)
        })
})


