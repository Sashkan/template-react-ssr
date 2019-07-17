import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import RcCollapse from 'rc-collapse'
import Collapse from './index'

const { Panel } = RcCollapse

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

describe('<Collapse />', () => {
  it('renders three  Panels', () => {
    const wrapper = shallow(<Collapse
      options={options}
    />)
    expect(wrapper.find(Panel)).to.have.lengthOf(2)
  })
})
