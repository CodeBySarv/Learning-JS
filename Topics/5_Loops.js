// LOOPS in JavaScript --- for, while, do-while, for-of, forEach

// 1. for loop - A for loop is used to repeat a block of code a specific number of times.

// Quiz : Sum of First 10 Natural Numbers

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum is :" + sum)

// Quiz : prints first 10 even numbers on screen

let even = []

for (let i = 1; i <= 10; i++) {
    even.push(i * 2);
}

console.log(even)

// Quiz : Add 5 items in list

let ul = document.createElement("ul")
ul.setAttribute("id" , "list")
document.body.appendChild(ul)

for(i=1 ; i<=5 ; i++){
    document.getElementById("list").innerHTML += `<li>Item ${i}</li>`
}

// ============================================================================================================

// 2. While Loop - The while loop repeats code as long as a condition is true. 

// Quiz : Count from 1 to 5 

let i = 1

while (i < 6) {
    console.log("count i : ", i)
    i++;
}

// Quiz : Find Factorial Of Number

let num = prompt("Enter a Number to Find a Factorial")
num = Number(num)               // Convert it to number

if (num < 0 || isNaN(num)) {
    console.log("Enter a Valid Number !!!")
}

let InputNum = num              // For Storing User's Number ( Ex : 5 )
let fact = 1;

while (num > 0) {
    fact *= num;
    num--;                      // decreasing Number frequently : num.. -> 5 -> 4 -> 3 -> 2 -> 1 -> 0
}

console.log(`Factorial of ${InputNum} is : ${fact}`)     // For Printing Result 

// Quiz : Make a button that keeps asking for a number until the user enters a number greater than 100

//        Then alert → "You entered: X"

let btn = document.createElement("button")
btn.textContent = "Click Me"
document.body.appendChild(btn)

let digit;

while (true) {
    btn.onclick = null;
    digit = Number(prompt("Enter a Number Greater than 100 :"))

    if (digit > 100) {
        alert(`You Entered : ${digit} Yayyyy...`)
        break;
    }
}

// ============================================================================================================

// 3. do - while loop : like a while loop, but it always runs at least once, even if the condition is false.

// Quiz : Add numbers until 0 is entered 

let total = 0
let num1;

do {
    num1 = parseInt(prompt("Enter a Numbers to add (0 to stop ...)"))
    total += num1
} while (num1 !== 0)

console.log("Total Number is : ", total)

// Quiz : Print a number 1 to 5 

let s = 1

do {
    console.log(s)
    s++
} while (s < 6)

// Quiz : Make a button that asks user for a password using prompt()

// Keep asking until password equals "password" ----> Then alert "Welcome!"

let username = prompt("Enter a Username ...")

let pin;

do {
    pin = prompt("Enter a Password")
} while (pin !== "password")

alert(`Welcome ${username}...`)

// ==========================================================================================================

// 4. for...of loop : used to iterate over iterable objects like - Arrays , Strings , Maps , Sets , NodeLists

// Quiz : Print Colors 

let colors = [ Red , Green , Blue , Purple , Violet ]

for ( let color of colors){
    console.log(color)
}

// Quiz : Sum of digits in a number - 12345

let Num = 12345;
let Sum = 0;

for (let digit of String(Num)) {
  Sum += parseInt(digit);
}

console.log("Sum of digits:", Sum);

// ==============================================================================================

// 5. for...in loop : used to iterate over the enumerable properties (keys) of an object.

// Quiz : Print object value 

let object = { name : "Sarv" , age : 18 , isTrue : true}

for ( let obj in object){
    console.log(obj +": " +object[obj])
}

// Quiz : Count letters in a word !

let word = "success"

let count = {}

for(let index in word){
    let letter = word[index]
    count[letter] = (count[letter] || 0) + 1
}

for (letter in count){
    console.log(`${letter} appears ${count[letter]} times !`)
}

// =======================================================================================