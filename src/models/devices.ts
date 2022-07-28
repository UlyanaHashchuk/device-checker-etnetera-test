/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core'
import { RootModel } from '~/models/index'
import { UserInfoType } from '~/models/authorization'
import { STATE_KEY } from '~/constants'

export type DeviceType = {
  id: string
  code?: string
  os: string
  vendor: string
  model: string
  osVersion: string
  image: string
  borrowed?: {
    user: UserInfoType
    date: number
  }
}

export type DevicesStateType = {
  filters: {
    isChecked: boolean
    osIndex: number
    vendorIndex: number
  }
  devices: DeviceType[]
}

const initialState: DevicesStateType = {
  filters: {
    isChecked: false,
    osIndex: 0,
    vendorIndex: 0,
  },
  devices: [],
}

export const devices = createModel<RootModel>()({
  name: STATE_KEY.DEVICES,
  state: initialState,
  reducers: {
    setIsChecked(state, payload: boolean) {
      state.filters.isChecked = payload
    },
    setOsIndex(state, payload: number) {
      state.filters.osIndex = payload
    },
    setVendorIndex(state, payload: number) {
      state.filters.vendorIndex = payload
    },
    setDevices(state, payload: DeviceType[]) {
      state.devices = payload
    },
    resetState() {
      return initialState
    },
  },
})
