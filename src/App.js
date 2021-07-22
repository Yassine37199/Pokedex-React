
import './App.css';
import { Component } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/searchbox/searchbox.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      pokemons : [],
      searchvalue : '',
      typevalue : ''
    }
  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then(
      (res) => res.json()
    ).then(
      (res) => res.results.forEach(pokemon =>
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name).then(
        (poke) => poke.json()
      ).then(
        (poke) =>
        this.setState({
          pokemons : [...this.state.pokemons , poke]
        })
        )
    ))
  }

  handleChange = e =>{
    this.setState({
      searchvalue : e.target.value
    })
  }

  handleTypeChange = e =>{
    console.log(e.target.value)
    this.setState({
      typevalue : e.target.value
    })
  }

  cancelSearch(){
    console.log("done")
    this.setState({
      searchvalue : '',
      typevalue : ''
    })
  }



  render(){
    const {pokemons , typevalue , searchvalue} = this.state
    const filteredPoke = pokemons.filter((poke) => poke.name.toLowerCase().includes(this.state.searchvalue.toLowerCase()))
    const filteredTypePoke = filteredPoke.filter((poke) => 
      this.state.typevalue !== '' ? poke.types[0].type.name === this.state.typevalue : filteredPoke
    )
    const sortedPoke = filteredTypePoke.sort((a , b) => a.id - b.id)
    return (
      <div className="App">
        <h1>Pokédex</h1>
        <SearchBox
          searchvalue = {searchvalue}
          typevalue={typevalue}
          handleChange={e => this.handleChange(e)} 
          handleTypeChange={e => this.handleTypeChange(e)} 
          cancelSearch={() => this.cancelSearch()} />
        <CardList pokemons={sortedPoke} />
      </div>
    );
  }
}

export default App;
