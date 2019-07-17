// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { CheckoutPage } from 'components'

storiesOf('CheckoutPage', module)
  .add('default', () => (
    <CheckoutPage />
  ))
