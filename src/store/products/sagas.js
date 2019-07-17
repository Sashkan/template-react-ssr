// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* getProducts(api, shopId) {
  try {
    const products = yield call([api, api.get], `/getProducts/${shopId}`)
    // NOTE https://github.com/diegohaz/arc/wiki/Actions#async-actions
    console.log({ products })
    yield put({ type: 'RECEIVED_PRODUCTS', payload: { products } })
    return true
  } catch (e) {
    // TODO sentry ?
    if (
      e.response.status === 404
    ) {
      yield put({ type: 'PRODUCTS_NOT_FOUND' })
    } else {
      yield put({ type: 'PRODUCTS_UNAVAILABLE' })
    }
    return false
  }
}

export function* watchGetProducts(api, {
  payload,
  // meta,
}) {
  yield call(getProducts, api, payload.shopId)
}

export default function* ({ api, shopId }) {
  console.log('products saga', { shopId })
  yield takeEvery(actions.GET_PRODUCTS, watchGetProducts, api)
  // yield put({ type: 'GET_PRODUCTS', payload: { shopId } })
}
