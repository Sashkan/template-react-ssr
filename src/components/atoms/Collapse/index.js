import React, { Component } from 'react'
import RcCollapse from 'rc-collapse'
import StyledCollapse from './index.styled'

const { Panel } = RcCollapse

/**
 *
 * @class Collapse
 * @extends {Component}
 */
class Collapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: 1,
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
    return null
  }

  onChange = (key) => {
    this.setState({
      activeKey: key,
    })
  }

  render() {
    const {
      options,
      accordion,
    } = this.props

    const {
      activeKey,
    } = this.state

    return (
      <StyledCollapse>
        <RcCollapse
          accordion={accordion}
          activeKey={activeKey}
          onChange={this.onChange}
          className='customCollapse'
        >
          {options.map(o => (
            <Panel
              header={o.header}
              headerClass={o.class}
              disabled={o.disabled}
              className='customCollapseItem'
            >
              {o.content}
            </Panel>))}
        </RcCollapse>
      </StyledCollapse>
    )
  }
}

export default Collapse
