// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS'

export const PRODUCTS_NOT_FOUND = 'PRODUCTS_NOT_FOUND'
export const PRODUCTS_UNAVAILABLE = 'PRODUCTS_UNAVAILABLE'

export const getProducts = (input) => {
  console.log('getProducts action', { input })
  return ({
    type: GET_PRODUCTS,
    payload: {
      input,
    },
    meta: {
      thunk: true,
    },
  })
}
