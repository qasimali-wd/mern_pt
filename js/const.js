const value = 6
if (value%2==0) {
    console.log("This Number is even",value)
}
else if(value%2!==0) {
    console.log("This is odd",value)
    const newNum = value/2+value
    console.log("This is odd after dividing by 2 and adding previous value",newNum)
}
else {
    console.log("ENTER A VALID INPUT")
}

//if else (Used for single condition)
(value > 200
    ? console.log("Number is greater") // ? = if 
    : console .log("Number is less than 20") // : = else
)
                    var score = 85; 
                    if (score >= 90) {
                        console.log("Grade: A");
                    } else if (score >= 80) {
                        console.log("Grade: B");
                    } else if (score >= 70) {
                        console.log("Grade: C");
                    } else if (score >= 60) {
                        console.log("Grade: D");
                    } else {
                        console.log("Grade: F");
                    }

// Today Quiz // 1.
var ed = 6;
console.log(ed % 2 == 0
    ? "Number is even " + ed
    : "Number is odd " + ed
);

//2
var ea = 2
if (ea==0){
    console.log("This number is zero")
}
else if (ea>=0) {
    console.log("This number is positive")
}
else{
    console.log("This number is negative")
}

//3
let num1 = 8;
let num2 = 23;
let num3 = 17;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + ' is the largest number.');
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + ' is the largest number.');
} else {
    console.log(num3 + ' is the largest number.');
}

// let num1 = 5;
// let num2 = 10;
// let num3 = 7;

// console.log(`The largest number is ${Math.max(num1, num2, num3)}.`);

//4
var year=2000
if (year%4==0 && year%100!=0 || year%400==0) {
    console.log(year +'is a leap year')
}
else {
    console.log("it is not a leap year")
}

//5
let grade=prompt("Enter Your Numbers")
if(grade>=90 && grade<=100) {
    console.log("Your grade is A")
}
else if(grade>=80 && grade<=89) {
    console.log("Your grade is B")
}
else if(grade>=70 && grade<=79) {
    console.log("Your Grade is C")
}
else if(grade>=60 && grade<=69){
    console.log ("Your Grade is D")
}
else if(grade<=59) {
    console.log ("Your Grade is F")
}
else(
    console.log("Invalid Grade")
)


let nume1=prompt("Enter number 1")
let nume2=prompt("Enter number 2")
let operator=prompt("Enter any operator")
switch (operator){
    case '+':
        console.log(nume1+nume2)
        break;
    case '-':
        console.log(nume1-nume2)
        break;
    case '/':
        console.log(num1/nume2)
        break;
    case '*':
        console.log(nume1*nume2)
        break;
        default :
        console.log("INVALID OPERATOR")
        break;
}

let numb=prompt("Enter a day from 1 - 7")
switch (numb){
    case '1':
        console.log("Monday")
        break;
    case '2':
        console.log("Tuesday")
        break;  
    case '3':
        console.log("Wednesday")
        break;
        case '4':
            console.log("Thursday")
            break;
            case '5':
                console.log("Friday")
                break;
                case '6':
                    console.log("Saturday")
                    break;
                    case '7':
                        console.log("Sunday")
                        break;
                                            
    default:
        console.log("INALID INPUT")
}

let vow=prompt("Enter a letter")
if (vow == 'a' || vow == 'e' || vow == 'i' || vow == 'o' || vow == 'u') {
    console.log("This is a vowel")
}
else (
    console.log("This is a consonant")
)

let angle1=prompt("Enter angle 1")
let angle2=prompt("Enter angle 2")
let angle3=prompt("Enter angle 3")
if (angle1==angle2 && angle2==angle3 && angle3==angle1) {
    console.log("This is an equilateral triangle")
}
else if (angle1==angle2 || angle2==angle3 || angle3==angle1) {
    console.log("This is an isosceles triangle")
}
else {
    console.log("This is a scalene triangle")
}

let a=prompt("Enter a number")
let b=prompt("Enter a number")
if (a%3==0 && b%5==0) {
    console.log("This is divisible by 3 and 5")
}
else if (a%3==0 && b%3==0) {
    console.log("This is divisible by 3")
}
else if (a%5==0 && b%5==0) {
    console.log("This is divisible by 5")
}
else {
    console.log("This is not divisible by 3 and 5")
}

let ac=prompt("Enter a number")
if (ac%2==0) {
    console.log("This is even")
}

else {
    console.log("This is odd")
}