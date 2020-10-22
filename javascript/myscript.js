var identita = document.getElementById('nome');

var chilometri = document.getElementById('distanza');

var eta = document.getElementById('age');

var prezzo = chilometri * 0.21;

var percentuale18 = 20

var percentuale65 = 40

var scontoUnder = (percentuale18 / 100) * prezzo

var scontoOver = (percentuale65 / 100) * prezzo



// BOTTONE GENERA BIGLIETTO
var bottone = document.getElementById('genera');

// STAMPA NOME PASSEGGERO
bottone.addEventListener('click',
function() {
  ticket1.innerHTML = identita.value;

} );

// // CALCOLO PREZZO
// function() {
//
//   if (eta < 18){
//   prezzo = (prezzo - scontoUnder );
// } else if (eta > 65) {
//   prezzo = (prezzo - scontoOver );
//
// }
//
// } );

// GENERA NUMERO CARROZZA
bottone.addEventListener('click',
function() {
  ticket3.innerHTML = Math.floor(Math.random() * 101);

} );

// GENERA CODICE
bottone.addEventListener('click',
function() {
  ticket4.innerHTML = Math.floor(Math.random() * 101);

} );

bottone.addEventListener('click',
function() {
  if (eta < 18){
  prezzo = (prezzo - scontoUnder );
} else if (eta > 65) {
  prezzo = (prezzo - scontoOver );

}
} );

// STAMPA PREZZO
bottone.addEventListener('click',
function() {
  ticket5.innerHTML = prezzo;

} );



// FUNZIONI STAMPA RESET
function stampaTicket() {
  document.getElementById('Ticket').style.display = "block";
}

function resetTicket() {
  document.getElementById('Ticket').style.display = "none";
}
