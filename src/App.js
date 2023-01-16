import {  useSelector, useDispatch, shallowEqual,  } from 'react-redux';
import './App.css';
import Searcher from './components/Searcher';
import { Col, Spin } from 'antd';
import PokemonList from './components/PokemonList';
import logo from "./statics/logo.svg";
import { useEffect } from 'react';
import { fetchPokemonWithDetails } from './slices/dataslice';

function App() {
  const  loading = useSelector(state=>state.ui.loading); 
  const  pokemons= useSelector((state)=>state.data.pokemons,shallowEqual);
   
  const distpach= useDispatch();
  useEffect(()=>{
      distpach(fetchPokemonWithDetails());
      
  }, []);

 return (
       <div className="App">
      <Col span={4} offset={8}>
        <img src={logo} alt="Logo"/>
     </Col>
        <Col span={8} offset={8}>
       <Searcher pokemons={pokemons} distpach={distpach}/>
       </Col>      
      
      {loading?
      <Col offset={12}>
      <Spin spinning size='large'/>
      </Col>:
      <PokemonList pokemons={pokemons} />
      }
     </div>
  );
}
export default App;
