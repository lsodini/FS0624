/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

 /*Data types (tipi primitivi): 
string > è un insieme di caratteri (char ascii) tipicamente delimitati da " ".
number > è un numero, può essere intero o decimale.
boolean > è un valore che può essere vero o falso (1 o 0).
null > è una keyword che segnala l'assenza intenzionale di valore di una variabile, viene anche utilizzato per "svuotare" il valore di una var. ed è diverso dal valore numerico 0.
undefined > è una keyword che indica che una variabile è stata dichiarata ma non inizializzata quindi che non ha valore ma che lo avrà in seguito.
*/ 

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 const myName = "Luca"; 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
 */
let a = 12;
let b = 20;
let sum = a + b;
console.log(sum);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

 /*myName = "Sodini";
console.log(myName);
*/
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sub = 4 - x;
console.log(sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
let verify = name1 === name2;
let verify1 = name1 !== name2;
let verify2 = name1.toLowerCase() === name2.toLowerCase();
console.log(verify);
console.log(verify1);
console.log(verify2);
