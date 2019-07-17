import React, { Component } from 'react'
import EModal from 'react-modal'
import StyledModal from './index.styled'

class Modal extends Component {
  render() {
    const {
      label,
      open,
      customStyles,
      closeModal,
      children,
    } = this.props

    return (
      <StyledModal>
        <EModal
          isOpen={open}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={label}
        >
          {children}
        </EModal>
      </StyledModal>
    )
  }
}

export default Modal
