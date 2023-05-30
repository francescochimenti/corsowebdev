//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 10;
let y = 20;

if (x > y) {
  console.log(x);
} else {console.log(y);}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let numero = 20

     if (numero < 5) console.log("Tiny");
else if (numero < 10) console.log("Small");
else if (numero < 15) console.log("Medium");
else if (numero < 20) console.log("Large");
else if(numero >= 20) console.log("Huge");


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if (i !== 3 && i !== 8) {
  console.log(i);
  }
} 

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {console.log(i + ' è pari');
} else {
  console.log(i + ' è dispari');
}
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let first = 1
let second = 7

if (first === 8 || second === 8 || first + second === 8 || first - second === 8 || second - first === 8) {
  console.log(true);
} else {
  console.log(false);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

// let totalShoppingCart = 40

// if (totalShoppingCart >= 50) {

//   console.log("Free shipping:", `${(totalShoppingCart - totalShoppingCart * 0.2)}`);

// } else if (totalShoppingCart < 50) {
//   console.log(`${(totalShoppingCart - totalShoppingCart * 0.2) + 10}`, '(10$ shipping)');
// }

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = 40

if (totalShoppingCart >= 50) {

  console.log("Free shipping:", `${(totalShoppingCart - totalShoppingCart * 0.2)}`);

} else if (totalShoppingCart < 50) {
  console.log(`${(totalShoppingCart - totalShoppingCart * 0.2) + 10}`, '(10$ shipping)');
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = isMale ? "male" : "female";

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i=1; i <= 100; i++){
  if(i % 15 === 0){
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}