import { Wall } from '../src/example.js'

describe('99 bottles', () => {

    it('should print the fist line of the song', () => {

        // Arrange
        const expected_value = '99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[0]).toBe(expected_value)
    })
    it('should print the secon line of the song', () => {

        // Arrange
        const expected_value = '98 bottles of beer on the wall, 98 bottles of beer. Take one down and pass it around, 97 bottles of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[1]).toBe(expected_value)
    })

    it('should print the penultim line of the song', () => {

        // Arrange
        const expected_value = '2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[97]).toBe(expected_value)
    })

    it('should print the penultim line of the song', () => {

        // Arrange
        const expected_value = '1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[98]).toBe(expected_value)
    })
    it('should print 100 versos of the song', () => {

        // Arrange
        const result = new Wall().song()

        // Act
        const expected_value = 100

        // Assert
        expect(result.length).toBe(expected_value)
    })
    it('should print the last line of the song', () => {

        // Arrange
        const expected_value = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[result.length - 1]).toBe(expected_value)
    })

    it('includs the last vers', () => {

        // Arrange
        const expected_value = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'

        // Act
        let result = new Wall().song()
          result =result.join() 

        // Assert
        expect(result.includes(expected_value)).toBe(true)
    })

})

// incude para mas resrsWhen you were new to programming you wrote simple code. Although you may not have appreciated it at the time, this was a great strength. Since then, you've learned new skills, tackled harder problems, and produced increasingly complex solutions. Experience has taught you that most code will change someday, and you've begun to craft it in anticipation of that day. Complexity seems both natural and inevitable.
