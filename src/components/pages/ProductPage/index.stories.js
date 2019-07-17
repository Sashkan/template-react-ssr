// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ProductPage } from 'components'

storiesOf('ProductPage', module)
  .add('default', () => (
    <ProductPage />
  ))
