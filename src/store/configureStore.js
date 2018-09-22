import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as reducer from '../reducers/shoppingCart'
import rootSagas from '../sagas'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(combineReducers(
        { cart: reducer.cart, products: reducer.products }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
        applyMiddleware(sagaMiddleware)
    )
    
    store.runSaga = sagaMiddleware.run(rootSagas)
    return store
}