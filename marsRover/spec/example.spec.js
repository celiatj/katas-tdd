import { MarsRover } from '../src/example.js'

describe('Mars Rover', () => {
    it('knows his position when lands', () => {
        // Arrange
        const landingPostion = {
            x: 6,
            y: 6,
            orientation: "N"
        }

        // Act
        const marsRover = new MarsRover(landingPostion)

        // Assert
        expect(marsRover.whereIAm()).toEqual({ x: 6, y: 6 })

    })




    it('moves forward when receibe a M', () => {
        // Arrange
        const landingPostion = {
            x: 6,
            y: 6,
            orientation: "N"
        }
        const marsRover = new MarsRover(landingPostion)

        // Act
        marsRover.command(["M"])

        // Assert
        expect(marsRover.whereIAm()).toEqual({ x: 6, y: 7 })
    })

    it('moves backward when receibe a B', () => {
        // Arrange
        const landingPostion = {
            x: 6,
            y: 6,
            orientation: "N"
        }
        const marsRover = new MarsRover(landingPostion)

        // Act
        marsRover.command(["B"])

        // Assert
        expect(marsRover.whereIAm()).toEqual({ x: 6, y: 5 })
    })

    it('receibes more than one command', () => {
        // Arrange
        const landingPostion = {
            x: 6,
            y: 6,
            orientation: "N"
        }
        const marsRover = new MarsRover(landingPostion)

        // Act
        marsRover.command(["M", "M"])

        // Assert
        expect(marsRover.whereIAm()).toEqual({ x: 6, y: 8 })
    })

    describe('Orientation', () => {

        it('knows his orientation when lands', () => {
            // Arrange
            const landingPostion = {
                x: 6,
                y: 6,
                orientation: "W"
            }

            // Act
            const marsRover = new MarsRover(landingPostion)

            // Assert
            expect(marsRover.myOrientation()).toEqual("W")

        })

        it('rotates left when recives command L', () => {
            // Arrange
            const landingPostion = {
                x: 6,
                y: 6,
                orientation: "N"
            }
            const marsRover = new MarsRover(landingPostion)

            // Act
            marsRover.command(["L", "L"])

            // Assert
            expect(marsRover.myOrientation()).toEqual("S")
        })

        it('rotates left when recives four command L', () => {
            // Arrange
            const landingPostion = {
                x: 6,
                y: 6,
                orientation: "N"
            }
            const marsRover = new MarsRover(landingPostion)

            // Act
            marsRover.command(["L", "L", "L", "L"])

            // Assert
            expect(marsRover.myOrientation()).toEqual("N")
        })
        it('rotates rigth when recives command R', () => {
            // Arrange
            const landingPostion = {
                x: 6,
                y: 6,
                orientation: "N"
            }
            const marsRover = new MarsRover(landingPostion)

            // Act
            marsRover.command(["R","R"])

            // Assert
            expect(marsRover.myOrientation()).toEqual("S")
        })


    })

})



