import React           from 'react'
import { createStore } from 'redux'
import { Provider }    from 'react-redux'
import rootReducer     from './reducers/rootReducer'
import HeroesApp       from './components/HeroesApp'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <HeroesApp />
    </Provider>
  )
}

export default App
