import React from 'react'
import './searchbox.styles.css'

import TextField from '@material-ui/core/TextField';


const SearchBox = ({handleChange}) => {
    
    return (
    <div>
        <TextField id="outlined-basic" label="Search Pokémon" variant="outlined" onChange={handleChange} />
    </div>
    )
}
export default SearchBox