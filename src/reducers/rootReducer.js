import Actions from '../actions/Actions'

const initialState = {
  fetchingHeroes      : false,
  fetchingSearchHeroes: false,
  heroesIds           : [],
  heroesById          : {},
  limit               : 20
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case Actions.FETCH_HEROS_LIST:
      return { ...state, fetchingHeroes: true }

    case Actions.FETCH_HEROS_LIST_SUCCESS:
      const groupById = action.payload.reduce((listById, hero) => {
        listById[hero.id] = hero
        return listById
      }, {})

      return {
        ...state,
        fetchingHeroes: false,
        heroesIds: [...state.heroesIds, ...action.payload.map((hero) => hero.id)],
        heroesById:{...state.heroesById, ...groupById},
        limit: 20
      }
    case Actions.FETCH_HEROS_SEARCH_LIST:
      return {...state, fetchingSearchHeroes: true}

    case Actions.FETCH_HEROS_SEARCH_LIST_SUCCESS:
      const groupSearchById = action.payload.reduce((listById, hero) => {
        listById[hero.id] = hero
        return listById
      }, {})

      return {
        ...state,
        fetchingHeroes: false,
        heroesIds: action.payload.map((hero) => hero.id),
        heroesById: groupSearchById,
        limit: 20
      }
    default:
      return state

  }
}

export default rootReducer
