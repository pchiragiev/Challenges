/* Created By: Pavel Chiragiev */


// Part 1
const request = new Request('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000');

async function apiAlert () {
    let response = await fetch(request);
    let data = await response.text();
    alert(data);
}

document.getElementById("apiAlert").addEventListener("click", apiAlert);


// Part 2
const poke_data = async () => {
    let pokemon = document.getElementById("inputPokemon").value;
    pokemon = pokemon.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await axios.get(url);
    let mainData = response.data.stats[0]["base_stat"];
    console.log(mainData);

    document.getElementById("header").innerHTML = pokemon;
    document.getElementById("hp").innerHTML = `hp = ${mainData}`;
}

document.getElementById("display").addEventListener("click", poke_data);