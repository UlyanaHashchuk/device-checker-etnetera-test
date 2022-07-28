import { createSelector, RootState } from '~/store'
import { STATE_KEY } from '~/constants'
import { AuthorizationStateType } from '~/models/authorization'
import { DevicesStateType } from '~/models/devices'
import { OS_OPTIONS, VENDOR_OPTIONS } from '~/components/Home/constants'

export const getAuthorizationState = (state: RootState) =>
  state[STATE_KEY.AUTHORIZATION] as AuthorizationStateType

export const getDevicesState = (state: RootState) =>
  state[STATE_KEY.DEVICES] as DevicesStateType

export const getUserType = createSelector(
  getAuthorizationState,
  (state) => state.user.type
)

export const getUser = createSelector(
  getAuthorizationState,
  (state) => state.user
)

export const getAuthState = createSelector(
  getAuthorizationState,
  (state) => state.authState
)

export const getDeviceFilters = createSelector(
  getDevicesState,
  (state) => state.filters
)

export const getDevices = createSelector(getDevicesState, (state) => {
  const { isChecked, osIndex, vendorIndex } = state.filters
  let devices = state.devices

  if (isChecked) {
    devices = devices.filter(({ borrowed }) => !borrowed)
  }

  if (osIndex) {
    devices = devices.filter(
      ({ os }) => os.toLowerCase() === OS_OPTIONS[osIndex].toLowerCase()
    )
  }

  if (vendorIndex) {
    devices = devices.filter(
      ({ vendor }) =>
        vendor.toLowerCase() === VENDOR_OPTIONS[vendorIndex].toLowerCase()
    )
  }

  return devices
})
