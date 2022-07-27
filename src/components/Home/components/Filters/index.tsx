import React from 'react'
import { Dropdown, Text, Checkbox } from '~/ui'
import { useIntl } from 'react-intl'
import { SYSTEM_OPTIONS, VENDOR_OPTIONS } from '../../constants'
import messages from './index.messages'
import { Wrapper, FlexWrapper } from './index.styled'

type Props = {
  selectedOptions: {
    systemIndex: number
    vendorIndex: number
  }
  setSelectedOptions: (prop: any) => void
  isChecked: boolean
  setIsChecked: (prop: boolean) => void
}

const Filters = ({
  selectedOptions,
  setSelectedOptions,
  isChecked,
  setIsChecked,
}: Props) => {
  const { formatMessage } = useIntl()

  const onSelect = React.useCallback(
    (key: keyof typeof selectedOptions) => (value: number) => {
      setSelectedOptions((prevState: typeof selectedOptions) => ({
        ...prevState,
        [key]: value,
      }))
    },
    []
  )

  return (
    <FlexWrapper secondary>
      <FlexWrapper>
        <Wrapper>
          <Text xSmall secondary>
            {formatMessage(messages.system)}
          </Text>
          <Dropdown
            onSelect={onSelect('systemIndex')}
            activeTab={selectedOptions.systemIndex}
          >
            {SYSTEM_OPTIONS.map((option, index) => (
              <Text key={index}>{option}</Text>
            ))}
          </Dropdown>
        </Wrapper>
        <Wrapper secondary>
          <Text xSmall secondary>
            {formatMessage(messages.vendor)}
          </Text>
          <Dropdown
            onSelect={onSelect('vendorIndex')}
            activeTab={selectedOptions.vendorIndex}
          >
            {VENDOR_OPTIONS.map((option, index) => (
              <Text key={index}>{option}</Text>
            ))}
          </Dropdown>
        </Wrapper>
        <Wrapper secondary className="md:pb-2">
          <Checkbox
            name="isAvailable"
            label={formatMessage(messages.checkboxLabel)}
            value={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </Wrapper>
      </FlexWrapper>
      <div>Search</div>
    </FlexWrapper>
  )
}

export default Filters
