import React from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'




const CardList = ({pokemons}) => {
    
    

    return(
        <div className="Card-list">
            {
                pokemons.map((poke) => 
                <Card key={poke.id} poke={poke} />
                )
            }
        </div>
    )
}


export default CardList



