import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StarIcon from '@material-ui/icons/Star'

const RateContainer = styled.div``

const Rate = ({
  count,
  defaultValue,
  character,
  themeColor,
  size,
  isDisabled,
  allowHalf,
  onChange,
}) => {
  return <RateContainer>Rate</RateContainer>
}

Rate.propTypes = {
  /**
   * Star count
   */
  count: PropTypes.number,
  /**
   * Default value
   */
  defaultValue: PropTypes.number,
  /**
   * Custom rate icon
   */
  character: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Theme color or custom hex
   */
  themeColor: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary']),
    PropTypes.string,
  ]),
  /**
   * Icon size
   */
  size: PropTypes.number,
  /**
   * Disable state
   */
  isDisabled: PropTypes.bool,
  /**
   * Is allow half icon
   */
  allowHalf: PropTypes.bool,
  /**
   * Change callback
   */
  onChange: PropTypes.func,
}

Rate.defaultProps = {
  count: 5,
  defaultValue: 0,
  character: <StarIcon />,
  themeColor: '#FBDB14',
  size: 32,
  isDisabled: false,
  allowHalf: false,
  onChange: () => {},
}

export default Rate
