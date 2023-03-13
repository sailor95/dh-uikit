import React, { useState, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const topCommonStyle = css`
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 8px;
  }
`

const bottomCommonStyle = css`
  flex-direction: column-reverse;
  & > *:not(:first-child) {
    margin-bottom: 8px;
  }
`

const topLeftStyle = css`
  ${topCommonStyle}
`
const topStyle = css`
  align-items: center;
  ${topCommonStyle}
`
const topRightStyle = css`
  align-items: flex-end;
  ${topCommonStyle}
`
const bottomLeftStyle = css`
  ${bottomCommonStyle}
`
const bottomStyle = css`
  align-items: center;
  ${bottomCommonStyle}
`
const bottomRightStyle = css`
  align-items: flex-end;
  ${bottomCommonStyle}
`

const leftStyle = css`
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 8px;
  }
`

const rightStyle = css`
  align-items: center;
  flex-direction: row-reverse;
  & > *:not(:first-child) {
    margin-right: 8px;
  }
`

const placementStyleMap = {
  'top-left': topLeftStyle,
  top: topStyle,
  'top-right': topRightStyle,
  left: leftStyle,
  right: rightStyle,
  'bottom-left': bottomLeftStyle,
  bottom: bottomStyle,
  'bottom-right': bottomRightStyle,
}

const StyledFormControl = styled.div`
  display: inline-flex;
  ${props => {
    if (props.$placement) {
      return placementStyleMap[props.$placement]
    }
    return null
  }}
`

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const RequiredSign = styled.span`
  color: ${props => props.theme.color.error};
`

const MaxLength = styled.div`
  font-size: 14px;
  color: ${props => props.theme.color.primary};
  display: flex;
  align-items: flex-end;
`

const ErrorMessage = styled.div`
  font-size: 14px;
  margin-top: 4px !important;
  color: ${props => props.theme.color.error};
`

const FormControl = ({
  label,
  children,
  maxLength,
  placement,
  isError,
  errorMessage,
  isRequired,
  onChange,
  className,
  ...props
}) => {
  const [childrenValue, setChildrenValue] = useState('')
  const showError = isError && errorMessage
  const isSwitchComponent = children.type.name === 'Switch'

  const handleOnChange = event => {
    const targetValue = event?.target?.value
    if (maxLength && targetValue.length > maxLength) return
    setChildrenValue(targetValue)
    if (typeof onChange === 'function') onChange(event)
  }

  return (
    <StyledFormControl className={className} $placement={placement} {...props}>
      <LabelWrapper className="form-control__label-wrapper">
        <div className="form-control__label">
          {label}
          {isRequired && <RequiredSign>*</RequiredSign>}
        </div>
        {maxLength && (
          <MaxLength>{`${childrenValue?.length} / ${maxLength}`}</MaxLength>
        )}
      </LabelWrapper>

      {isSwitchComponent
        ? children
        : cloneElement(children, {
            isError,
            value: childrenValue,
            onChange: handleOnChange,
          })}

      {showError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledFormControl>
  )
}

FormControl.propTypes = {
  /**
   * Custom class
   */
  className: PropTypes.string,
  /**
   * Required state
   */
  isRequired: PropTypes.bool,
  /**
   * Error state
   */
  isError: PropTypes.bool,
  /**
   * Error message
   */
  errorMessage: PropTypes.string,
  /**
   * Max length
   */
  maxLength: PropTypes.number,
  /**
   * Title position
   */
  placement: PropTypes.oneOf([
    'top-left',
    'top',
    'top-right',
    'left',
    'right',
    'bottom-left',
    'bottom',
    'bottom-right',
  ]),
  /**
   * Title
   */
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Change callback
   */
  onChange: PropTypes.func,
  /**
   * Form content
   */
  children: PropTypes.element,
}

FormControl.defaultProps = {
  className: '',
  isRequired: false,
  isError: false,
  errorMessage: null,
  placement: 'top-left',
  maxLength: null,
  label: '',
  onChange: () => {},
  children: null,
}

export default FormControl
