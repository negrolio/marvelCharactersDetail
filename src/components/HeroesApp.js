import React                 from 'react'
import { connect }           from 'react-redux'
import { fetchHeroes }       from '../actions/heroesActions'
import HeroList              from './heroList/HeroList';
import Background            from '../img/background.jpg';
import Header                from './header/Header';
import LoadSpinner           from './Spinner';
import * as styledComponents from './HeroesAppStyledComponents';

const mapStateToProps = state => ({
  heroesById     : state.heroesById,
  heroesIds      : state.heroesIds,
  fetchingHeroes : state.fetchingHeroes,
})

class HeroesApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      charValue: ''
    }
  }

  componentDidMount(){
    this.fetchHeroes(0)
  }

  fetchHeroes = (offset, char) => {
    fetchHeroes(this.props.dispatch, offset, char)
  }

  fetchHeroesByChar = (char) => {
    if (!char) {
      // in case we delete all character of the search bar, we have to reset the list
      this.fetchHeroes(0, 'a');
      return;
    }
    fetchHeroes(this.props.dispatch, this.props.heroesIds.length, char);
  }

  fetchHeroesFromScroll = () => {
    if (this.state.charValue) return // this is to avoid keep calling on scroll if we made a search
    !this.props.fetchingHeroes && this.fetchHeroes(this.props.heroesIds.length)
  }

  onEntryValue = (value) => {
    this.setState({charValue: value}, this.fetchHeroesByChar(value))
  }

  render() {
    const { EmptyResultContainer, EmptyResultText } = styledComponents;
    const { heroesById, heroesIds, fetchingHeroes } = this.props;
    const height = heroesIds.length ? '100%' : '100vh';
    return (
      <div style={{backgroundImage: `url(${Background})`, height}}>
        <Header searchHandler={this.onEntryValue} />
        <div style={{ position: 'fixed', top: '14px', left: '85%', zIndex: 1 }}>
          { this.props.fetchingHeroes && <LoadSpinner /> }
        </div>
        { !heroesIds.length && !fetchingHeroes && <EmptyResultContainer><EmptyResultText>There are no Heroes with that name</EmptyResultText></EmptyResultContainer> }
        <HeroList heroesById={heroesById} heroesIds={heroesIds} fetch={this.fetchHeroesFromScroll}/>
      </div>
    )
  }
}
export default connect(mapStateToProps)(HeroesApp)
