import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

import { useColor } from 'hooks/useColor'

const DISABLED_COLOR = '#dadada'

const StyledRadio = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  color: ${props => (props.$isDisabled ? DISABLED_COLOR : '#222222')};
  & > *:not(:first-child) {
    margin-left: 8px;
  }
  .radio__checked-icon {
    color: ${props => props.$btnColor};
  }
  .radio__unchecked-icon {
    color: ${props => (props.$isDisabled ? DISABLED_COLOR : '#808080')};
  }
  &:hover {
    .radio__unchecked-icon {
      color: ${props => (props.$isDisabled ? DISABLED_COLOR : props.$btnColor)};
    }
  }
`

const Radio = ({
  isChecked,
  isDisabled,
  themeColor,
  onClick,
  value,
  children,
  ...props
}) => {
  const { makeColor } = useColor()
  const btnColor = makeColor({ themeColor, isDisabled })

  return (
    <StyledRadio
      onClick={isDisabled ? null : onClick}
      $isDisabled={isDisabled}
      $btnColor={btnColor}
      {...props}
    >
      {isChecked ? (
        <RadioButtonCheckedIcon className="radio__checked-icon" />
      ) : (
        <RadioButtonUncheckedIcon className="radio__unchecked-icon" />
      )}
      <span>{children}</span>
    </StyledRadio>
  )
}

Radio.propTypes = {
  /**
   * Check state
   */
  isChecked: PropTypes.bool,
  /**
   * Disable state
   */
  isDisabled: PropTypes.bool,
  /**
   * Theme color, or custom hex
   */
  themeColor: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary']),
    PropTypes.string,
  ]),
  /**
   * State change callback
   */
  onClick: PropTypes.func,
  /**
   * Determine checked state in RadioGroup
   */
  value: PropTypes.string,
  /**
   * Content
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

Radio.defaultProps = {
  isChecked: false,
  isDisabled: false,
  themeColor: 'primary',
  onClick: () => {},
  value: null,
  children: '',
}

export default Radio
