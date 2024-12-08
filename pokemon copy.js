//console.log (pokemon.js)
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => {
    console.log("DATOS: ", data.results[5].name);
    const name = data.results[4].name;
    const newURL = data.results[4].url;
    console.log("DATOS ID5:", data.results[4].url);
    fetch(newURL)
      .then((pokeResponse) => pokeResponse.json())
      .then((pokeData) => {
        console.log("DATOS Completos: ", pokeData);
        console.log("ID: ", pokeData.id);
        //console.log("TYPE: ", pokeData.types[0].type.name);
        //console.log("TYPE: ", pokeData.types[1].type.name);

        for (let power of pokeData.types)
          console.log("PODERES: ", power.type.name);
      });
  });
//return response.json();
// .then(data => console.log(data);
//     .catch(error => {
//         console.error("hubo un problema con la solicitud Fetch"),error);
//     });
