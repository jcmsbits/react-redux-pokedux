import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./type";
import {getPokemonDetails} from "../api/index"
import { ConsoleSqlOutlined } from "@ant-design/icons";
export const setPokemons =(payload)=>{
    return{
        type:SET_POKEMONS,
        payload
    }
};

export const setLoading=(payload)=>({
    type:SET_LOADING,
    payload
    })

export const getPokemonsWithDetails=(pokemons=[])=>async(distpach)=>{
         console.log("Action Creator", pokemons);
         const pokemonsDetails= await Promise.all(
         pokemons.map(pokemon=>getPokemonDetails(pokemon)));
         distpach(setPokemons(pokemonsDetails));
}

export const setFavorite=(payload)=>({
    type:SET_FAVORITE,
    payload
})