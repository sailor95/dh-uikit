import React from 'react'
import PropTypes from 'prop-types'

const CustomSlider = ({ min, max, defaultValue, onChange }) => {
  return <div>Custom Slider</div>
}

CustomSlider.propTypes = {
  /**
   * Min value
   */
  min: PropTypes.number,
  /**
   * Max value
   */
  max: PropTypes.number,
  /**
   * Default value
   */
  defaultValue: PropTypes.number,
  /**
   * Change callback
   */
  onChange: PropTypes.func,
}

CustomSlider.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 0,
  onChange: () => {},
}

export default CustomSlider
