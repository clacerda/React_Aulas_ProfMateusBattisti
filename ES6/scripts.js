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

// const sum = function sum (a, b) {
//     return a+b;
// }

// const arrowSum = (a,b) => a+b;

// const greeting = (nome) => {
//     if(nome){
//         return "Olá" + nome;
//     }else{
//         return "Olá"
//     }
// }

//console.log(greeting())




// 3 filtes
// const arr = [1,2,3,4,5]

// const highNumbers = arr.filter((n) => {
//         if (n >= 3) {
//             return n;
//         }
// })
 

// const users = [
//     { name: "claudio", avaliable: true},
//     { name: "andrea", avaliable: true}, 
//     { name: "odin", avaliable: false},
//     { name: "diana", avaliable: false},
// ]

// const avaliableUsers = users.filter((user) => user.avaliable)
// const notAvaliableUsers = users.filter((user) => !user.avaliable)

// console.log(avaliableUsers)


//4 MAP
const products = [
    {name: 'camise', price: 10.00, category:'roupas'},
    {name: 'chaleira', price: 40.00, category:'eletro'},
    {name: 'fogão', price: 400.00, category:'eletro'},
    {name: 'cacalça jeans ise', price: 60.00, category:'roupas'},
]

products.map((product) => {
    if (product.category === 'roupas') {
        product.onSale = 'true'
    }
})

console.log(products)