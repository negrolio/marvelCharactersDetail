import Actions from './Actions'
import { fetchHeroesFromApi } from '../system/heroesService'


export const fetchHeroes = async (dispatch, offset, char) => {
  dispatch({ type: Actions.FETCH_HEROS_LIST })
  const result = await fetchHeroesFromApi(offset, char)
  dispatch({
    type    : char ? Actions.FETCH_HEROS_SEARCH_LIST_SUCCESS : Actions.FETCH_HEROS_LIST_SUCCESS,
    payload : result.data.data.results
  })
}
