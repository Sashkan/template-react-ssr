// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Modal from '.'

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <Modal
        open={boolean('open', false)}
        label={text('Label', 'Hello Storybook')}
      >
        <p>{text('Label', 'My Content')}</p>
      </Modal>
    </div>
  ), {
    notes: 'A very simple example of addon notes',
  })
