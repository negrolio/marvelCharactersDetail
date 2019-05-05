import Actions from './Actions'

const initialState = {
  fetchingHeroes : false,
  heroesIds      : [],
  heroesById     : {},
  selectedHero   : undefined
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case Actions.FETCH_HEROS_LIST:
      return { ...state, fetchingHeroes: true }
    case Actions.FETCH_HEROS_LIST_SUCCESS:
      console.log(action.payload)
      const groupById = action.payload.reduce((listById, hero) => {
        listById[hero.id] = hero
        return listById
      }, {})

      console.log(groupById)
      return {
        ...state,
        fetchingHeroes: false,
        heroesIds: action.payload.map((hero) => hero.id),
        heroesById: groupById
      }
    default:
      return state

  }
}

export default rootReducer
