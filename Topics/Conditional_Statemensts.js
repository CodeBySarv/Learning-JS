console.log("Conditionals are decision-making statements that run different code based on true/false conditions.")

// 1. if / else statements : Run code based on condition

console.log("Even or Odd - Using if-else condition")                      

let num = 6                                

if (num % 2 === 0){
    console.log(num+ " : is Even")
}
else{
    console.log(num+ " : is odd")
}


// 2. Else-If Ladder (a.k.a. if-else-if ladder) : test multiple conditions one after another. 

console.log("Grade System - Using Else-if ladder")

let marks = 67

if ( marks < 0 || marks > 100 || isNaN(marks)){
    console.log("Invalid Number for Marks")
}
else if (marks >= 90 ){
    console.log("Grade : A")
}
else if (marks >= 75){
    console.log("Grade : B")
}
else if (marks >= 60){
    console.log("Grade : C")
}
else if (marks >= 40){
    console.log("Grade : D")
}
else {
    console.log("Fail")
}


// 3. Switch Statement - compare a single value against multiple fixed values and execute matching case blocks. 

console.log("Day of the Week - Using switch statement")

let day = 4

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("Lazy Day - Sunday")
        break;
}

