import React from "react";
import { Input } from "antd";
import { setPokemons } from "../slices/dataslice";
const {Search}= Input;

const Searcher=({pokemons, distpach})=>{
    const actionSearch=(value)=>{
        
        if (value==="".trim()){
            const pokeStorage= JSON.parse(localStorage.getItem("initialState"));
            value=pokeStorage
            return distpach(setPokemons(value));
                        
          };
        const pokemonsFilter= pokemons.filter(pokemon=>
             pokemon.name.includes(value.toLowerCase())
              
        );
        distpach(setPokemons(pokemonsFilter));
        
        }
    
     function respSearch(value){
          return actionSearch(value) 
    }

    
return (

 <Search placeholder="Buscar..."
    onSearch={respSearch}
    style={{marginBottom:20}}/>
)
}

export default Searcher;