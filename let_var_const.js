console.log("var hoisting")

// console.log(x) [ OP : Reference Error : x is not defined ]
x = 5
console.log("Value in X is : "+x)

console.log("let in Block - scope")

if(true){
    let Name = prompt("Enter Your Name") // Prompt is Browser Property
    console.log("Your Name is :" +Name) // Output is showed in console not terminal 
}
// console.log(Name); [ OP : Name is not defined (outside scope variable)]

console.log("Const in JS - Immutable")

const PI = 3.14;
console.log(PI)

// const PI = 4.5 [ 'PI' has already been declared ]

console.log("Let can change")

let y = 34
if(y=34){
    console.log("You are right")
}

y = 46 // we can change or assign new value to 'y'
console.log(y)

