import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SwitchButton = styled.div`
  height: ${props => props.$thumbSize}px;
  width: ${props => props.$switchWidth}px;
  background: ${props => props.$switchColor};
  display: inline-flex;
  color: #fff;
  border-radius: 50px;
  position: relative;
  border: 3px solid ${props => props.$switchColor};
  cursor: ${props => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  box-sizing: content-box;
`

const Thumb = styled.div`
  width: ${props => props.$thumbSize}px;
  height: ${props => props.$thumbSize}px;
  border-radius: 50px;
  background: #fff;
  position: absolute;
  ${props => {
    if (props.$isChecked) {
      return `left: ${props.$switchWidth - props.$thumbSize}px`
    }
    return `left: 0px`
  }}
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, right 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

const Switch = ({
  isChecked,
  isDisabled,
  themeColor,
  onChange,
  size,
  checkedChildren,
  unCheckedChildren,
  ...props
}) => {
  return (
    <SwitchButton>
      <Thumb />
    </SwitchButton>
  )
}

Switch.propTypes = {
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
  onChange: PropTypes.func,
  /**
   * Size of the Switch
   */
  size: PropTypes.string,
  /**
   * Children for checked
   */
  checkedChildren: PropTypes.string,
  /**
   * Children for unchecked
   */
  unCheckedChildren: PropTypes.string,
}

Switch.defaultProps = {
  isChecked: null,
  isDisabled: null,
  themeColor: 'primary',
  size: 'default',
  checkedChildren: '',
  unCheckedChildren: '',
  onChange: () => {},
}

export default Switch
