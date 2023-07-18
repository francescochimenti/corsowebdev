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
function checkName(string){
    return (string.toLowerCase().startsWith("los") || string.toLowerCase().startsWith("new")) ? string : false
}
console.log(checkName("New York"));

//5
myArr = [10,20,30,50,10,50,60,70,100,1]
function myArrCalc(arr){
    let somma = 0;
    for (let i = 0; i < arr.length; i++){
        somma += arr[i]
    }
    return somma
}
console.log(myArrCalc(myArr));

//6
function checkArr(arr){
    for(let num of arr){
        if (num === 1 || num === 3) {
            return false
        }
    }
    return true
}
console.log(checkArr(myArr));

//7
function angleChecker(num){
    if(num < 90){
        console.log("Angolo acuto");
    } else if (num >= 91 && num <= 179){
        console.log("Angolo ottuso");
    } else if (num === 90){
        console.log("Angolo retto");
    } else {
        console.log("Piatto");
    }
}
angleChecker(100)

//8
function acronimo(string) {
    let lettere = string.split(' ')
    let myAcr = ''

    for (let lettera of lettere) {
        myAcr += lettera[0].toUpperCase();
    }
    return myAcr
}
console.log(acronimo("ciao come va?"));

