function newQuote() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let quote = data[Math.floor(Math.random() * data.length)];
      document.getElementById("quote").innerHTML = quote.text;
      document.getElementById("author").innerHTML = quote.author;
    });
}

newQuote();
    