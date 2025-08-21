// Quiz 1 :  Pass & Fail Using Array Maps 

let Marks = [ 20 , 40 , 34 , 88 , 62 ]

let Result = Marks.map(m => (m>=35) ? "Pass" : "Fail")
console.log(Marks , Result)

// Quiz 2 : Only Accept 100 > values

let nums = [ 100 , 55 , 450 , 125 , 876 ]

let Greater = nums.filter(n => n>100)
console.log(Greater)

// Quiz 3 : Count items in arrays using reduce

let fruits = ["Apple" , "Banana" , "Apple" , "Mango" , "Banana" , "Fig"]

let counts = fruits.reduce((count ,fruit) => {
    count[fruit] = (count[fruit] || 0 ) + 1
    return count;
 },{})
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
