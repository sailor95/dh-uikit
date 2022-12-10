import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  border: none;
  outline: none;
  min-width: 100px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border 0.2s,
    opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`

const Button = ({ children, props }) => (
  <StyledButton {...props}>
    <span>{children}</span>
  </StyledButton>
)

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
}

export default Button
