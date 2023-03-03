import React, { Children, cloneElement } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledRadioGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  grid-gap: 8px;
`

const RadioGroup = ({ value, children, onChange, columns, ...props }) => {
  const handleOnClick = targetValue => {
    onChange(targetValue)
  }

  return (
    <StyledRadioGroup $columns={columns} {...props}>
      {Children.map(children, child =>
        cloneElement(child, {
          onClick: () => handleOnClick(child.props.value),
          isChecked: child.props.value === value,
        })
      )}
    </StyledRadioGroup>
  )
}

RadioGroup.propTypes = {
  columns: PropTypes.number,
  /**
   * Selected value
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Children of RadioGroup
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * Callback when event on change
   */
  onChange: PropTypes.func,
}

RadioGroup.defaultProps = {
  value: null,
  children: null,
  columns: 1,
  onChange: () => {},
}

export default RadioGroup
