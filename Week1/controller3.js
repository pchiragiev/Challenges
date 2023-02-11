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
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000`;
    let response = await axios.get(url);
    let mainData = response.data;
    console.log(mainData);

    document.getElementById("header").innerHTML = mainData;
    document.getElementById("hp").innerHTML = mainData;
}

document.getElementById("add").addEventListener("click", poke_data);