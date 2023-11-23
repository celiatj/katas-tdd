import { pottersbook } from '../src/example.js'

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

    it('moves forward when receibe a B', () => {
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
})


class MarsRover {

    constructor(landingPostion) {
        this.x = landingPostion.x
        this.y = landingPostion.y
    }

    whereIAm() {
        return { x: this.x, y: this.y }

    }
    command(actions) {

        actions.forEach(action => {
            if (action === "M") {
                this.y += 1
            }
            if (action === "B") {
                this.y -= 1
            }
        });
    }


}


