console.log("Arrays are used to store multiple values in a single variable.")

// 1. Arrays 

const shopping = [ "Clothes" , "Apperal" , "Sports Items" , [ "Jersey" , "Books" ]]

console.log(shopping)
console.log(shopping.length)  // 4
console.log(shopping[2])     // Sports Item (starting  with index 0 ---> )
console.log(shopping[3][1])  // Books


// 2. Arrays Functions

let Hera_Pheri = [ "Shayam" , "Babu Rao" , "Totla Seth" , "Anuradha" , "Kaliya" ]

console.log(Hera_Pheri.push("Kachra Seth"))     // Showing Array Length --->  6 
console.log(Hera_Pheri)                         // [ "Shayam" , "Babu Rao" , "Totla Seth" , "Anuradha" , "Kaliya" , "Kachra Seth" ]

console.log(Hera_Pheri.pop())                   // Remove Last Element
console.log(Hera_Pheri)  

console.log(Hera_Pheri.shift())                 // Remove First Element
console.log(Hera_Pheri)  

console.log(Hera_Pheri.unshift("Raaju"))        // Add First Element
console.log(Hera_Pheri)

let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 4)); // index 1 to 3 
console.log(arr)

console.log(arr.splice(1 , 2 , 6)) // from index - 1 , delete 2 - [ 2 , 3 ] , insert - 6
console.log(arr)

console.log(arr.includes(3)) // False [ 5 - True ]
console.log(arr)

console.log(arr.indexOf(3)) // Shows - 1 [ Value is not Available ]
console.log(arr)

console.log(arr.lastIndexOf(4))
console.log(arr)

console.log(arr.slice(1,3)) // Does not modify original Array 
console.log(arr)

let words = [ "Hello" , "World" ]  // convert Array to String
console.log(words.join(" ")) 
console.log(words)                 // Doesn't modify original Array

let arr1 = [20 , 4 , 8 , 100]

console.log(arr1.sort())           // [ 100, 20, 4, 8 ] ---->  taking as string 1 [ Like A , B , C ... ( 1, 2 ..) ]
console.log(arr1.reverse())

console.log(arr1.sort((a, b) => a - b))  // [ 4, 8, 20, 100 ] ---> ( 20 -4 = 16 : positive so 20 comes after 4 .. so on )
console.log(arr1.sort((a, b) => b - a))  // [ 100, 20, 8, 4 ]

console.log("Slice , indexof , CharAt , includes , startswith , endswith : Doesn't modify original Arrays")


// 3. Map / Filter / Reduce 

//  Map() : Returns a new array after applying a function to each element of the original array. 

const nums = [ 1, 2, 3, 4, 5 ]

const square = nums.map(num => num*num)         // Square of Numbers
console.log(square)

// Filter() : Returns a new array containing only the elements that pass a test (return true from a function).

const DivisonBy2 = nums.filter(n => n%2 == 0)   // Pick Only What You Need
console.log(DivisonBy2)     

// reduce() : reduces an array to a single value by applying a function to each element (from left to right).

const sum = nums.reduce( (start , next) => start + next , 0) // initially takes 0 as start 
console.log(sum)




console.log("")





