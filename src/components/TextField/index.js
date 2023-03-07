import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const errorStyle = css`
  border: 1px solid ${props => props.theme.color.error};
  &:hover {
    border: 1px solid ${props => props.theme.color.error};
  }
`

const disabledStyle = css`
  border: 1px solid ${props => props.theme.color.disable};
  cursor: not-allowed;
  background: ${props => props.theme.color.disable}22;
  .text-field__input {
    cursor: not-allowed;
    background: none;
  }
  &:hover {
    border: 1px solid ${props => props.theme.color.disable};
  }
`

const StyledTextField = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 12px;
  box-sizing: border-box;
  height: 36px;

  &:hover {
    border: 1px solid #222;
  }

  ${props => (props.$isError ? errorStyle : null)}
  ${props => (props.$isDisabled ? disabledStyle : null)}
`

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 14px;
  color: #333;
  width: 100%;
`

/**
 * Design logics:
 *
 * Put 'className' prop on StyledTextField to let styled component focus on handling UI styles (custom class).
 * Spread '...props' on Input since we tend to handle the input props ourselves (e.g., value, onChange...).
 */
const TextField = ({
  className,
  prefix,
  suffix,
  isError,
  isDisabled,
  ...props
}) => (
  <StyledTextField
    className={className}
    $isError={isError}
    $isDisabled={isDisabled}
  >
    {prefix}
    <Input
      type="text"
      className="text-field__input"
      disabled={isDisabled}
      {...props}
    />
    {suffix}
  </StyledTextField>
)

TextField.propTypes = {
  /**
   * Custom class
   */
  className: PropTypes.string,
  /**
   * Prefix component
   */
  prefix: PropTypes.element,
  /**
   * Suffix component
   */
  suffix: PropTypes.element,
  /**
   * Placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Error state
   */
  isError: PropTypes.bool,
  /**
   * Disable state
   */
  isDisabled: PropTypes.bool,
  /**
   *  Change callback
   */
  onChange: PropTypes.func,
}

TextField.defaultProps = {
  className: '',
  prefix: null,
  suffix: null,
  placeholder: '',
  isError: false,
  isDisabled: false,
  onChange: () => {},
}

export default TextField
