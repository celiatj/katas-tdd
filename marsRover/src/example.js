const CARDINAL_POINTS = ["N", "W", "S", "E"]

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
        this.y += 1
      }
      if (action === "B") {
        this.y -= 1
      }
      if (action === "L") {
        this.turnLeft()
      }
      if (action === "R") {
        this.turnRigth()
      }
    });
  }

  turnLeft() {
    const indexCardinals = CARDINAL_POINTS.indexOf(this.orientation)

    let newIndexCardinal = indexCardinals + 1
    if (newIndexCardinal > 3) newIndexCardinal = 0

    this.orientation = CARDINAL_POINTS[newIndexCardinal]
  }
  
  turnRigth() {
    const indexCardinals = CARDINAL_POINTS.indexOf(this.orientation)

    let newIndexCardinal = indexCardinals - 1
    if (newIndexCardinal < 0) newIndexCardinal = 3

    this.orientation = CARDINAL_POINTS[newIndexCardinal]
  }
}

