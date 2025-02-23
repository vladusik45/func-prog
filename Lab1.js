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
    return arr.filter(el => el.hasOwnProperty(property));
}

const sumOfArr = (arr) => {
    return arr.reduce(function(sum, current) { return sum + current })
}

function highLevelFunc (arr, func) {
    return arr.map(func).filter(value => value != null)
}

const addOne = (el) => {
    return el + 1
}

// Тест
highLevelFunc(arr, addOne).forEach(element => {
    console.log(element)  
  })

// Сумма квадратов всех четных чисел в заданном массиве

console.log(sumOfArr(sqrtNumArray(evenNumArray(arr))))

// Среднее арифметическое всех чисел, больших заданного значения, в заданном массиве объектов

const value = 10

const property = ""

const averAboveValue = (arr, property, value) => {
    const filtered = arr
        .filter(el[property] > value)
        .map(el => el[property]);

    return filtered.length ? sumOfArr(filtered) / filtered.length : null;
};

console.log(averAboveValue(hasProperty(arr, property), property, value))
