/*Crea un array vuoto. Chiedi per 6 volte all’utente
di inserire un numero, se è dispari inseriscilo
nell’array*/

// creo arraycontenentenumeri dispari
var arrayNumeriDispari = [];
// creo variabile contenente i numeri inseriti da utente
var inserisci;
var j=0;
// ciclo per far inserire i numeri all'utente
for (var i = 1 ; i <= 6; i++){
  inserisci =parseInt(prompt("Inserisci il N." + i))
  console.log(inserisci);
  // condizione di inserimento nell'array
  if(inserisci % 2 !=0){
    arrayNumeriDispari[j]= inserisci;
    j++;
  }

}
  console.log("j vale=" + j);
console.log(arrayNumeriDispari)
