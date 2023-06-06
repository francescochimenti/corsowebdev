/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2){
    let result;

    if(num1 !== num2){
        result = num1 + num2;
    } else if(num1 === num2){
        result = (num1 + num2) * 3;
    }
    
    return result;
}

console.log(crazySum(2,2));
console.log(crazySum(3,10));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num){
    if(num >= 20 && num <= 100 || num === 400){
        return true;
    } else{
        return false;
    }
}

console.log(boundary(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('EPICODE'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(str){
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' '); 
}

console.log(upperFirst('epicode'));
console.log(upperFirst('hello world'));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
    let randomNumbers = []
    for(let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 10));
    }
    return randomNumbers;
}

console.log(giveMeRandom(10));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
    return l1 * l2
}
console.log(area(10,10));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(n) {
    let diff = Math.abs(n - 19);
    if (diff > 19) {
        return diff * 3; 
    } else {
        return diff;
    }
}

console.log(crazyDiff(50));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str){
    if (str.startsWith("code")){
        return str;
    } else {
        return "code " + str;
    }
}

console.log(codify("ciao"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(numero){
    if(numero % 7 === 0 || numero % 3 === 0){
        return true
    } else {
        return false
    }
}

console.log(check3and7(1));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(str){
    return  str.slice(1, -1)
}

console.log(cutString("test"));