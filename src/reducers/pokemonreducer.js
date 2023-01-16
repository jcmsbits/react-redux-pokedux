import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/type";

const initialState=fromJS({
    pokemons:[],
});

export const pokemonsReducer=(state=initialState, action)=>{
          switch (action.type){
            case SET_POKEMONS:
                 return state.setIn(['pokemons'], fromJS(action.payload));      
            case SET_FAVORITE:
             const currentPokemonindex=state.getIn("pokemons").findIndex(pokemon=>{
                     return pokemon.get("id") === action.payload
                })
                if (currentPokemonindex<0){
                    
                    return state
                }
               const isFavorite = state.getIn([
                "pokemons",
                 currentPokemonindex, 
                 "favorite"]);

                return state.setIn(["pokemons", currentPokemonindex, "favorite"], !isFavorite);
            default: return state
        
        }

}