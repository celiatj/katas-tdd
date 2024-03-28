import { Bottles } from '../src/example.js'

describe('99 bottles', () => {

    xit('should print the fist line of the song', () => {

        // Arrange
        const expected_value = '99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[0]).toBe(expected_value)
    })
    xit('should print the secon line of the song', () => {

        // Arrange
        const expected_value = '98 bottles of beer on the wall, 98 bottles of beer. Take one down and pass it around, 97 bottles of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[1]).toBe(expected_value)
    })

    xit('should print the penultim line of the song', () => {

        // Arrange
        const expected_value = '2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[97]).toBe(expected_value)
    })

    xit('should print the penultim line of the song', () => {

        // Arrange
        const expected_value = '1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[98]).toBe(expected_value)
    })
    xit('should print 100 versos of the song', () => {

        // Arrange
        const result = new Wall().song()

        // Act
        const expected_value = 100

        // Assert
        expect(result.length).toBe(expected_value)
    })
    xit('should print the last line of the song', () => {

        // Arrange
        const expected_value = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'

        // Act
        const result = new Wall().song()

        // Assert
        expect(result[result.length - 1]).toBe(expected_value)
    })

    xit('includs the last vers', () => {

        // Arrange
        const expected_value = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'

        // Act
        let result = new Wall().song()
        result = result.join()

        // Assert
        expect(result.includes(expected_value)).toBe(true)
    })



})

//test de Sandi Metz
describe('Bottles', () => {

    test('the first verse', () => {
        const expected =
            '99 bottles of beer on the wall, ' +
            '99 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '98 bottles of beer on the wall.\n';
        expect(new Bottles().verse(99)).toBe(expected);
    });

    test('another verse', () => {
        const expected =
            '3 bottles of beer on the wall, ' +
            '3 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '2 bottles of beer on the wall.\n';
        expect(new Bottles().verse(3)).toBe(expected);
    });

    test('verse 2', () => {
        const expected =
            '2 bottles of beer on the wall, ' +
            '2 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '1 bottle of beer on the wall.\n';
        expect(new Bottles().verse(2)).toBe(expected);
    });

    test('verse 1', () => {
        const expected =
            '1 bottle of beer on the wall, ' +
            '1 bottle of beer.\n' +
            'Take it down and pass it around, ' +
            'no more bottles of beer on the wall.\n';
        expect(new Bottles().verse(1)).toBe(expected);
    });

    test('verse 0', () => {
        const expected =
            'No more bottles of beer on the wall, ' +
            'no more bottles of beer.\n' +
            'Go to the store and buy some more, ' +
            '99 bottles of beer on the wall.\n';
        expect(new Bottles().verse(0)).toBe(expected);
    });

    test('a couple verses', () => {
        const expected =
            '99 bottles of beer on the wall, ' +
            '99 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '98 bottles of beer on the wall.\n' +
            '\n' +
            '98 bottles of beer on the wall, ' +
            '98 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '97 bottles of beer on the wall.\n'

        expect(new Bottles().verses(99, 98)).toEqual(expected);
    });

    test.only('a few verses', () => {
        const expected =
            '2 bottles of beer on the wall, ' +
            '2 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '1 bottle of beer on the wall.\n' +
            '\n' +
            '1 bottle of beer on the wall, ' +
            '1 bottle of beer.\n' +
            'Take it down and pass it around, ' +
            'no more bottles of beer on the wall.\n' +
            '\n' +
            'No more bottles of beer on the wall, ' +
            'no more bottles of beer.\n' +
            'Go to the store and buy some more, ' +
            '99 bottles of beer on the wall.\n'

        const result = new Bottles().verses(2, 0)
        expect(result).toBe(expected);
    });
    test.skip('toda la canción', () => {
        const bottles = new Bottles();
        expect(bottles.song()).toBe(bottles.verses(99, 0));
    });

});



