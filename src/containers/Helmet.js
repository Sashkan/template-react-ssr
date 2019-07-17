/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
// import { fetchState } from 'react-router-server'

class HelmetContainer extends Component {
  static propTypes = {
    shop: PropTypes.object,
  }
  componentDidUpdate() {
    console.log('HelmetContainer update', this.props.shop)
  }
  render() {
    try {
      console.log('HelmetContainer render', this.props.shop)
      const { shop } = this.props
      if (shop) {
        return (
          <Helmet >
            <title>{shop.settings.name}</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:site_name" content={shop.settings.name} />
            {shop.settings.favicon ? <link rel="icon" href={shop.settings.favicon} /> : null}
          </Helmet>)
      }
      console.log('HelmetContainer no shop')
      return null
    } catch (e) {
      console.log('HelmetContainer error', e)
      return null
    }
  }
}

const mapStateToProps = (state) => {
  console.log('HelmetContainer map ', { state })
  return {
    shop: state.shop.data,
  }
}

// const withServerState = fetchState(state => ({
//   hasServerState: !!state.shop,
//   shop: state.shop ? state.shop.data : {},
// }))

export default connect(mapStateToProps)(HelmetContainer)
