// Quiz 1 :  Pass & Fail Using Array Maps 

const { createElement } = require("react")

let Marks = [20, 40, 34, 88, 62]

let Result = Marks.map(m => (m >= 35) ? "Pass" : "Fail")
console.log(Marks, Result)

// Quiz 2 : Only Accept 100 > values

let nums = [100, 55, 450, 125, 876]

let Greater = nums.filter(n => n > 100)
console.log(Greater)

// Quiz 3 : Count items in arrays using reduce

let fruits = ["Apple", "Banana", "Apple", "Mango", "Banana", "Fig"]

let counts = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1
  return count;
}, {})
console.log(counts)

// Quiz 4 : Create a program to check speed limits:

// > Speed < 40 → "Too slow"

// > Speed < 60 → "Normal speed"

// > Speed < 100 → "Fast"

// > Speed ≥ 100 → "Over Speeding!

let speed = 55

if (speed < 40) {
  console.log("Too slow");
} else if (speed < 60) {
  console.log("Normal speed");
} else if (speed < 100) {
  console.log("Fast");
} else {
  console.log("Over Speeding!");
}

// ------------------------------------------------------------------------------------------ 

console.log("Loops in JS")


// Quiz 4 :  Write a for loop that prints the square of numbers from 1 to 5.

// Expected output:
// 1 4 9 16 25

let square = [1, 2, 3, 4, 5]

for (i = 1; i <= square.length; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}

// Quiz 5 : Create a button that prints first 10 even numbers on screen (in a list).

let btn = document.createElement("Button")
btn.textContent = "Click Me !!"
document.body.appendChild(btn);

let para = document.createElement("p")
para.textContent = ""
document.body.appendChild(para);

btn.addEventListener("click", () => {
  let evens = []
  for (i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      evens.push(i)
    }
  }
  para.textContent = `First 10 Even Nos are : ${evens.join(", ")}`;
})




