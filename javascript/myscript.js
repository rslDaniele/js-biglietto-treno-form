var identita = document.getElementById('nome');

var chilometri = document.getElementById('distanza');

var eta = document.getElementById('age');


// BOTTONE GENERA BIGLIETTO
var bottone = document.getElementById('genera');

// STAMPA NOME PASSEGGERO
bottone.addEventListener('click', function() {
  ticket1.innerHTML = identita.value;
  ticket2.innerHTML = 
  ticket3.innerHTML = Math.floor(Math.random() * 21);
  ticket4.innerHTML = Math.floor(Math.random() * 101);

  var prezzo = chilometri.value * 0.21;

  var percentuale18 = 20

  var percentuale65 = 40

  var scontoUnder = (percentuale18 / 100) * prezzo

  var scontoOver = (percentuale65 / 100) * prezzo

  ticket5.innerHTML = prezzo;

  document.getElementById('Ticket').style.display = "block";
});

//  RESET
var annulla = document.getElementById('annulla');
annulla.addEventListener('click', function() {
  document.getElementById('Ticket').style.display = "none";
});
