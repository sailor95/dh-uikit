import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({
  className,
  prefix,
  suffix,
  isError,
  isDisabled,
  ...props
}) => <div>TextField</div>

TextField.propTypes = {
  /**
   * Custom class
   */
  className: PropTypes.string,
  /**
   * Prefix component
   */
  prefix: PropTypes.element,
  /**
   * Suffix component
   */
  suffix: PropTypes.element,
  /**
   * Placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Error state
   */
  isError: PropTypes.bool,
  /**
   * Disable state
   */
  isDisabled: PropTypes.bool,
  /**
   *  Change callback
   */
  onChange: PropTypes.func,
}

TextField.defaultProps = {
  className: '',
  prefix: null,
  suffix: null,
  placeholder: '',
  isError: false,
  isDisabled: false,
  onChange: () => {},
}

export default TextField
