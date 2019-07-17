// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import { initialState } from './selectors'
import {
  GET_SHOP,
  RECEIVED_SHOP,
  SHOP_NOT_FOUND,
  SHOP_UNAVAILABLE,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVED_SHOP:
      return {
        ...state,
        data: payload.shop.data,
        loading: false,
        error: false,
      }
    case SHOP_NOT_FOUND:
      return {
        ...state,
        error: true,
        error_details: 'not_found',
        loading: false,
      }
    case SHOP_UNAVAILABLE:
      return {
        ...state,
        error: true,
        error_details: 'unavailable',
        loading: false,
      }
    case GET_SHOP:
      return {
        ...state,
        location: payload.location,
        error: false,
        loading: true,
      }
    default:
      return state
  }
}
