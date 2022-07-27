import React from 'react'
import { useIntl } from 'react-intl'
import NextImage from 'next/image'
import { Dropdown, Text, Checkbox } from '~/ui'
import { Dispatch, useDispatch, useSelector } from '~/store'
import { getDeviceFilters } from '~/selectors'
import { DEVICES_STATE_KEY } from '~/constants'
import { SYSTEM_OPTIONS, VENDOR_OPTIONS } from '../../constants'
import messages from './index.messages'
import {
  Wrapper,
  FlexWrapper,
  SearchContainer,
  SearchInput,
} from './index.styled'

type Props = {
  searchInput: string
  setSearchInput: (prop: string) => void
}

const Filters = ({ searchInput, setSearchInput }: Props) => {
  const { formatMessage } = useIntl()
  const dispatch = useDispatch<Dispatch>()
  const { isChecked, systemIndex, vendorIndex } = useSelector(getDeviceFilters)

  const onSystemSelect = (value: number) => {
    dispatch[DEVICES_STATE_KEY].setSystemIndex(value)
  }

  const onVendorSelect = (value: number) => {
    dispatch[DEVICES_STATE_KEY].setVendorIndex(value)
  }

  const onCheck = () => {
    dispatch[DEVICES_STATE_KEY].setIsChecked(!isChecked)
  }

  return (
    <FlexWrapper secondary>
      <FlexWrapper>
        <Wrapper>
          <Text xSmall secondary>
            {formatMessage(messages.system)}
          </Text>
          <Dropdown onSelect={onSystemSelect} activeTab={systemIndex}>
            {SYSTEM_OPTIONS.map((option, index) => (
              <Text key={index}>{option}</Text>
            ))}
          </Dropdown>
        </Wrapper>
        <Wrapper secondary>
          <Text xSmall secondary>
            {formatMessage(messages.vendor)}
          </Text>
          <Dropdown onSelect={onVendorSelect} activeTab={vendorIndex}>
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
            onChange={onCheck}
          />
        </Wrapper>
      </FlexWrapper>
      <SearchContainer>
        <NextImage
          src="/images/search.png"
          width="18px"
          height="18px"
          alt="Search"
        />
        <SearchInput
          name="search"
          type="text"
          placeholder={formatMessage(messages.searchPlaceholder)}
          value={searchInput}
          onChange={({ target: { value } }) => setSearchInput(value)}
        />
      </SearchContainer>
    </FlexWrapper>
  )
}

export default Filters
