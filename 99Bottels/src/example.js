
export class Bottles {
    verse(number) {

        switch (number) {

            case 0:
                return (
                    'No more bottles of beer on the wall, ' +
                    'no more bottles of beer.\n' +
                    'Go to the store and buy some more, ' +
                    '99 bottles of beer on the wall.\n'
                );

            case 1:
                return (
                    '1 bottle of beer on the wall, ' +
                    '1 bottle of beer.\n' +
                    'Take it down and pass it around, ' +
                    'no more bottles of beer on the wall.\n'
                );
            case 2:
                return (
                    '2 bottles of beer on the wall, ' +
                    '2 bottles of beer.\n' +
                    'Take one down and pass it around, ' +
                    '1 bottle of beer on the wall.\n'
                );
            default:
                return (
                    `${number} bottles of beer on the wall, ` +
                    `${number} bottles of beer.\n` +
                    'Take one down and pass it around, ' +
                    `${number - 1} bottles of beer on the wall.\n`
                );
        }
    }

    verses(starting, ending) {
        const versesArray = this.createVerses(starting, ending);
        return versesArray.join('\n');
    }

    createVerses(starting, ending) {
        const versesArray = [];
        console.log(Number.downTo(starting,ending))
        for (let i = starting; i >= ending; i--) {
            versesArray.push(this.verse(i));

        }
        return versesArray;
    }

    song() {
        return this.verses(99, 0);
    }
}
