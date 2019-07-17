import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'containers/Helmet'

import {
  ListingPage,
  ProductPage,
  OrderStatusPage,
  AboutPage,
  NotFoundPage,
} from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

// TODO theme from shop.settings

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => (
  <div id='ecommerceApp'>
    <Helmet />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path='/' component={ListingPage} exact />
        <Route path='/product' component={ProductPage} />
        <Route path='/order' component={OrderStatusPage} />
        <Route path='/about' component={AboutPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  </div>
)

export default App
