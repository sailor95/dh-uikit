import React, { useState } from 'react'
import styled from 'styled-components'

import FormControl from '../components/FormControl'
import TextField from '../components/TextField'
import Radio from '../components/Radio'
import Switch from '../components/Switch'

export default {
  title: 'Data Inputs/FormControl',
  component: FormControl,
}

const Template = args => <FormControl {...args} />

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Input Label',
  children: <TextField placeholder="Enter" />,
}

export const Required = Template.bind({})
Required.args = {
  label: 'Input Label',
  isRequired: true,
  children: <TextField placeholder="Enter" />,
}

export const LimitMaxLength = Template.bind({})
LimitMaxLength.args = {
  label: 'Input Label',
  maxLength: 12,
  children: <TextField placeholder="Enter" />,
}

export const ErrorMessage = Template.bind({})
ErrorMessage.args = {
  isError: true,
  errorMessage: 'Input error',
  label: 'Input Label',
  children: <TextField placeholder="Enter" />,
}

const Row = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 40px;
  }
`

const Column = styled.div`
  & > *:not(:first-child) {
    margin-top: 40px;
  }
`

const TemplateWithPlacement = args => (
  <Column>
    <Row>
      <FormControl {...args} placement="top-left" label="Top Left" />
      <FormControl {...args} placement="top" label="Top" />
      <FormControl {...args} placement="top-right" label="Top Right" />
    </Row>
    <Row>
      <FormControl {...args} placement="left" label="Left" />
    </Row>
    <Row>
      <FormControl {...args} placement="right" label="Right" />
    </Row>
    <Row>
      <FormControl {...args} placement="bottom-left" label="Bottom Left" />
      <FormControl {...args} placement="bottom" label="Bottom" />
      <FormControl {...args} placement="bottom-right" label="Bottom Right" />
    </Row>
  </Column>
)

export const WithDiffPlacementLabel = TemplateWithPlacement.bind({})
WithDiffPlacementLabel.args = {
  children: <TextField placeholder="Enter" />,
}

export const RadioWithLabel = TemplateWithPlacement.bind({})
RadioWithLabel.args = {
  children: <Radio />,
}

export const SwitchWithLabel = TemplateWithPlacement.bind({})
SwitchWithLabel.args = {
  children: <Switch />,
}

const TemplateWithState = args => {
  const [value, setValue] = useState('Default value')

  return (
    <FormControl onChange={e => setValue(e.target.value)} {...args}>
      <TextField value={value} />
    </FormControl>
  )
}

export const WithDefaultValue = TemplateWithState.bind({})
WithDefaultValue.args = {
  label: 'Input yo',
  maxLength: 15,
  isRequired: true,
}
