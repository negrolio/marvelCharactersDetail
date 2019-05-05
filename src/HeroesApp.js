import React           from 'react'
import { connect }     from 'react-redux'
import { fetchHeroes } from './heroesActions'

const mapStateToProps = state => ({
  heroesById     : state.heroesById,
  heroesIds      : state.heroesIds,
  fetchingHeroes : state.fetchingHeroes
})

class HeroesApp extends React.Component {
  fetchHeroes = () => {
    fetchHeroes(this.props.dispatch)
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchHeroes}>FETCH HEROES</button>
        <div>
          { this.props.fetchingHeroes && <div> LOADING.... </div> }
          { this.props.heroesIds.map(id => (
            <div> {this.props.heroesById[id].name} </div>
          ))}
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps)(HeroesApp)
