const format = (number) => {
    return new Array(12 - number.toString().length).fill('0').join('') + number
}

console.log(format(10))
console.log(format(111))
console.log(format(239428))