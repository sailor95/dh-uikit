import React, { useState } from 'react'
import styled from 'styled-components'

import Switch from '../components/Switch'

export default {
  title: 'Data Inputs/Switch',
  component: Switch,
  argTypes: {
    themeColor: { control: 'color' },
  },
}

const SwitchGroup = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 20px;
  }
`

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <Switch
      isChecked={isChecked}
      onChange={() => setIsChecked(prev => !prev)}
    />
  )
}

export const CustomColor = ({ themeColor }) => {
  const [isChecked, setIsChecked] = useState(true)
  return (
    <Switch
      isChecked={isChecked}
      onChange={() => setIsChecked(prev => !prev)}
      themeColor={themeColor || '#ffc107'}
    />
  )
}

export const DisabledSwitch = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Switch
        isChecked={isChecked}
        isDisabled
        onChange={() => setIsChecked(prev => !prev)}
      />
      <Switch
        isChecked={!isChecked}
        isDisabled
        onChange={() => setIsChecked(prev => !prev)}
      />
    </div>
  )
}

export const SwitchWithSize = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <SwitchGroup>
      <Switch
        size="small"
        isChecked={isChecked}
        onChange={() => setIsChecked(prev => !prev)}
      />
      <Switch
        isChecked={isChecked}
        onChange={() => setIsChecked(prev => !prev)}
      />
    </SwitchGroup>
  )
}

export const SwitchWithChildrenLabel = args => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <SwitchGroup>
      <Switch
        checkedChildren="On"
        unCheckedChildren="Off"
        isChecked={isChecked}
        onChange={() => setIsChecked(prev => !prev)}
      />
      <Switch
        checkedChildren="On for a very long Switch"
        unCheckedChildren="Off for a very long Switch"
        isChecked={isChecked}
        onChange={() => setIsChecked(prev => !prev)}
      />
    </SwitchGroup>
  )
}
