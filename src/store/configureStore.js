import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as reducer from '../reducers/shoppingCart'
import rootSagas from '../sagas'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

    const store = createStore(combineReducers(
        { cart: reducer.cart, products: reducer.products }),
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    )
    
    store.runSaga = sagaMiddleware.run(rootSagas)
    return store
}