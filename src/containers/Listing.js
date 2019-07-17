import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchState } from 'react-router-server'
import { isPending, hasFailed } from 'redux-saga-thunk'
// import { fromEntities, fromResource } from 'store/selectors'
import { getShop } from 'store/actions'
import { isBrowser, isServer } from 'config'

// import { ListingPage } from 'components'

class ListingContainer extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    getShop: PropTypes.func.isRequired,
    hasServerState: PropTypes.bool,
    setServerState: PropTypes.func.isRequired,
    cleanServerState: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    const {
      getShop, hasServerState, setServerState, cleanServerState,
    } = this.props

    if (!hasServerState) {
      if (isServer) {
        getShop().then(setServerState, setServerState)
      } else {
        getShop()
      }
    } else if (isBrowser) {
      cleanServerState()
    }
  }

  render() {
    // const { , ,  } = this.props
    console.log('ListingContainer render', this.props)
    return null
    // <Listing {...{ list, loading, failed }} />
  }
}

const mapStateToProps = state => ({
  shop_loading: isPending(state, 'GET_SHOP'),
  shop_failed: hasFailed(state, 'GET_SHOP'),
  products_loading: isPending(state, 'GET_PRODUCTS'),
  products_failes: hasFailed(state, 'GET_PRODUCTS'),
})

const mapDispatchToProps = dispatch => ({
  getShop: () => dispatch(getShop()),
})

const withServerState = fetchState(
  state => ({
    hasServerState: !!state.data,
  }),
  actions => ({
    setServerState: data => actions.done({ data }),
    cleanServerState: () => actions.done(),
  })
)

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(ListingContainer))
