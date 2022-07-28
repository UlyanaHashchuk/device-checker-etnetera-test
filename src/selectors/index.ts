import { createSelector, RootState } from '~/store'
import { STATE_KEY } from '~/constants'
import { AuthorizationStateType } from '~/models/authorization'
import { DevicesStateType } from '~/models/devices'

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

export const getDevices = createSelector(
  getDevicesState,
  (state) => state.devices
)
