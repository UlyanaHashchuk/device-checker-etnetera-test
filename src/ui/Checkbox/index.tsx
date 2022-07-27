import React from 'react'
import Text from '../Text'
import { CheckboxContainer, Checkmark } from './index.styled'

type Props = {
  label: string
  name: string
  value: boolean
  onChange: (prop: Record<string, any>) => void
}

const Checkbox = ({ label, name, value, onChange: onParentChange }: Props) => {
  const onChange = () => {
    onParentChange({ target: { value: !value } })
  }

  return (
    <div className="flex items-center">
      <CheckboxContainer>
        <input
          name={name}
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <Checkmark isChecked={value} />
        <Text className="ml-4">{label}</Text>
      </CheckboxContainer>
    </div>
  )
}

export default Checkbox
