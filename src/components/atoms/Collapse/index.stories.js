// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Collapse from '.'

const options = [
  {
    header: 'Header 1',
    content: 'This is a content',
  },
  {
    header: 'Header 2',
    content: 'This is also a content',
  },
]

const disabledOptions = [
  {
    header: 'Header',
    content: 'This is a content',
  },
  {
    header: 'Header',
    content: 'This is also a content',
  },
  {
    header: 'Disabled Header',
    content: 'This is a disabled content',
    disabled: true,
  },
]

storiesOf('Collapse', module)
  .add('default', () => (
    <Collapse
      options={options}
    />
  ))
  .add('accordion', () => (
    <Collapse
      options={options}
      accordion
    />
  ))
  .add('disabled option', () => (
    <Collapse
      options={disabledOptions}
      accordion
    />
  ))
