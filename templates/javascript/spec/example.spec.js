import { example } from '../src/example.js'

describe('Example', () => {
    it('should return true', () => {
        // Arrange
        const expected_value = true

        // Act
        const result = example('a string')

        // Assert
        expect(result).toBe(expected_value)
    })
})
