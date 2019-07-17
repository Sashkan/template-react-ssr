// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureStore from 'store/configure'
import api from 'services/api'
import theme from 'components/themes/default'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'

// import messages from '../../build/messages'

// addons.setChannel(mockChannel())

addLocaleData(en)
addLocaleData(fr)

const store = configureStore({}, { api: api.create() })
const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
      <IntlProvider locale='fr' messages={{}}>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  </Provider>
))

configure(loadStories, module)
