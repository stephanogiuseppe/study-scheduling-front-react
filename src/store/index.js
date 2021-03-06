import createSagaMiddleware from 'redux-saga'
import createStore from './createStore'
import { persistStore } from 'redux-persist'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import persistReducers from './persistReducers'

const sagaMonitor = process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddleware]

const persistedReducers = persistReducers(rootReducer)
const store = createStore(persistedReducers, middlewares)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
