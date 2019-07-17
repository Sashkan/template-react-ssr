import React from 'react'
import { mount, shallow } from 'enzyme'
import DefaultLayout from '.'

const wrap = (props = {}) => shallow(<DefaultLayout {...props}>test</DefaultLayout>)

it('mounts', () => {
  mount(<DefaultLayout>test</DefaultLayout>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})
