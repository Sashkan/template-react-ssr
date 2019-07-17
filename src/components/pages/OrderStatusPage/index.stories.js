// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { OrderStatusPage } from 'components'

storiesOf('OrderStatusPage', module)
  .add('default', () => (
    <OrderStatusPage />
  ))
