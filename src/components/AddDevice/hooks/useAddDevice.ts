import React from 'react'
import Router from 'next/router'
import { request } from '~/api'
import { DeviceType } from '~/models/devices'
import { Dispatch, useDispatch } from '~/store'
import { PAGE_URLS, STATE_KEY } from '~/constants'
import {
  ADD_DEVICE_STAGE,
  dropdownOsOptions,
  dropdownVendorOptions,
} from '../constants'

export type FormValuesType = {
  code: string
  os: string
  vendor: string
  model: string
  osVersion: string
  image: string
}

const useAddDevice = () => {
  const dispatch = useDispatch<Dispatch>()
  const [selectedOptions, setSelectedOptions] = React.useState({
    osIndex: 0,
    vendorIndex: 0,
  })
  const [hasError, setHasError] = React.useState(false)
  const [addDeviceStages, setAddDeviceStages] = React.useState(
    ADD_DEVICE_STAGE.INITIAL
  )

  const onDropdownSelect =
    (key: keyof typeof selectedOptions) => (value: number) => {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [key]: value,
      }))
    }

  const onSubmit = (values: FormValuesType) => {
    setAddDeviceStages(ADD_DEVICE_STAGE.SUBMITTING)

    request<DeviceType>({
      url: 'phones',
      method: 'POST',
      body: JSON.stringify({
        ...values,
        os: dropdownOsOptions[selectedOptions.osIndex],
        vendor: dropdownVendorOptions[selectedOptions.vendorIndex],
      }),
    })
      .then((data) => {
        setAddDeviceStages(ADD_DEVICE_STAGE.ADDED)
        dispatch[STATE_KEY.DEVICES].addDevice(data)
        Router.push(PAGE_URLS.HOME)
      })
      .catch(() => {
        setHasError(true)
        setAddDeviceStages(ADD_DEVICE_STAGE.INITIAL)
      })
  }

  return {
    selectedOptions,
    onDropdownSelect,
    onSubmit,
    hasError,
    addDeviceStages,
  }
}

export default useAddDevice
