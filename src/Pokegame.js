import React from "react"
// import Pokecard from "./Pokecard"
import Pokedex from "./Pokedex"
// import "./Pokedex.css"

function Pokegame(props) {
    let firstHand = []
    let secondHand = [...props.pokemon]

    while (firstHand.length < secondHand.length) {
        // take a random pokemon from hand 2, add it to hand 1
        let randIdx = Math.floor(Math.random() * secondHand.length);
        let randPokemon = secondHand.splice(randIdx, 1)[0];
        firstHand.push(randPokemon);
    }
    let exp1 = firstHand.reduce((acc, pokemon) => acc + pokemon.base_experience, 0);
    let exp2 = secondHand.reduce((acc, pokemon) => acc + pokemon.base_experience, 0);

    return (
        <>
            <Pokedex hand={firstHand} total={exp1} isWinner={exp1 > exp2} />
            <Pokedex hand={secondHand} total={exp2} isWinner={exp2 > exp1} />
        </>
    )
}

Pokegame.defaultProps = {
    pokemon: [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
};

export default Pokegame