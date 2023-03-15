import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fromEvent } from 'rxjs'
import { map, concatMap, takeUntil } from 'rxjs/operators'

import { useColor } from 'hooks/useColor'
import { railStyle, trackStyle } from './InputSlider'

const THUMB_SIZE = 20

const CustomSliderContainer = styled.div`
  /* rail */
  position: relative;
  ${railStyle}

  /* track */
  &:before {
    content: '';
    position: absolute;
    width: ${props => props.$thumbPosX}px;
    ${trackStyle}
  }

  /* thumb */
  .custom-slider__thumb {
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    border-radius: 100%;
    background: ${props => props.$color};
    position: absolute;
    top: 50%;
    left: ${props => props.$thumbPosX}px;
    transform: translateY(-50%) translateX(-50%);
    cursor: pointer;
  }
`
const calculateTrackWidth = ({ min, max, width }) => {
  if (width < min) return min
  if (width > max) return max
  return width
}
const widthToValue = ({ min, max, ratio }) => (max - min) * ratio
const valueToWidth = ({ min, max, value, railWidth }) =>
  (value / (max - min)) * railWidth

const CustomSlider = ({ defaultValue, min, max, themeColor, onChange }) => {
  const thumbRef = useRef()
  const railRef = useRef()
  const [thumbPosX, setThumbPosX] = useState(0)

  const { makeColor } = useColor()
  const color = makeColor({ themeColor })

  const handleUpdatePosition = ({ mousePosX }) => {
    const railDOM = railRef.current
    const railWidth = railDOM.clientWidth
    const railPosX = railDOM.getBoundingClientRect().x
    const trackWidth = calculateTrackWidth({
      min: 0,
      max: railWidth,
      width: mousePosX - railPosX,
    })
    setThumbPosX(trackWidth)
    onChange(
      widthToValue({
        min,
        max,
        ratio: trackWidth / railWidth,
      })
    )
  }

  // Set default values
  useEffect(() => {
    const railDOM = railRef.current
    const railWidth = railDOM.clientWidth
    const defaultWidth = valueToWidth({
      min,
      max,
      value: defaultValue,
      railWidth,
    })
    setThumbPosX(defaultWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Monitor thumb drag
  useEffect(() => {
    const thumbDOM = thumbRef.current
    const { body } = document
    const mouseDown = fromEvent(thumbDOM, 'mousedown')
    const mouseUp = fromEvent(body, 'mouseup')
    const mouseMove = fromEvent(body, 'mousemove')
    mouseDown
      .pipe(
        concatMap(() => mouseMove.pipe(takeUntil(mouseUp))),
        map(moveEvent => moveEvent.clientX)
      )
      .subscribe(mousePosX => {
        handleUpdatePosition({ mousePosX })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Monitor track bar click to jump thumb
  useEffect(() => {
    const railDOM = railRef.current
    const mouseDown = fromEvent(railDOM, 'mousedown')
    mouseDown
      .pipe(map(mouseEvent => mouseEvent.clientX))
      .subscribe(mousePosX => {
        handleUpdatePosition({ mousePosX })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CustomSliderContainer ref={railRef} $color={color} $thumbPosX={thumbPosX}>
      <div ref={thumbRef} className="custom-slider__thumb" />
    </CustomSliderContainer>
  )
}

CustomSlider.propTypes = {
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

CustomSlider.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 0,
  onChange: () => {},
}

export default CustomSlider
