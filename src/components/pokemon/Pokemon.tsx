import PokemonCard from "../pokemonCard/PokemonCard"; 
import "./Pokemon.css"
const Pokemon = ({list}:any)=>{

    return(
     <div className="grid gap-4 grid-cols-4 grid-rows-3 pokemonList">   
    {list.map((pokemon:any, index:number)=>{
        return <PokemonCard name={pokemon.name} url={pokemon.url} key={index}/>
    })}
    </div>
    )
}

export default Pokemon
