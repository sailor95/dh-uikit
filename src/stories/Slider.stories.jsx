import React, { useState } from 'react'
import styled from 'styled-components'

import Slider, { CustomSlider } from '../components/Slider'

export default {
  title: 'Data Inputs/Slider',
  component: Slider,
}

const Container = styled.div`
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
    <Container>
      <Slider
        {...args}
        onChange={event => {
          setValue(event.target.value)
        }}
      />
      <span>{value}</span>
    </Container>
  )
}

const CustomTemplate = args => {
  const { defaultValue } = args
  const [value, setValue] = useState(defaultValue || 0)

  return (
    <Container>
      <CustomSlider
        {...args}
        onChange={currentValue => {
          setValue(currentValue.toFixed(2))
        }}
      />
      <span>{value}</span>
    </Container>
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
