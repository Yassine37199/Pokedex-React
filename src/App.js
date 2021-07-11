
import './App.css';
import { Component } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/searchbox/searchbox.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      pokemons : [],
      searchvalue : ''
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

  handleChange(e){
    this.setState({
      searchvalue : e.target.value
    })
  }

  render(){
    const {pokemons} = this.state
    const filteredPoke = pokemons.filter((poke) => poke.name.toLowerCase().includes(this.state.searchvalue.toLowerCase()))
    const sortedPoke = filteredPoke.sort((a , b) => a.id - b.id)
    return (
      <div className="App">
        <h1>Pokédex</h1>
        <SearchBox handleChange={e => this.handleChange(e)} />
        <CardList pokemons={sortedPoke} />
      </div>
    );
  }
}

export default App;
