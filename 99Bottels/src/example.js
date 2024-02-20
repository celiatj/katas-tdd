
export class Wall {

    constructor() {
        this.bottles = 99
        this.drinkBottle = 1
    }

    song() {
        const songLines = []

        while (this.bottles >= 0) {
            const verso = this.singVerse(this.bottles)
            songLines.push(verso)
            this.bottles -= this.drinkBottle
        }

        return songLines
    }

    singVerse() {
        if (this.bottles === 0) return 'No more bottles of beer on the wall,' +
            ' no more bottles of beer. Go to the store and buy some more,' +
            ' 99 bottles of beer on the wall.'

        if (this.bottles === 1) return `${this.bottles} bottle of beer on the wall,` +
            ` ${this.bottles} bottle of beer. ` +
            'Take it down and pass it around, ' +
            `no more bottles of beer on the wall.`

        // if (this.bottles === 2) return `${this.bottles} bottles of beer on the wall,` +
        //     ` ${this.bottles} bottles of beer. ` +
        //     'Take one down and pass it around, ' +
        //     `${this.bottles - this.drinkBottle} bottle of beer on the wall.`

        return `${this.bottleNumberToString(this.bottles)} of beer on the wall, ` +
            `${this.bottleNumberToString(this.bottles)} of beer. `
            + 'Take one down and pass it around, ' +
            `${this.bottleNumberToString(this.bottles - this.drinkBottle)} of beer on the wall.`
    }

     bottleNumberToString = (bottles)=>{
        if(bottles === 1) return "1 bottle"
        return `${bottles} bottles`
     }
}

