import React from 'react'
import './searchbox.styles.css'

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { Types } from '../Types.data';


const SearchBox = ({handleChange , handleTypeChange , cancelSearch , searchvalue , typevalue}) => {
    
    return (
    <div className="search-group">
        <TextField id="outlined-basic" label="Search Pokémon" value={searchvalue} variant="outlined" onChange={handleChange} />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Search Pokémon"
          variant="outlined"
          onChange={handleTypeChange}
          value={typevalue}
        >
        <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          {
              Object.keys(Types).map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
              ))
          }
        </Select>

        <Button variant="outlined" color="secondary" onClick={cancelSearch}> Cancel </Button>
    </div>
    )
}
export default SearchBox