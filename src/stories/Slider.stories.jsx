import React, { useState } from 'react'
import styled from 'styled-components'

import Slider, { CustomSlider } from '../components/Slider'

export default {
  title: 'Data Inputs/Slider',
  component: Slider,
}

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 20px;
  }
`

const Template = args => {
  const { defaultValue } = args
  const [value, setValue] = useState(defaultValue || 0)

  return (
    <SliderWrapper>
      <Slider
        {...args}
        onChange={event => {
          setValue(event.target.value)
        }}
      />
      <span>{value}</span>
    </SliderWrapper>
  )
}

const CustomTemplate = args => {
  const { defaultValue } = args
  const [value, setValue] = useState(defaultValue || 0)

  return (
    <SliderWrapper>
      <CustomSlider
        {...args}
        onChange={currentValue => {
          setValue(currentValue.toFixed(2))
        }}
      />
      <span>{value}</span>
    </SliderWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const CustomColor = Template.bind({})
CustomColor.args = {
  defaultValue: 50,
  themeColor: '#42f5c5',
}

export const WithStep = Template.bind({})
WithStep.args = {
  min: 0,
  max: 8,
  step: 2,
}

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = {
  defaultValue: 50,
}

export const CustomizedSlider = CustomTemplate.bind({})
CustomizedSlider.args = {
  onChange: value => console.log('value: ', value),
}
