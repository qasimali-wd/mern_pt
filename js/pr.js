//Question 1
let eo=prompt("Enter a number")
if (eo%2==0){
    console.log("Even")
}
else if (eo%2==1){
    console.log("Odd")
}
else {
    console.log("Invalid number")
}

//Question 2
let num1=prompt("Enter number")
if (num1==0){
    console.log("Zero")
}
else if (num1>=1){
    console.log("Positive")
}
else if (num1<=-1){
    console.log("Negative")
}
else {
    console.log("Invalid number")
}

//Question 3
let l1=prompt("Enter a number")
let l2=prompt("Enter a number")
let l3=prompt("Enter a number")

if (l1>l2 && l1>l3){
    console.log("Largest number is: " + l1)
}
else if (l2>l1 && l2>l3){
    console.log("Largest number is: " + l2)
}
else if (l3>l1 && l3>l2){
    console.log("Largest number is: " + l3)
}   

//Question 4
let year=prompt("Enter a year")

if (year%4==0 && year%100!=0 || year%400==0){
    console.log(year + " is a leap year")
}
else {
    console.log("It is not a leap year")
}

//Question 5
let grade=prompt("Enter Your Numbers")
if(grade>=90 && grade<=100){
    console.log("Your grade is A")
}
else if(grade>=80 && grade<=89){
    console.log("Your grade is B")
}
else if(grade>=70 && grade<=79){
    console.log("Your grade is C")
}
else if(grade>=60 && grade<=69){
    console.log("Your grade is D")
}
else if(grade<=60){
    console.log("Your grade is F")
}
else{
    console.log("Invalid Grade")
}

//Question 6
let vowel = prompt("Enter a letter")
if (vowel=='a' || vowel=='e' || vowel=='i' || vowel=='o' || vowel=='u'){
    console.log("Vowel")
}
else{
    console.log("Consonant")
}

//Question 7
let nume1=number(prompt("Enter number 1"))
let nume2=number(prompt("Enter number 2"))
let operator=prompt("Enter any operator")
switch (operator){
    case '+':
        console.log(nume1+nume2)
        break;
    case '-':
        console.log(nume1-nume2)
        break;
    case '/':
        console.log(nume1/nume2)
        break;
    case '*':
        console.log(nume1*nume2)
        break;
        default :
        console.log("INVALID OPERATOR")
        break;
}

//Question 8
let div=prompt("Enter a number")
if (div%5==0 && div%3==0){
    console.log("Divisible by 5 and 3")
}
else if (div%5==0){
    console.log("Divisible by 5")
}
else if (div%3==0){
    console.log("Divisible by 3")
}
 else {
    console.log("Not divisible by 5 or 3")
}

//Question 9
let s1=prompt("Enter side 1")
let s2=prompt("Enter side 2")
let s3=prompt("Enter side 3")
if (s1==s2 && s2==s3){
    console.log("Equilateral Triangle")
}
 else if (s1==s2 || s2==s3 || s1==s3){
    console.log("Isosceles Triangle")
}
else {
    console.log("Scalene Triangle")
}

//Question 10
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
    default :
        console.log("Invalid Day")
        break;
}