import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSlider = styled.input``

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
