console.log("hello")
let arr = [5, 4, 3, 88, 5, 44, 9, 0, 3, 94];

const evenNumArray = (arr) => {
    return arr.filter(function(num) { 
        return num % 2 == 0
    })
}

const sqrtNumArray = (arr) => {
    return arr.map(function(num) {
        return num * num
    })
}

const hasProperty = (arr, property) => {
    return arr.filter(obj => obj.hasOwnProperty(property));
}

const sumOfArr = (arr) => {
    return arr.reduce(function(sum, current) { return sum + current })
}

function highLevelFunc (arr, func) {
    return arr.map(func).filter(value => value !== undefined)
}

const a = (el) => {
    return el + 1
}

sqrtNumArray(evenNumArray(arr)).forEach(element => {
  console.log(element)  
})

console.log(sqrtNumArray(arr))

highLevelFunc(arr, a).forEach(element => {
    console.log(element)  
  })

console.log(sumOfArr(arr))

// Сумма квадратов всех четных чисел в заданном массиве

console.log(sumOfArr(sqrtNumArray(evenNumArray(arr))))

// Среднее арифметическое всех чисел, больших заданного значения, в заданном массиве объектов

const value = 20

console.log(sumOfArr(highLevelFunc(arr, function(num) {if(num > value) return num})))