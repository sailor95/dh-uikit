import React from 'react'
import PropTypes from 'prop-types'

const Radio = props => <div>Radio</div>

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
