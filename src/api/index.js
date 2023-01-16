import axios from "axios"

export const getPokemon=()=>{

    return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(resp=>resp.data.results)
    .catch(err=>console.log(err));
}

export const getPokemonDetails =(pokemon)=>{
    return axios
    .get(pokemon.url)
    .then(resp=>resp.data)
    .catch(err=>console.log(err));


}