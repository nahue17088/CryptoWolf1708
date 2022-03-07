//fetch('https://static.coinpaper.io/api/coins/btc-bitcoin.json')
//.then(response => response.json)
//.then(data => {

//});

https://static.coinpaper.io/api/coins/btc-bitcoin.json
async function fetchJSON() {
    const response = await fetch('/movies');
    const movies = await response.json();
    return movies;
  }
  fetchJSON().then(movies => {
    movies;
  });