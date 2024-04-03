// #primitive datatype
// get copy of memory vale
// 7 types : String  (call by value), Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol("shailesh") // Unique
const otherId = Symbol("shailesh")

console.log(id === otherId)

// Reference type (non-primitive)
// get direct memory address
// Array, Ojects, Functions

const heros =["ram", "Shyam","mohan"] //Arrays

// Objects
let obj = {
    name:"Shailesh",
    age:32,
}

const myFun = function(){
    console.log(obj)
    
}

const typeCheck = function(){
    console.log( typeof obj)
}

typeCheck()