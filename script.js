function getRandomQuote() {
    // Wczytanie pliku JSON
    fetch('quotes.json')
      .then(response => response.json()) // Parsowanie odpowiedzi na obiekt JSON
      .then(data => {
        // Pobieramy cytaty z danych
        var quotes = data.cytaty;

        // Sprawdzamy, czy mamy zapisany cytat z dzisiejszego dnia
        var today = new Date().toDateString(); // Pobieramy dzisiejszą datę

        // Sprawdzamy, czy istnieje zapisany cytat na dzisiaj
        var lastDate = localStorage.getItem('lastQuoteDate');
        var lastQuote = localStorage.getItem('quote');

        // Jeśli data się zmieniła, wybieramy nowy cytat
        if (lastDate !== today) {
            // Losowy indeks
            var randomIndex = Math.floor(Math.random() * quotes.length);
            var randomQuote = quotes[randomIndex];

            // Zapisujemy nowy cytat oraz datę
            localStorage.setItem('quote', randomQuote);
            localStorage.setItem('lastQuoteDate', today);

            // Wyświetlamy nowy cytat
            document.getElementById("quote").innerHTML = randomQuote;
        } else {
            // Jeśli cytat na dziś już jest, wyświetlamy zapisany cytat
            document.getElementById("quote").innerHTML = lastQuote;
        }
      })
      .catch(error => console.error('Błąd przy wczytywaniu pliku JSON:', error));
}

// Wywołanie funkcji na stronie
getRandomQuote();
