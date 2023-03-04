import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import Radio from '../components/Radio'
import RadioGroup from '../components/Radio/RadioGroup'

export default {
  title: 'Data Inputs/Radio',
  component: Radio,
}

const RadioWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
`

const Template = args => <Radio {...args} />

const TemplateWithState = args => {
  const { isChecked: defaultChecked } = args
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleOnClick = () => {
    setIsChecked(true)
  }

  useEffect(() => {
    setIsChecked(defaultChecked)
  }, [defaultChecked])

  return (
    <RadioWrapper>
      <Radio {...args} isChecked={isChecked} onClick={handleOnClick} />
      <Button variant="outlined" onClick={() => setIsChecked(false)}>
        Reset
      </Button>
    </RadioWrapper>
  )
}

const TemplateWithRadioGroup = args => {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <RadioGroup
      onChange={setSelectedValue}
      value={selectedValue}
      columns={2}
      style={{
        maxWidth: 500,
      }}
      {...args}
    >
      <Radio value="btc">BTC</Radio>
      <Radio value="eth">ETH</Radio>
      <Radio value="others">Others</Radio>
    </RadioGroup>
  )
}

export const Default = TemplateWithState.bind({})
Default.args = {
  children: 'Radio',
}

export const CustomizeColor = Template.bind({})
CustomizeColor.args = {
  children: 'Radio',
  themeColor: '#FE6B8B',
  isChecked: true,
}

export const DisabledRadio = Template.bind({})
DisabledRadio.args = {
  isDisabled: true,
  children: 'Radio',
}

export const WithRadioGroup = TemplateWithRadioGroup.bind({})
