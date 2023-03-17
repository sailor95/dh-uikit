import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import StarIcon from '@material-ui/icons/Star'

import { useColor } from 'hooks/useColor'

const RateContainer = styled.div`
  display: inline-flex;
  ${props => (props.$isString ? `font-size: ${props.$size}px` : null)}
`

const CharacterContainer = styled.div`
  position: relative;
`

const characterCommonStyle = css`
  ${props => (props.$isString ? null : `height: ${props.$size}px;`)}
  ${props => (props.$isDisabled ? null : 'cursor: pointer;')}
  
  color: ${props => (props.$isActive ? props.$starColor : '#F0F0F0')};
  & > * {
    width: ${props => props.$size}px !important;
    height: ${props => props.$size}px !important;
  }
`

const LeftCharacter = styled.div`
  ${characterCommonStyle}
  ${props => (props.$allowHalf ? null : 'display: none;')}

  position: absolute;
  width: 50%;
  overflow: hidden;
`

const RightCharacter = styled.div`
  ${characterCommonStyle}
`

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
  const isString = typeof character === 'string'

  const [innerValue, setInnerValue] = useState(defaultValue)
  const [previewValue, setPreviewValue] = useState(innerValue)

  const { makeColor } = useColor()
  const starColor = makeColor({ themeColor })

  const handleOnClick = value => {
    if (isDisabled) return
    setInnerValue(prev => (prev === value ? 0 : value))
  }

  const handleChangePreviewValue = value => {
    if (!isDisabled) {
      setPreviewValue(value)
    }
  }

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(innerValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerValue])

  const renderRates = () =>
    [...Array(count).keys()].map(key => (
      <CharacterContainer key={key}>
        <LeftCharacter
          className="rate_character-left"
          $size={size}
          $isString={isString}
          $starColor={starColor}
          $isActive={key + 0.5 <= previewValue}
          $allowHalf={allowHalf}
          $isDisabled={isDisabled}
          onClick={() => handleOnClick(key + 0.5)}
          onMouseOver={() => handleChangePreviewValue(key + 0.5)}
          onMouseLeave={() => handleChangePreviewValue(innerValue)}
        >
          {character}
        </LeftCharacter>
        <RightCharacter
          className="rate_character-right"
          $size={size}
          $isString={isString}
          $starColor={starColor}
          $isActive={key + 1 <= previewValue}
          $isDisabled={isDisabled}
          onClick={() => handleOnClick(key + 1)}
          onMouseOver={() => handleChangePreviewValue(key + 1)}
          onMouseLeave={() => handleChangePreviewValue(innerValue)}
        >
          {character}
        </RightCharacter>
      </CharacterContainer>
    ))

  return (
    <RateContainer $size={size} $isString={isString}>
      {renderRates()}
    </RateContainer>
  )
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
