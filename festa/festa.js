var invitatiFesta=[
  "alessandro",
  "filippo",
  "marco",
  "simone"
];
var nomeUtente,invitato = "non invitato";
nomeUtente=prompt("Inserisci il tuo nome");
for( var i=0; i< invitatiFesta.length;i++){
  if( nomeUtente == invitatiFesta[i]){
    invitato = "invitato";
  }

}
console.log(invitato);
