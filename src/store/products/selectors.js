// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
export const initialState = {}

export const initialShopState = {
  shop: {},
  detail: null,
}

export const getShopState = (state = initialState, resource) =>
  state[resource] || initialShopState

export const getShop = (state = initialState, resource) =>
  getShopState(state, resource).shop

export const getDetail = (state = initialState, resource) =>
  getShopState(state, resource).detail
