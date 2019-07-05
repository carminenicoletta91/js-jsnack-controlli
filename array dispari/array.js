/*Crea un array vuoto. Chiedi per 6 volte all’utente
di inserire un numero, se è dispari inseriscilo
nell’array*/

// creo arraycontenentenumeri dispari
var arrayNumeriDispari = [];
// creo variabile contenente i numeri inseriti da utente
var inserisci;
var j = 0;
// ciclo per far inserire i numeri all'utente
for ( var i = 1; i <= 6; i++ ){
  inserisci = parseInt( prompt( "Inserisci il N." + i ))
  // setto condizione per far inserire solo numeri all'utente
  if  (inserisci / inserisci != 1){
    alert("!!!!!--Ti ho detto di inserire un numero--!!!!!")
    i--;

  }
  // condizione di inserimento nell'array
  else if( inserisci % 2 != 0 ){
    arrayNumeriDispari[j] = inserisci;
    j++;
  }
  console.log(inserisci);
}
  console.log( "j vale=" + j );
console.log( arrayNumeriDispari )
