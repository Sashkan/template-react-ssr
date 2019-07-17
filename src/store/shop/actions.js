// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
export const GET_SHOP = 'GET_SHOP'
export const RECEIVED_SHOP = 'RECEIVED_SHOP'

export const SHOP_NOT_FOUND = 'SHOP_NOT_FOUND'
export const SHOP_UNAVAILABLE = 'SHOP_UNAVAILABLE'

export const getShop = (shop) => {
  console.log('getShop action', { shop })
  return ({
    type: GET_SHOP,
    payload: {
      shop,
    },
    meta: {
      thunk: true,
    },
  })
}
