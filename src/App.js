import React           from 'react'
import { createStore } from 'redux'
import { Provider }    from 'react-redux'
import rootReducer     from './rootReducer'
import HeroesApp       from './HeroesApp'

// Create store acepta un reducer que es la funcióm que procesa el estado.
// O también puede recibir un conjunto de reducers que se componen.
const store = createStore(rootReducer)

function App() {
  return (
    // El provider es un Highg Order Components que le pasa el store a sus hijos
    <Provider store={store}>
      {/* Aca va la app completa tuya */}
      <HeroesApp />
    </Provider>
  )
}

export default App
