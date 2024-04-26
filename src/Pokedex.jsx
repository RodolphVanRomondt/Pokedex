import React from "react";
import Pokecard from "./Pokecard";
import pokemonList from "../public/pokemonList";
import "./Pokedex.css";


const Pokedex = () => {

    // Shuffle the Array
    pokemonList.sort((a, b) => 0.5 - Math.random());
    
    return (
        <>
            {pokemonList.map(e =>
                <div key={e.id} className="Pokedex">
                    <Pokecard
                        id={e.id}
                        name={e.name}
                        type={e.type}
                        exp={e.base_experience}
                    />
                </div>
            )}
        </>
    );
}


export default Pokedex;