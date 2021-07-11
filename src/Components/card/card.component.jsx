import React from 'react'

import './card.styles.css'


const Card = ({poke}) => {

    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    }
    
    const color = colors[poke.types[0].type.name];

    return (
        <div className="Card" style={{
            backgroundColor : color
        }}>
            <div className="img-container">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} loading="lazy" alt={poke.name} />
            </div>
            <div className="info">
                <span className="number">#{poke.id < 10 ? `00${poke.id}` : poke.id < 100 ? `00${poke.id}` : poke.id}</span>
                <h3 className="name">{poke.name}</h3>
                <small>Type : {poke.types[0].type.name}</small>
            </div>
        </div>
        
    )
}

export default Card