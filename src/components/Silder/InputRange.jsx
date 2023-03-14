import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { useColor } from 'hooks/useColor'

const THUMB_SIZE = 20

const railStyle = css`
  background: #ddd;
  width: 320px;
  height: 6px;
  border-radius: 5px;
`

const trackStyle = css`
  background: ${props => props.$color};
  border-radius: 5px;
  height: 6px;
`

const StyledSlider = styled.input`
  &[type='range'] {
    -webkit-appearance: none;
    outline: none;
    position: relative;
    z-index: 0;
    ${railStyle}

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      width: ${props => props.$widthRatio}%;
      left: 0px;
      ${trackStyle}
    }
  }

  // thumb style
  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    border-radius: 50%;
    border: 2px solid white;
    background: white;
    border: 0.4em solid ${props => props.$color};
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.15);
    }
    &:active {
      cursor: grabbing;
      transform: scale(0.975);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
      background: ${props => props.$color};
    }
  }
`

const Slider = ({
  defaultValue,
  min,
  max,
  step,
  themeColor,
  onChange,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue)
  const sliderRef = useRef()
  const { makeColor } = useColor()
  const color = makeColor({ themeColor })

  const handleOnChange = event => {
    setCurrentValue(sliderRef.current.value)
    onChange(event)
  }

  return (
    <StyledSlider
      ref={sliderRef}
      type="range"
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      onChange={handleOnChange}
      $widthRatio={(currentValue / max) * 100}
      $color={color}
      {...props}
    />
  )
}

Slider.propTypes = {
  /**
   * Default value
   */
  defaultValue: PropTypes.number,
  /**
   * Min value
   */
  min: PropTypes.number,
  /**
   * Max value
   */
  max: PropTypes.number,
  /**
   * Step length, need to be above 0 and is able to evenly divide (max - min)
   */
  step: PropTypes.number,
  /**
   * Theme color
   */
  themeColor: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary']),
    PropTypes.string,
  ]),
  /**
   * Change callback
   */
  onChange: PropTypes.func,
}

Slider.defaultProps = {
  defaultValue: 0,
  min: 0,
  max: 100,
  step: 1,
  themeColor: 'primary',
  onChange: () => {},
}

export default Slider
