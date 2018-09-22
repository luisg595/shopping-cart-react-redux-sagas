import { call, put, take, fork } from 'redux-saga/effects'
import api from '../services/api'
import * as ShoppingCartActions from '../actions/ShoppingCart'

function* loadProductsAsync() {
    while (true) {
        yield take(ShoppingCartActions.loadProducts)
        const httpResponse = yield call(api, 'http://localhost:3001/products')
        yield put(ShoppingCartActions.requestDataProductsSuccess(httpResponse))
    }
}

export default function* rootSagas() {
    yield fork(loadProductsAsync)
}