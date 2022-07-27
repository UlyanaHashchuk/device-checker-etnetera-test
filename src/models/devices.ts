/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core'
import { RootModel } from '~/models/index'

type DevicesState = {
  filters: {
    isChecked: boolean
    systemIndex: number
    vendorIndex: number
  }
}

const initialState: DevicesState = {
  filters: {
    isChecked: false,
    systemIndex: 0,
    vendorIndex: 0,
  },
}

export const devices = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setIsChecked(state, payload: boolean) {
      state.filters.isChecked = payload
    },
    setSystemIndex(state, payload: number) {
      state.filters.systemIndex = payload
    },
    setVendorIndex(state, payload: number) {
      state.filters.vendorIndex = payload
    },
    resetState(state) {
      state.filters = initialState.filters
    },
  },
})
