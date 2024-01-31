import {romanos, centenas} from '../src/example.js'

describe.skip('numero romanos', () => {
   
    it('return unidades for one numer', () => {
        // Arranges
        const expected_value = "IX"

        // Act
        const result = romanos(9)

        // Assert
        expect(result).toBe(expected_value)
    })
 
    it('return decenas for two number', () => {
        // Arranges
        const expected_value = "XX"

        // Act
        const result = romanos(20)

        // Assert
        expect(result).toBe(expected_value)
    })
    it('return centenas for three number ', () => {
        // Arranges
        const expected_value = "CC"

        // Act
        const result = romanos(200)

        // Assert
        expect(result).toBe(expected_value)
    })

    it('return number centenas', () => {
       
        // Arranges
        const expected_value = 3; // El valor esperado es 3
    
        // Act
        const result = centenas(339); // Llamamos a la función centenas directamente
    
        // Assert
        expect(result).toBe(expected_value);
    })
    it('return number romano complet for a long number', () => {
        // Arranges
        const expected_value = "CCCXXXIX"

        // Act
        const result = romanos(339)

        // Assert
        expect(result).toBe(expected_value)
    })
})
