const firstItem = 1
const responseSize = 100

const numberFizz = 3
const FIZZ = "Fizz"

const numberBuzz = 5
const BUZZ = "Buzz"


export function fizzBuzz(){
    const result = []
    for(let i=firstItem; i< firstItem + responseSize; i++){
        result.push(parser(i))
    }
    
    return result
}

function parser(number){
    if(writeFizz(number) && writeBuzz(number)){
        return FIZZ+BUZZ
    }
    if(writeFizz(number)){
        return FIZZ
    }
    if(writeBuzz(number)){
       return BUZZ
    }

    return number
}

function writeFizz(number){
    return write(number, numberFizz)
}

function writeBuzz(number){
    return write(number, numberBuzz)
}

function write(number, conversion){
    return divisibleBy(number, conversion) || contains(number,conversion)
}

function divisibleBy (number, divisor){
    return number % divisor === 0
}


function contains(number, target){
    const numberAsArray = number.toString().split("")
    return numberAsArray.includes(target.toString())
}
