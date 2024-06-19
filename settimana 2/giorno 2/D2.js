/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 10;
let verify = a > b ? "a è maggiore di b" : "b è maggiore di a";
console.log(verify)
 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 7;
let verify2 = c !== 5 ? "not equal" : "equal";
console.log(verify2)

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let d = 10;
let verify3;
if (d % 5 === 0) {
  verify3 = "divisibile per 5"
}
console.log(verify3)
else { 
  verify3 = "non divisibile per 5"
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let e = 5;
let f = 3;
if (e === 8 || f === 8 || e + f === 8 || e - f === 8 || f - e === 8) {
  console.log("uno dei due numeri è 8 o la loro somma/sottrazione è 8")
}
else {
  console.log("nessuna delle condizioni è verificata")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 55;
if (totalShoppingCart > 50) {
  console.log("spedizione gratuita")
} else {console.log("spedizione 10 euro")}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart2 = 20/100 * totalShoppingCart;
if (totalShoppingCart2 > 50) {
  console.log("spedizione gratuita")
} else {console.log("spedizione 10 euro")}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let g = 11;
let h = 5;
let i = 7;
let max, mid, min;

if (g >= h && g >= i) {
  max = g;
  if (h >= i) {
      mid = h;
      min = i;
  } else {
      mid = i;
      min = h;
  }
} else if (h >= g && h >= i) {
  max = h;
  if (g >= i) {
      mid = g;
      min = i;
  } else {
      mid = i;
      min = g;
  }
} else {
  max = i;
  if (g >= h) {
      mid = g;
      min = h;
  } else {
      mid = h;
      min = g;
  }
}
console.log(max, mid, min)

let arr = [10, 7, 9, 5, 8];
arr.sort((a, b) => b - a);
console.log(arr);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let j = '6';
let verify5 = typeof j === "number" ? "è un numero" : "non è un numero";
console.log(verify5)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let k = 8;
if (k % 2 === 0) {console.log("pari")} else {console.log("dispari")}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4;
if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[me.skills.length - 1];
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array = [undefined];
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array[array.length - 1] = 100;
console.log(array)
