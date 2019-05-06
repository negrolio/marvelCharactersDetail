import React                              from 'react'
import { connect }                        from 'react-redux'
import { fetchHeroes, fetchHeroesByChar } from '../actions/heroesActions'
import HeroList                           from './HeroList';
import Background                         from '../img/background.jpg';
import Header                             from './Header';
import styled, {keyframes}                from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const LoadSpinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  left: 46%;
  top: 42%;
  position: fixed;
  z-index: 1

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s infinite;
  }
`;

const mapStateToProps = state => ({
  heroesById     : state.heroesById,
  heroesIds      : state.heroesIds,
  fetchingHeroes : state.fetchingHeroes,
  limit          : state.limit
})

class HeroesApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      charValue: ''
    }
  }

  componentDidMount(){
    this.fetchHeroes(this.props.limit, 0)
  }
  fetchHeroes = (limit, offset) => {
    fetchHeroes(this.props.dispatch, limit, offset)
  }

  fetchHeroesByChar = (char) => {
    if (!char) {
      fetchHeroesByChar(this.props.dispatch, 'a', this.props.limit, 0);
      this.fetchHeroes(0, 0);
      return;
    }
    fetchHeroesByChar(this.props.dispatch, char, this.props.limit, this.props.heroesIds.length);
  }

  fetchHeroesFromScroll = () => {
    if (this.state.charValue) return
    !this.props.fetchingHeroes && this.fetchHeroes(this.props.limit, this.props.heroesIds.length)
  }

  onEntryValue = (value) => {
    this.setState({charValue: value}, this.fetchHeroesByChar(value))
  }

  render() {
    const { heroesById, heroesIds } = this.props;
    const height = heroesIds.length ? '100%' : '100vh';
    return (
      <div style={{backgroundImage: `url(${Background})`, height}}>
        <Header searchHandler={this.onEntryValue} />
        { this.props.fetchingHeroes && <LoadSpinner /> }
        <HeroList heroesById={heroesById} heroesIds={heroesIds} fetch={this.fetchHeroesFromScroll}/>
      </div>
    )
  }
}
export default connect(mapStateToProps)(HeroesApp)
