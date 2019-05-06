import axios from 'axios'
import Actions from './Actions'

const apiKey = 'a37a673b5d1fcfe52070589ee07826fe&ts=123456789123455&hash=1d6c019b324b3cd2044501fadd454a3e'

export const fetchHeroes = async (dispatch, limit, offset) => {
  dispatch({ type: Actions.FETCH_HEROS_LIST })
  const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?apikey=${apiKey}&limit=${limit}&offset=${offset}`)
  //console.log(result.data.data.results)
  dispatch({
    type    : Actions.FETCH_HEROS_LIST_SUCCESS,
    payload : result.data.data.results
  })
}

export const fetchHeroesByChar = async (dispatch, char, limit, offset) => {
  dispatch({ type: Actions.FETCH_HEROS_SEARCH_LIST })
  const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?apikey=${apiKey}&nameStartsWith=${char}&limit=${limit}&offset=${offset}`)
  dispatch({
    type   : Actions.FETCH_HEROS_SEARCH_LIST_SUCCESS,
    payload: result.data.data.results
  })
}