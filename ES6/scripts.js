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


// //4 MAP
// const products = [
//     {name: 'camise', price: 10.00, category:'roupas'},
//     {name: 'chaleira', price: 40.00, category:'eletro'},
//     {name: 'fogão', price: 400.00, category:'eletro'},
//     {name: 'cacalça jeans ise', price: 60.00, category:'roupas'},
// ]

// products.map((product) => {
//     if (product.category === 'roupas') {
//         product.onSale = 'true'
//     }
// })

// console.log(products)


// // 5 template literals
// const userName = "Claudio"
// const age = 30

// console.log(`O nome do usuário é: ${userName} e ele tem ${age} anos.` )



// 6 Destructuring

// const frutis = ["mação", "laranja", "mamão"]

// const [f1, f2, f3] = frutis


// const productDetails = {
//         name: "mouse",
//         price: 38.00,
//         category: "periféricos",
//         color: "cinza"
// }

// const {name: productName, price, category: productCategory, color } = productDetails

// console.log(`O nome do produto é ${productName}, custa R$${price}, e pertence a categoria ${productCategory}`)


// 7 SPREAD OPERATOR

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]
console.log(a3)


const a4 = [0, ...a1, 4]
console.log(a4)


const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const othersInfos = {km: 100000, price:49000}

const car = {...carName, ...carBrand, ...othersInfos}
console.log(car)