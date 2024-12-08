fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.results[1]);
    console.log(data.results[1].url);
  });
