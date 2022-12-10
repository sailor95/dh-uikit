import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const containedStyle = css`
  background: ${props => props.$btnColor};
  color: #fff;
`

const outlinedStyle = css`
  background: #fff;
  color: ${props => props.$btnColor};
  border: 1px solid ${props => props.$btnColor};
  &:hover {
    background: ${props => `${props.$btnColor}10`};
  }
`

const textStyle = css`
  background: #fff;
  color: ${props => props.$btnColor};
  &:hover {
    background: ${props => `${props.$btnColor}10`};
  }
`

const disabledStyle = css`
  cursor: not-allowed;
  &:hover,
  &:active {
    opacity: 1;
  }
`

const variantMap = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle,
}

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
  ${props => variantMap[props.$variant] || variantMap.primary}
  &:disabled {
    ${disabledStyle}
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
