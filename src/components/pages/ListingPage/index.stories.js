// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ListingPage } from 'components'

storiesOf('ListingPage', module)
  .add('default', () => (
    <ListingPage />
  ))
