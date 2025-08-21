console.log("A string is a sequence of characters used to represent text.")


// 1. convert ----> Number

let value = "34"

console.log(typeof(value))

console.log(Number(value)+34) // use number() function


// 2. How many characters present in a string :

const str = "Hello World"

console.log(str+ " : " +str.length) // we can't use length() [ is not a function ]

console.log(` str[11] = str[str.length-1]` )

// console.log(str[10]) = console.log(str[str.length-1])

console.log("counting of characters is not based on index [like starting with 0]") // Output is 11 [ 10 char + 1 space ] 


// 3. Strings Methods 

let z = "Ramayan"

console.log(z.length)                       
console.log(z.toUpperCase())               
console.log(z.toLowerCase())               
console.log(z.indexOf("y"))                 
console.log(z.lastIndexOf("a"))             
console.log(z.charAt(8))                    // Blank Value
console.log(z.charAt(4))
console.log(z.includes("n"))
console.log(z.startsWith("r"))
console.log(z.endsWith("a"))

// 4. Slicing, Replacing, and Splitting 

let r = "Ravan - The King of Lanka"

console.log(r.slice(0,3))
console.log(r.slice(1,6))
console.log(r.substring(1,4))
console.log(r.split(" "))                // [ 'Ravan', '-', 'The', 'King', 'of', 'Lanka' ]
console.log(r.split("   "))             //  [ 'Ravan - The King of Lanka' ]
console.log(r.split(""))               //  [ 'R', 'a', 'v', 'a', 'n', ' ', '-', ' ', 'T', 'h', 'e', ' ', 'K', 'i', 'n', 'g', ' ', 'o', 'f', ' ', 'L', 'a', 'n', 'k', 'a' ]
console.log(r.replace("-" , ":"))

console.log(r)                        // Strings are immutable

// 5. Template literals [ backtiks ]

let user = "Sarvesh";
let greet = `Hello, ${user}!`;
console.log(greet); // Hello, Sarvesh!
