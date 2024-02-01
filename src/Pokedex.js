import React from "react"
import Pokecard from "./Pokecard"
import "./Pokedex.css"

function Pokedex(props) {
    let msg = ""
    if (props.isWinner) {
        msg = <p className="Pokedex-winner">THIS HAND WINS!</p>;
    }
    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.hand.map(p => (
                    <Pokecard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience} />
                ))}
            </div>
            <h4>Total experience: {props.total}</h4>
            <div>{msg}</div>
        </div>
    )
}

export default Pokedex;