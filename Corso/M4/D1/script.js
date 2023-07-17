// 1
function numInt(num, num2){
    return (num === 50 || num2 === 50 || num + num2 === 50) ? true : false
}
console.log(numInt(10, 40));

//2
function removeChar(string, pos){
    return string.slice(0, pos) + string.slice(pos + 1)
}
let remTest = "ciao"
console.log(removeChar(remTest, 0));

//3
function checkNum(num1, num2){
    return (num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100 && num2 >= 40 && num2 <=60 || num2 >= 70 && num2 <= 100) ? true : false
}
console.log(checkNum(100, 100));
//4