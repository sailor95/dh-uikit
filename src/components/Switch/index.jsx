import React, { useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { useColor } from 'hooks/useColor'

const transitionStyle = css`
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    right 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

const SwitchButton = styled.div`
  position: relative;
  display: inline-flex;
  box-sizing: content-box;
  height: ${props => props.$thumbSize}px;
  width: ${props => props.$switchWidth}px;
  background: ${props => props.$switchColor};
  color: #fff;
  border-radius: 50px;
  border: 3px solid ${props => props.$switchColor};
  cursor: ${props => (props.$isDisabled ? 'not-allowed' : 'pointer')};
`

const Thumb = styled.div`
  position: absolute;
  width: ${props => props.$thumbSize}px;
  height: ${props => props.$thumbSize}px;
  border-radius: 50px;
  background: #fff;
  ${props => {
    if (props.$isChecked) {
      return `left: ${props.$switchWidth - props.$thumbSize}px;`
    }
    return `left: 0px;`
  }}
  ${transitionStyle}
`

const Label = styled.div`
  position: absolute;
  font-size: 14px;
  white-space: nowrap;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px ${props => props.$padding}px;
  ${props => {
    if (props.$isChecked) {
      return `right: ${props.$switchWidth - props.$labelWidth}px;`
    }
    return `right: 0px;`
  }}
  ${transitionStyle}
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
  const [labelWidth, setLabelWidth] = useState(0)
  const labelRef = useRef(null)
  const thumbSize = size === 'small' ? 12 : 18
  const switchWidth = thumbSize + labelWidth

  const { makeColor } = useColor()
  const switchColor = makeColor({ themeColor, isDisabled: !isChecked })

  useLayoutEffect(() => {
    const minLabelWidth = thumbSize * 1.2
    const currLabelWidth = labelRef?.current?.clientWidth

    if (currLabelWidth) {
      setLabelWidth(
        currLabelWidth < minLabelWidth ? minLabelWidth : currLabelWidth
      )
    }
  }, [labelRef?.current?.clientWidth, thumbSize])

  return (
    <SwitchButton
      $switchWidth={switchWidth}
      $thumbSize={thumbSize}
      $switchColor={switchColor}
      $isDisabled={isDisabled}
      onClick={isDisabled ? null : onChange}
      {...props}
    >
      <Thumb
        $isChecked={isChecked}
        $thumbSize={thumbSize}
        $switchWidth={switchWidth}
      />

      <Label
        ref={labelRef}
        $padding={thumbSize / 3}
        $labelWidth={labelWidth}
        $switchWidth={switchWidth}
        $isChecked={isChecked}
      >
        {isChecked ? checkedChildren : unCheckedChildren}
      </Label>
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
