// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import { initialState } from './selectors'
import {
  GET_PRODUCTS,
  RECEIVED_PRODUCTS,
  PRODUCTS_NOT_FOUND,
  PRODUCTS_UNAVAILABLE,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVED_PRODUCTS:
      return {
        ...state,
        products: payload.products.data,
        loading: false,
        error: false,
      }
    case PRODUCTS_NOT_FOUND:
      return {
        ...state,
        error: true,
        error_details: 'not_found',
        loading: false,
      }
    case PRODUCTS_UNAVAILABLE:
      return {
        ...state,
        error: true,
        error_details: 'unavailable',
        loading: false,
      }
    case GET_PRODUCTS:
      return {
        ...state,
        shopId: payload.shopId,
        error: false,
        loading: true,
      }
    default:
      return state
  }
}
