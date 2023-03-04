import React from 'react'
import PropTypes from 'prop-types'

import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

import Option from 'components/Option'

const Radio = props => (
  <Option
    checkedIcon={<RadioButtonCheckedIcon />}
    unCheckedIcon={<RadioButtonUncheckedIcon />}
    {...props}
  />
)

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
   * Theme color or custom hex
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
   * Determine checked state in RadioGroup
   */
  value: PropTypes.string,
  /**
   * Content or label
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
