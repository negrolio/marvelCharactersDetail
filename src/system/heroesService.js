import axios from 'axios'

const apiKey = 'a37a673b5d1fcfe52070589ee07826fe&ts=123456789123455&hash=1d6c019b324b3cd2044501fadd454a3e'
const limit = 20;
const urlBase = `https://gateway.marvel.com/v1/public/characters?apikey=${apiKey}&limit=${limit}`

/**
 * @description  call to the service with the default url
 * @param offset determinate where the list have to start
 * @param char   is the character to make the search with,
 *               if there is a char, plus the 'nameStartsWith' paramether to the query
 * @return       Object
*/
export const fetchHeroesFromApi = async ( offset, char ) => {
  try {
    const result = !char ? 
      await axios.get(`${urlBase}&offset=${offset}`) :
      await axios.get(`${urlBase}&nameStartsWith=${char}&offset=${offset}`)
    return result
  } catch (e) {
    console.log('err when call the service', e);
    throw e
  }
}
