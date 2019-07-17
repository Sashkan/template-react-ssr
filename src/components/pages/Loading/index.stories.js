// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Loading } from 'components'

storiesOf('Loading', module)
  .add('default', () => (
    <Loading />
  ))
