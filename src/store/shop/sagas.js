// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* getShop(api, location) {
  try {
    const { shop_id: shopId } = yield call([api, api.get], `/getOneId/${location}`)
    const shop = yield call([api, api.get], `/getOneShop/${shopId}`)
    // NOTE https://github.com/diegohaz/arc/wiki/Actions#async-actions
    yield put({ type: 'RECEIVED_SHOP', payload: { shop } })
    yield put({ type: 'GET_PRODUCTS', payload: { shopId } })
    return true
  } catch (e) {
    // TODO sentry ?
    if (
      e.response.status === 404
    ) {
      yield put({ type: 'SHOP_NOT_FOUND' })
    } else {
      yield put({ type: 'SHOP_UNAVAILABLE' })
    }
    return false
  }
}

export function* watchGetShop(api, {
  payload,
  // meta,
}) {
  yield call(getShop, api, payload.location)
}

export default function* ({ api, location }) {
  console.log('shop saga', { location })
  yield takeEvery(actions.GET_SHOP, watchGetShop, api)
  yield put({ type: 'GET_SHOP', payload: { location } })
}
