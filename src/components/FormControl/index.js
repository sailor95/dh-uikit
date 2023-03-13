import React from 'react'
import PropTypes from 'prop-types'

const FormControl = ({
  label,
  children,
  maxLength,
  placement,
  isError,
  errorMessage,
  isRequired,
  onChange,
  className,
  ...props
}) => {
  //
  return <div>FormControl</div>
}

FormControl.propTypes = {
  /**
   * Custom class
   */
  className: PropTypes.string,
  /**
   * Required state
   */
  isRequired: PropTypes.bool,
  /**
   * Error state
   */
  isError: PropTypes.bool,
  /**
   * Error message
   */
  errorMessage: PropTypes.string,
  /**
   * Max length
   */
  maxLength: PropTypes.number,
  /**
   * Title position
   */
  placement: PropTypes.oneOf([
    'top-left',
    'top',
    'top-right',
    'left',
    'right',
    'bottom-left',
    'bottom',
    'bottom-right',
  ]),
  /**
   * Title
   */
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Change callback
   */
  onChange: PropTypes.func,
  /**
   * Form content
   */
  children: PropTypes.element,
}

FormControl.defaultProps = {
  className: '',
  isRequired: false,
  isError: false,
  errorMessage: null,
  placement: 'top-left',
  maxLength: null,
  label: '',
  onChange: () => {},
  children: null,
}

export default FormControl
