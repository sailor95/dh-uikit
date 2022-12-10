import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import CircularProgress from '@material-ui/core/CircularProgress'
import { useColor } from 'hooks/useColor'

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

const StyledCircularProgress = styled(CircularProgress)`
  margin-right: 8px;
  color: ${props =>
    props.$variant === 'contained' ? '#FFF' : props.$color} !important;
`

const StartIcon = styled.span`
  margin-right: 8px;
`

const EndIcon = styled.span`
  margin-left: 8px;
`

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

/**
 * `Button` a clickable button, trigger business logic after user click event.
 */
const Button = ({
  className,
  children,
  themeColor,
  variant,
  isLoading,
  isDisabled,
  startIcon,
  endIcon,
  onClick,
  ...props
}) => {
  const { makeColor } = useColor()
  const btnColor = makeColor({ themeColor, isDisabled })

  return (
    <StyledButton
      type="button"
      className={className}
      $btnColor={btnColor}
      $variant={variant}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {isLoading && (
        <StyledCircularProgress
          $variant={variant}
          $color={btnColor}
          size={16}
        />
      )}
      {startIcon && <StartIcon>{startIcon}</StartIcon>}
      <span>{children}</span>
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </StyledButton>
  )
}

Button.propTypes = {
  /**
   * Button type
   */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /**
   * Custom style
   */
  className: PropTypes.string,
  /**
   * Content
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  /**
   * Theme color, or custom hex
   */
  themeColor: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary']),
    PropTypes.string,
  ]),
  /**
   * Loading state
   */
  isLoading: PropTypes.bool,
  /**
   * Disable state
   */
  isDisabled: PropTypes.bool,
  /**
   * Icon on the left
   */
  startIcon: PropTypes.element,
  /**
   * Icon on the right
   */
  endIcon: PropTypes.element,
  /**
   * Click event
   */
  onClick: PropTypes.func,
}

export default Button
