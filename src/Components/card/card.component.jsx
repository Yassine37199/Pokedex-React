import React from 'react'
import { Types } from '../Types.data';

import './card.styles.css'


const Card = ({poke}) => {

    
    const color = Types[poke.types[0].type.name];

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