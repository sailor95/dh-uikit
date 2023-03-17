import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'

export default {
  title: 'Data Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    themeColor: { control: 'color' },
  },
}

const RadioContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
`

const Template = args => <Checkbox {...args} />

const TemplateWithState = args => {
  const { isChecked: defaultChecked } = args
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleOnClick = () => {
    setIsChecked(prev => !prev)
  }

  useEffect(() => {
    setIsChecked(defaultChecked)
  }, [defaultChecked])

  return (
    <RadioContainer>
      <Checkbox {...args} isChecked={isChecked} onClick={handleOnClick} />
    </RadioContainer>
  )
}

const TemplateWithColorPicker = args => {
  const { isChecked: defaultChecked } = args
  const defaultColor = '#FE6B8B'
  const [isChecked, setIsChecked] = useState(defaultChecked)
  const [color, setColor] = useState(defaultColor)

  const handleOnClick = () => {
    setIsChecked(prev => !prev)
  }

  useEffect(() => {
    setIsChecked(defaultChecked)
  }, [defaultChecked])

  return (
    <RadioContainer>
      <Checkbox
        {...args}
        themeColor={color}
        isChecked={isChecked}
        onClick={handleOnClick}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="color"
          value={color}
          onChange={event => setColor(event.target.value)}
          style={{ marginRight: 15 }}
        />
        <Button
          variant="outlined"
          themeColor={color}
          onClick={() => setIsChecked(false)}
        >
          重設
        </Button>
      </div>
    </RadioContainer>
  )
}

export const Default = TemplateWithState.bind({})
Default.args = {
  children: 'Checkbox',
}

export const CustomizeColor = TemplateWithColorPicker.bind({})
CustomizeColor.args = {
  children: 'Checkbox',
  isChecked: true,
}

export const DisabledCheckbox = Template.bind({})
DisabledCheckbox.args = {
  isDisabled: true,
  children: 'Checkbox',
}
