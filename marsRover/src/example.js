const CARDINAL_POINTS_RIGHT = {
  "N": "E",
  "E": "S",
  "S": "W",
  "W": "N"
}

const CARDINAL_POINTS_LEFT = {
  "N": "W",
  "E": "N",
  "S": "E",
  "W": "S"
}

export class MarsRover {

  constructor(landingPostion) {
    this.x = landingPostion.x
    this.y = landingPostion.y
    this.orientation = landingPostion.orientation
  }

  whereIAm() {
    return { x: this.x, y: this.y }
  }

  myOrientation() {
    return this.orientation
  }

  command(actions) {
    actions.forEach(action => {
      if (action === "M") {
        switch (this.myOrientation()) {
          case "N":
            this.y += 1
            break
          case "E":
             this.x += 1
            break
          case "W":
            this.x -= 1
            break
          case "S":
            this.y -= 1
            break
        }
      }
      if (action === "B") {
        this.y -= 1
      }
      if (action === "L") {
        this.turn(CARDINAL_POINTS_LEFT)
      }
      if (action === "R") {
        this.turn(CARDINAL_POINTS_RIGHT)
      }
    });
  }

  turn(pepe) {
    this.orientation = pepe[this.orientation]

  }

}

