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