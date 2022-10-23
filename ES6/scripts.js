// // 1 - var, let e const
// var x = 10
// var y = 15

// if (y > 10 ) {
//     var x = 5;
//     console.log(x)
// }

// console.log(x)

// let a = 10
// let b = 15


// if(b > 10) {
//     let a = 5
//     console.log(a)
// }

// console.log(a)

// 2 arrow function

const sum = function sum (a, b) {
    return a+b;
}

const arrowSum = (a,b) => a+b;

const greeting = (nome) => {
    if(nome){
        return "Olá" + nome;
    }else{
        return "Olá"
    }
}

console.log(greeting())