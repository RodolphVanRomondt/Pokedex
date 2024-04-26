import React from "react";


const Pokecard = ({ name, type, exp, id }) => {
    const logo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <>
            <h2>{name}</h2>
            <img src={logo} alt="Pokemon Logo"/>
            <h3>Type: {type}</h3>
            <h3>EXP: {exp}</h3>
        </>
    );
}


export default Pokecard;