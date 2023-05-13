import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import fakedata from "./data/fakeData";
import Pokemon from './components/pokemon/Pokemon';
import Navbar from './components/navbar/Navbar';
import useFetch from './customHooks/useFetchData';
function App() {
  const fakeData = [...fakedata.results.slice(0,20)]
  const { data, isLoading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');

  if (isLoading) {
    return <div>Loading...</div>;
  }
console.log(data)
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <div className='App'>
      <Navbar/>
     <Pokemon list ={data}/>
    </div>
  );
}

export default App;
