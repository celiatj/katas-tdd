import { romanos } from '../src/example.js'

describe('numero romanos', () => {
    it('number romano', () => {
        // Arranges
        const expected_value = "CCCXXXIX"

        // Act
        const result = romanos(339)

        // Assert
        expect(result).toBe(expected_value)
    })
    it('number romano', () => {
        // Arranges
        const expected_value = "CCCXXXIX"

        // Act
        const result = romanos(339)

        // Assert
        expect(result).toBe(expected_value)
    })
 
})
