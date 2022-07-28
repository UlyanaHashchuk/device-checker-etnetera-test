import React from 'react'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { Button, Dropdown, Input, Text } from '~/ui'
import BaseLayout from '~/layouts/BaseLayout'
import { PAGE_AUTH_TYPE } from '~/constants'
import useAddDevice, { FormValuesType } from './hooks/useAddDevice'
import {
  ADD_DEVICE_STAGE,
  dropdownOsOptions,
  dropdownVendorOptions,
} from './constants'
import { Container } from './index.styled'
import messages from './index.messages'

const AddDevice = () => {
  const { formatMessage } = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesType>()
  const {
    selectedOptions,
    onDropdownSelect,
    hasError,
    addDeviceStages,
    onSubmit,
  } = useAddDevice()

  return (
    <Container>
      <Text large>{formatMessage(messages.title)}</Text>
      <Text small error={hasError}>
        {hasError ? formatMessage(messages.addDeviceFailure) : <>&nbsp;</>}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="code"
          register={register}
          placeholder={formatMessage(messages.codePlaceholder)}
          className="mt-5"
          hasError={!!errors?.code}
          required
        />
        <Dropdown
          onSelect={onDropdownSelect('osIndex')}
          activeTab={selectedOptions.osIndex}
          secondary
          className="mt-10"
        >
          {dropdownOsOptions.map((option, index) => (
            <Text key={index}>{option}</Text>
          ))}
        </Dropdown>
        <Input
          name="model"
          register={register}
          placeholder={formatMessage(messages.modelPlaceholder)}
          className="mt-5"
          hasError={!!errors?.model}
          required
        />
        <Dropdown
          onSelect={onDropdownSelect('vendorIndex')}
          activeTab={selectedOptions.vendorIndex}
          secondary
          className="mt-10"
        >
          {dropdownVendorOptions.map((option, index) => (
            <Text key={index}>{option}</Text>
          ))}
        </Dropdown>
        <Input
          name="osVersion"
          register={register}
          placeholder={formatMessage(messages.versionPlaceholder)}
          className="mt-5"
          hasError={!!errors?.osVersion}
          required
        />
        <Input
          name="image"
          register={register}
          placeholder={formatMessage(messages.imagePlaceholder)}
          className="mt-5"
          hasError={!!errors?.image}
          required
        />
        <Button
          secondary
          filled
          type="submit"
          disabled={addDeviceStages !== ADD_DEVICE_STAGE.INITIAL}
          className="mt-7"
        >
          <Text semibold>
            {addDeviceStages === ADD_DEVICE_STAGE.INITIAL &&
              formatMessage(messages.addDeviceButton)}
            {addDeviceStages === ADD_DEVICE_STAGE.SUBMITTING &&
              formatMessage(messages.addingButton)}
            {addDeviceStages === ADD_DEVICE_STAGE.ADDED &&
              formatMessage(messages.successfullyAdded)}
          </Text>
        </Button>
      </form>
    </Container>
  )
}

AddDevice.layout = BaseLayout
AddDevice.type = PAGE_AUTH_TYPE.SECURE

export default AddDevice
