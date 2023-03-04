import React from 'react'
import PropTypes from 'prop-types'

// TODO: Reuse logic with Radio
const Checkbox = props => <div>Checkbox</div>

Checkbox.propTypes = {
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
   * Click callback
   */
  onClick: PropTypes.func,
  /**
   * Content or label
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

Checkbox.defaultProps = {
  isChecked: false,
  isDisabled: false,
  themeColor: 'primary',
  onClick: () => {},
  children: '',
}

export default Checkbox
