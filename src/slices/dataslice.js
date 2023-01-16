import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getPokemonDetails,getPokemon} from "../api"
import { setLoading } from "./uislice";
const initialState={
    pokemons:[],
}

export const fetchPokemonWithDetails=createAsyncThunk(
   "data/fetchPokemonWithDetails",
    async(_, { dispatch } )=>{
    const pokemonsResp= await getPokemon();
     
    const pokemonsDetails= await Promise.all(
        pokemonsResp.map(pokemon=>getPokemonDetails(pokemon)))
     
    dispatch(setPokemons(pokemonsDetails));
    dispatch(setLoading(false));
    localStorage.setItem("initialState", JSON.stringify(pokemonsDetails));
    }
);   

export const dataSlice=createSlice({
    name:"data",
    initialState,
    reducers:{
        setPokemons:(state,action)=>{              
             state.pokemons=action.payload;
            
        },
        setFavorite: (state, action)=>{
           const currentPokemonindex=state.pokemons.findIndex(pokemon=>{
                return pokemon.id === action.payload
           });
           
           if (currentPokemonindex>=0){
            const isFavorite = state.pokemons[currentPokemonindex].favorite;   
            state.pokemons[currentPokemonindex].favorite= !isFavorite;
           }
                  
        }
        
    
    }
});

export const {setPokemons, setFavorite}= dataSlice.actions;

export default dataSlice.reducer;